import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

dotenv.config();

const corsOptions = {
    origin: "https://bookstore-app-mu-pink.vercel.app/",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204
};
app.use(cors(corsOptions)); 
app.use(express.json());

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Middleware
// app.use(cors());
// app.use(express.json());

// Connect to MongoDB
try {
  mongoose.connect(URI);
  console.log("Connected to mongoDB");
} catch (error) {
  console.log("Error connecting to mongoDB: ", error);
}

// Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});