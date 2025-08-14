import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import createOrderRoute from "./routes/create-order.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api", createOrderRoute);

// Health check
app.get("/", (req, res) => {
  res.json({ message: "SkillCertify Server is running!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}`);
  console.log(`Signup endpoint: http://localhost:${PORT}/api/auth/signup`);
  console.log(`Login endpoint: http://localhost:${PORT}/api/auth/login`);
  console.log(`Dashboard endpoint: http://localhost:${PORT}/api/create-order`);
});
