import { connectDB } from "../../lib/mongodb.jsx";
import User from "../../models/User.jsx";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        res.status(405).json({ error: "Method not allowed" });
        return;
    }

    const { name, email, password } = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    if (!name || !email || !password) {
        res.status(400).json({ error: "All fields are required" });
        return;
    }

    await connectDB();

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            res.status(400).json({ error: "Email already registered" });
            return;
        }
        const user = new User({ name, email, password });
        await user.save();
        res.status(201).json({ message: "Signup successful" });
    } catch (err) {
        console.error("Signup error:", err);
        res.status(500).json({ error: "Signup failed", details: err.message });
    }
}