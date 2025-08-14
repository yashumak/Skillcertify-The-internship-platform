import mongoose from "mongoose";

const MONGODB_URI = "mongodb+srv://Yashumak:3hSiEsFhuSXF0TWH@cluster0.v1bwtoa.mongodb.net/skillcertify?retryWrites=true&w=majority&appName=Cluster0";

if (!MONGODB_URI) throw new Error("MongoDB URI not found");

let cached = global.mongoose || { conn: null, promise: null };

export async function connectDB() {
  if (cached.conn) {
    console.log("Using cached database connection");
    return cached.conn;
  }

  if (!cached.promise) {
    console.log("Creating new database connection...");
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000, // 5 second timeout
        socketTimeoutMS: 45000, // 45 second timeout
        bufferCommands: false, // Disable mongoose buffering
        bufferMaxEntries: 0, // Disable mongoose buffering
      })
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
