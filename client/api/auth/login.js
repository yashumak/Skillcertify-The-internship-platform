import { connectDB } from "../../lib/mongodb.js";
import User from "../../models/User.js";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        // Parse request body
        const { email, password } = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

        // Validate input fields
        if (!email || !password) {
            return res.status(400).json({ error: "Email and password required" });
        }

        // Validate email format
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: "Please enter a valid email address" });
        }

        // Connect to database
        console.log("Attempting to connect to database...");
        await connectDB();
        console.log("Database connected successfully");
        
        // Clean email input
        const trimmedEmail = email.trim().toLowerCase();
        
        // Search for user
        console.log("Searching for user with email:", trimmedEmail);
        const user = await User.findOne({ email: trimmedEmail });
        
        if (!user) {
            console.log("User not found");
            return res.status(401).json({ error: "Invalid credentials" });
        }
        
        // Verify password
        console.log("User found, comparing passwords...");
        const isPasswordValid = await bcrypt.compare(password, user.password);
        
        if (!isPasswordValid) {
            console.log("Password comparison failed");
            return res.status(401).json({ error: "Invalid credentials" });
        }
        
        console.log("Password verified, returning user data");
        // Return user data that frontend expects
        return res.status(200).json({ 
            message: "Login successful",
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (err) {
        console.error("Login error details:", {
            message: err.message,
            stack: err.stack,
            name: err.name,
            code: err.code
        });
        
        // Handle specific MongoDB errors
        if (err.name === 'ValidationError') {
            const validationErrors = Object.values(err.errors).map(e => e.message);
            return res.status(400).json({ error: validationErrors.join(', ') });
        }

        if (err.name === 'MongoNetworkError' || err.name === 'MongoServerSelectionError') {
            return res.status(500).json({ error: "Database connection failed. Please try again later." });
        }

        return res.status(500).json({ error: "Login failed. Please try again later." });
    }
}