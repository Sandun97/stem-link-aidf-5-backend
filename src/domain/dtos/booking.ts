import { z } from "zod";

export const CreateBookingDTO = z.object({
  userId: z.string(),
  hotelId: z.string(),
  checkIn: z.coerce.date(),
  checkOut: z.coerce.date(),
  roomNumber: z.number(),
  guestName: z.string(),
  guestEmail: z.string().email(),
  guestPhone: z.string(),
  numGuests: z.number().min(1).max(10),
  specialRequests: z.string().optional(),
  paymentStatus: z.enum(["PENDING", "PAID"]).optional(),
  totalPrice: z.number(),
});