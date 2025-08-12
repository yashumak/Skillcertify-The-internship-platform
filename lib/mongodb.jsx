import mongoose from "mongoose";

const MONGODB_URI = "mongodb://localhost:27017/skillcertify"; // Replace DB name as needed

if (!MONGODB_URI) throw new Error("MongoDB URI not found");

<<<<<<< HEAD
// U~se global cache for development to avoid multiple connections
=======
// Use global cache for development to avoid multiple connections
>>>>>>> e53e2cc3c0881c10ffbef5bb1d20042510a097f8
let cached = global.mongoose || { conn: null, promise: null };

export async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  global.mongoose = cached; // <-- Add this line
  return cached.conn;
}
