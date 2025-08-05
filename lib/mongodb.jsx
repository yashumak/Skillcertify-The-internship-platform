import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017"; // replace with your MongoDB URI
const client = new MongoClient(uri);

export const db = client.db();
