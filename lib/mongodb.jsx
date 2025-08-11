import mongoose from "mongoose";

const MONGODB_URI = "mongodb://localhost:27017/skillcertify"; // Replace DB name as needed

if (!MONGODB_URI) throw new Error("MongoDB URI not found");

let cached = global.mongoose || { conn: null, promise: null };

export async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true, 
    }).then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
  