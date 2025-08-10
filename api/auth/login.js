import { connectDB } from "../../lib/mongodb.jsx";
import User from "../../models/User.jsx";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        res.status(405).json({ error: "Method not allowed" });
        return;
    }

    const { email, password } = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    if (!email || !password) {
        res.status(400).json({ error: "Email and password required" });
        return;
    }

    await connectDB();

    try {
        const user = await User.findOne({ email });
        if (!user || user.password !== password) {
            res.status(401).json({ error: "Invalid credentials" });
            return;
        }
        res.status(200).json({ message: "Login successful" });
    } catch (err) {