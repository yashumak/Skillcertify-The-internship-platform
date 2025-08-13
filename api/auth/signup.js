import connectDB from "../db/connectDB";
import User from "../../models/User.jsx";
import bcrypt from "bcryptjs";

export default async function signup(req, res) {
    if (req.method !== "POST") {
        res.status(405).json({ error: "Method not allowed" });
        return;
    }

    const { name, email, password } =
        typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    if (!name || !email || !password) {
        res.status(400).json({ error: "All fields are required" });
        return;
    }

    try {
        await connectDB();
    } catch (err) {
        console.error("Database connection error:", err);
        res.status(500).json({ error: "Database connection failed" });
        return;
    }

    try {
        const trimmedEmail = email.trim().toLowerCase();
        const trimmedName = name.trim();

        const existingUser = await User.findOne({ email: trimmedEmail });
        if (existingUser) {
            res.status(400).json({ error: "Email already registered" });
            return;
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
}
