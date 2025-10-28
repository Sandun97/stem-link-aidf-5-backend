import express from "express";
import {
    createBooking,
    checkBookingAvailability,
    getBookings
} from "../application/booking";
import isAuthenticated from "./middleware/authentication-middleware";
import isAdmin from "./middleware/authorization-middleware";

const bookingsRouter = express.Router();

bookingsRouter
    .route("/")
    .post(isAdmin, isAuthenticated, createBooking);

bookingsRouter
    .route("/checkBookingAvailability")
    .get(isAdmin, isAuthenticated, checkBookingAvailability);

bookingsRouter
    .route("/getBookings")
    .get(isAdmin, isAuthenticated, getBookings);

export default bookingsRouter;