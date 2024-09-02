const mongoose = require("mongoose");

// const URI = " mongodb://localhost:27017/mern_admin";
// const URI = " mongodb+srv://iamsudanishyam:@9067841145sh@c-user.k6nw1nh.mongodb.net/mern-admin?retryWrites=true&w=majority&appName=c-user";
const URI = process.env.MONGODB_URI;
// mongoose.connect(URI);

const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("database connection failed");
        process.exit();
    }
};


module.exports = connectDb;
