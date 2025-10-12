import express from "express";
import {
    createCheckoutSession,
    getCheckoutSession
} from "../application/payment";

const paymentsRouter = express.Router();

paymentsRouter
    .route("/create-checkout-session")
    .post(createCheckoutSession);

paymentsRouter
    .route("/get-checkout-session")
    .get(getCheckoutSession);

export default paymentsRouter;