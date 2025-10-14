import Booking from "../infrastructure/entities/Booking";
import NotFoundError from "../domain/errors/not-found-error";
import ValidationError from "../domain/errors/validation-error";
import { Request, Response, NextFunction } from "express";
import { CreateBookingDTO } from "../domain/dtos/booking";

export const createBooking = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const bookingData = req.body;
        const result = CreateBookingDTO.safeParse(bookingData);
        if (!result.success) {
            throw new ValidationError(`${result.error.message}`);
        }
        const createdBooking = await Booking.create(result.data);
        const bookingWithId = {
            ...createdBooking.toObject(),
            id: createdBooking.id || createdBooking._id?.toString()
        };
        res.status(201).send(bookingWithId);
    } catch (error) {
        console.log(error)
        next(error);
    }
}

export const checkBookingAvailability = async (req: Request, res: Response, next: NextFunction) => {
    try {

        // console.log('check booking');
        // Accept payload from req.body (POST) or req.query (GET)
        const { hotelId, checkIn, checkOut } = req.method === "GET" ? req.query : req.body;

        if (!hotelId || !checkIn || !checkOut) {
            throw new ValidationError("hotelId, checkIn, and checkOut are required");
        }

        const _hotelId = hotelId;
        const _checkIn = new Date(checkIn as string);
        const _checkOut = new Date(checkOut as string);

        // Find if there is any booking for this hotel that overlaps with the requested dates
        const overlappingBooking = await Booking.findOne({
            hotelId: _hotelId,
            $or: [
                {
                    checkIn: { $lt: _checkOut },
                    checkOut: { $gt: _checkIn }
                }
            ]
        });

        if (overlappingBooking) {
            // If there is an overlapping booking, availability is false
            res.status(200).json({ availability: false });
        } else {
            // If no overlapping booking, availability is true
            res.status(200).json({ availability: true });
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
};