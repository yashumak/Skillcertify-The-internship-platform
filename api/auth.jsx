import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../lib/mongodb";
import User from "../models/User";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST":
      // Handle login request
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user || user.password !== password) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
      // Return a JSON Web Token (JWT) or a session cookie
      return res.json({ token: "your-jwt-token" });
    case "POST":
      // Handle signup request
      const { name, email, password } = req.body;
      const newUser = new User({ name, email, password });
      await newUser.save();
      return res.json({ message: "User created successfully" });
    default:
      return res.status(405).json({ error: "Method not allowed" });
  }
}
