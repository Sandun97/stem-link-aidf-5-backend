import express from "express";
import {
    createBooking,
    checkBookingAvailability
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

export default bookingsRouter;