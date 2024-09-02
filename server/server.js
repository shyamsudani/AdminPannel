require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router/auth-router");
const contect_router = require("./router/contect-router");
const service_router = require("./router/service")
const admin_userrouter = require("./router/admin-rroute");
const errorMiddleware = require("./Middlewares/error-middleware");
const cors = require("cors");

// Enable CORS for all routes
const corsOption = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
}

app.use(cors(corsOption));

// Middule ware
app.use(express.json());

app.use("/api/auth", router);

app.use("/api/form", contect_router);

app.use("/api/data", service_router);

app.use("/api/admin" , admin_userrouter);

const connectDb = require("./utils/db");


const port = 5000;

app.use(errorMiddleware);
connectDb().then(() => {
    console.log("Database connected");
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});