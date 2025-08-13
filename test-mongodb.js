import mongoose from "mongoose";

const MONGODB_URI = "mongodb://localhost:27017/skillcertify";

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("MongoDB Connected!");
        mongoose.connection.close();
    })
    .catch((err) => {
        console.error("MongoDB Connection Error:", err);
    });