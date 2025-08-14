import { connectDB } from "../../lib/mongodb.js";
import User from "../../models/User.js";
import bcrypt from "bcryptjs";

export default async function signup(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        // Parse request body
        const { name, email, password } = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

        // Validate input fields
        if (!name || !email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Validate email format
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: "Please enter a valid email address" });
        }

        // Validate password length
        if (password.length < 6) {
            return res.status(400).json({ error: "Password must be at least 6 characters long" });
        }

        // Connect to database
        console.log("Attempting to connect to database...");
        await connectDB();
        console.log("Database connected successfully");

        // Clean and validate input data
        const trimmedEmail = email.trim().toLowerCase();
        const trimmedName = name.trim();

        // Check if user already exists
        console.log("Checking for existing user...");
        const existingUser = await User.findOne({ email: trimmedEmail });
        if (existingUser) {
            return res.status(400).json({ error: "Email already registered" });
        }

        // Hash password
        console.log("Hashing password...");
        const hashedPassword = await bcrypt.hash(password, 12);

        // Create new user
        console.log("Creating new user...");
        const user = new User({
            name: trimmedName,
            email: trimmedEmail,
            password: hashedPassword,
        });

        await user.save();
        console.log("User created successfully");

        return res.status(201).json({ 
            message: "Signup successful",
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (err) {
        console.error("Signup error details:", {
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

        if (err.code === 11000) {
            return res.status(400).json({ error: "Email already registered" });
        }

        if (err.name === 'MongoNetworkError' || err.name === 'MongoServerSelectionError') {
            return res.status(500).json({ error: "Database connection failed. Please try again later." });
        }

        return res.status(500).json({ error: "Signup failed. Please try again later." });
    }
}
