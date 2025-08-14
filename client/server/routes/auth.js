import express from 'express';
import { connectDB } from '../lib/mongodb.js';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';

const router = express.Router();

// Signup endpoint
router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        await connectDB();
        
        const trimmedEmail = email.trim().toLowerCase();
        const trimmedName = name.trim();

        const existingUser = await User.findOne({ email: trimmedEmail });
        if (existingUser) {
            return res.status(400).json({ error: "Email already registered" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            name: trimmedName,
            email: trimmedEmail,
            password: hashedPassword,
        });

        await user.save();
        res.status(201).json({ message: "Signup successful" });
    } catch (err) {
        console.error("Signup error:", err);
        res.status(500).json({ error: "Signup failed" });
    }
});

// Login endpoint
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Email and password required" });
    }

    try {
        console.log("Attempting to connect to database...");
        await connectDB();
        console.log("Database connected successfully");
        
        console.log("Searching for user with email:", email);
        const user = await User.findOne({ email });
        
        if (!user) {
            console.log("User not found");
            return res.status(401).json({ error: "Invalid credentials" });
        }
        
        console.log("User found, comparing passwords...");
        const isPasswordValid = await bcrypt.compare(password, user.password);
        
        if (!isPasswordValid) {
            console.log("Password comparison failed");
            return res.status(401).json({ error: "Invalid credentials" });
        }
        
        console.log("Password verified, returning user data");
        res.status(200).json({ 
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
            name: err.name
        });
        
        if (err.name === 'MongoNetworkError') {
            res.status(500).json({ error: "Database connection failed - Network error" });
        } else if (err.name === 'MongoServerSelectionError') {
            res.status(500).json({ error: "Database connection failed - Server selection error" });
        } else {
            res.status(500).json({ error: `Login failed - ${err.message}` });
        }
    }
});

export default router;
