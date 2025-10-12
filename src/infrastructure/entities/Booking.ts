import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    userId: {
        // type: mongoose.Schema.Types.ObjectId,
        type: String,
        ref: "User",
        required: true,
    },
    hotelId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hotel",
        required: true,
    },
    checkIn: {
        type: Date,
        required: true,
    },
    checkOut: {
        type: Date,
        required: true,
    },
    roomNumber: {
        type: Number,
        required: true,
    },
    guestName: {
        type: String,
        required: true,
    },
    guestEmail: {
        type: String,
        required: true,
    },
    guestPhone: {
        type: String,
        required: true,
    },
    numGuests: {
        type: Number,
        required: true,
        min: 1,
        max: 10,
    },
    specialRequests: {
        type: String,
        default: "",
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    paymentStatus: {
        type: String,
        enum: ["PENDING", "PAID"],
        default: "PENDING",
    }
});

const booking = mongoose.model("booking", bookingSchema);

export default booking;