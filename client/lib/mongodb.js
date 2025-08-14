import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://Yashumak:3hSiEsFhuSXF0TWH@cluster0.v1bwtoa.mongodb.net/skillcertify?retryWrites=true&w=majority&appName=Cluster0";

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env");
}

let cached = global.mongoose || { conn: null, promise: null };

export async function connectDB() {
  if (cached.conn) {
    console.log("Using cached database connection");
    return cached.conn;
  }

  if (!cached.promise) {
    console.log("Creating new database connection...");
    const opts = {
      bufferCommands: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
      family: 4
    };

    cached.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then((mongoose) => {
        console.log("MongoDB connection promise resolved");
        return mongoose;
      })
      .catch((error) => {
        console.error("MongoDB connection promise failed:", error);
        cached.promise = null;
        throw error;
      });
  }

  try {
    console.log("Waiting for database connection...");
    cached.conn = await cached.promise;
    console.log("MongoDB Atlas connected successfully to skillcertify database");
    global.mongoose = cached; // Ensures cache works in dev
    return cached.conn;
  } catch (error) {
    console.error("MongoDB connection error:", {
      message: error.message,
      name: error.name,
      code: error.code
    });
    cached.promise = null;
    throw error;
  }
}
