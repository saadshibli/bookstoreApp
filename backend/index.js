import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";


import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';
const app = express();

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Configure CORS to allow your Vercel frontend URL
const corsOptions = {
    origin: "https://bookstore-app-zdgj.vercel.app", // Your deployed frontend URL
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204
};
app.use(cors(corsOptions)); //
app.use(express.json());

// app.use(cors()); //cors is a middleware that allows the server to accept requests from different origins
// app.use(express.json()); //express.json() is a middleware that allows the server to accept requests from different origins

// connect to mongoDB
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB")
} catch (error) {
    console.log("Error: ", error);
}

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
