import Booking from "../infrastructure/entities/Booking";
import ValidationError from "../domain/errors/validation-error";
import { Request, Response, NextFunction } from "express";

const FRONTEND_URL = process.env.VITE_FRONTEND_URL;
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export const createCheckoutSession = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const booking = req.body;

        // Robust input validation for required booking fields
        const missingFields: string[] = [];
        if (!booking) {
            throw new ValidationError("No booking data provided in request body.");
        }
        if (typeof booking.guestName !== "string" || booking.guestName.trim() === "") {
            missingFields.push("guestName");
        }
        if (typeof booking.guestEmail !== "string" || booking.guestEmail.trim() === "") {
            missingFields.push("guestEmail");
        }
        if (!booking.hotelId) {
            missingFields.push("hotelId");
        }
        if (!booking.bookingId) {
            missingFields.push("bookingId");
        }
        if (!booking.checkIn) {
            missingFields.push("checkIn");
        }
        if (!booking.checkOut) {
            missingFields.push("checkOut");
        }
        if (
            booking.totalPrice === undefined ||
            booking.totalPrice === null ||
            isNaN(Number(booking.totalPrice))
        ) {
            missingFields.push("totalPrice");
        }
        if (missingFields.length > 0) {
            throw new ValidationError(
                `Missing or invalid required booking fields for payment: ${missingFields.join(", ")}`
            );
        }

        // Ensure the totalPrice is a finite number
        const totalPriceNumber = Number(booking.totalPrice);
        if (!isFinite(totalPriceNumber) || totalPriceNumber <= 0) {
            throw new ValidationError("Total price for booking is invalid.");
        }

        // Stripe expects a specific format for line_items
        const lineItem = {
            price_data: {
                currency: "usd",
                product_data: {
                    name: `Booking for ${booking.guestName} (${booking.guestEmail})`,
                    description: `Stay at Hotel ID: ${booking.hotelId}, Check-in: ${booking.checkIn}, Check-out: ${booking.checkOut}`,
                },
                unit_amount: Math.round(totalPriceNumber * 100), // amount in cents
            },
            quantity: 1,
        };

        // Defensive: Stripe expects integer unit_amount >= 0
        if (
            typeof lineItem.price_data.unit_amount !== "number" ||
            !Number.isFinite(lineItem.price_data.unit_amount) ||
            isNaN(lineItem.price_data.unit_amount) ||
            lineItem.price_data.unit_amount <= 0
        ) {
            throw new ValidationError("Stripe line item amount is invalid.");
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [lineItem],
            mode: "payment",
            success_url: `${process.env.VITE_FRONTEND_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.VITE_FRONTEND_URL}/payment/cancel`,
            customer_email: booking.guestEmail ?? "",
            metadata: {
              bookingId: booking.bookingId?.toString(),
              guestEmail: booking.guestEmail,
              hotelId: booking.hotelId
            },
        });

        res.json({ url: session.url });

    } catch (error) {
        // console.error("Stripe error:", error);
        if (error instanceof ValidationError) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(500).json({ error: "Stripe payment initialization failed" });
        }
    }
};

export const getCheckoutSession = async (req: Request, res: Response, next: NextFunction) => {
    // Accept session_id from either query params or POST body
    const sessionId =
        (req.method === "GET"
            ? req.query.session_id
            : req.body?.session_id) as string;

    // console.log(sessionId);
    if (!sessionId)
        return res.status(400).json({ error: "session_id is required" });

    try {
        const session = await stripe.checkout.sessions.retrieve(sessionId);

        // After retrieving the Stripe session, if payment is complete/successful, update the booking paymentStatus as PAID
        if (
            session.payment_status === "paid" ||
            session.status === "complete" ||
            session.status === "paid"
        ) {
            // Use the Booking entity (mongoose model) imported above
            const bookingId = session.metadata?.bookingId;
            if (bookingId) {
                await Booking.findByIdAndUpdate(bookingId, { paymentStatus: "PAID" });
            }
        }

        // Return only essential information to the frontend
        res.json({
            id: session.id,
            payment_status: session.payment_status,
            amount_total: session.amount_total,
            currency: session.currency,
            customer_email: session.customer_email,
            status: session.status,
            metadata: session.metadata,
        });
    } catch (err: any) {
        // console.error("Retrieve session error:", err.message);
        res.status(500).json({ error: err.message });
    }
};