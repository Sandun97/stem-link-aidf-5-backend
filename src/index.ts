import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import cors from 'cors';
import hotelsRouter from "./api/hotel";
import locationsRouter from "./api/location";
import reviewsRouter from "./api/review";
import bookingRouter from "./api/booking";
import paymentRouter from "./api/payment";
import connectDB from './infrastructure/db';
import globalErrorHandlingMiddleware from "./api/middleware/global-error-handling-middleware";

import { clerkMiddleware } from "@clerk/express";

const app = express();

app.use(express.json());
app.use(cors({
    // origin: "http://localhost:5173",
    origin: process.env.VITE_FRONTEND_URL,
    credentials: true,
}));

app.use(clerkMiddleware()); // Reads the JWT from the request and sets the auth object on the request
// app.use((req, res, next) => {
//     console.log(req.method, req.url);
//     next();
// });

app.use("/api/hotels", hotelsRouter);
app.use("/api/locations", locationsRouter);
app.use("/api/reviews", reviewsRouter);
app.use("/api/bookings", bookingRouter);
app.use("/api/payments", paymentRouter);

app.use(globalErrorHandlingMiddleware);

connectDB();

const PORT = 8000;
app.listen(PORT, () => {
    console.log("Server is listening on port", PORT);
});


