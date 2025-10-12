import dotenv from "dotenv";
import connectDB from "../infrastructure/db";
import Hotel from "../infrastructure/entities/Hotel";
import Location from "../infrastructure/entities/Location";
import User from "../infrastructure/entities/User";
import Review from "../infrastructure/entities/Review";
import { hotels, locations, users, reviews } from "./seedData";
import { generateEmbedding } from "../application/utils/embeddings";

// Load environment variables
dotenv.config();

const seedDatabase = async () => {
    try {
        // Connect to MongoDB
        await connectDB();
        console.log("Connected to MongoDB for seeding...");

        // Clear existing data (in reverse order of dependencies)
        await Hotel.deleteMany({});
        await Review.deleteMany({});
        await User.deleteMany({});
        await Location.deleteMany({});
        console.log("Cleared existing data...");

        // Insert users first
        const insertedUsers = await User.insertMany(users);
        console.log(`Inserted ${insertedUsers.length} users`);

        // Link reviews to users (assigning reviews to users in order)
        const reviewsWithUsers = reviews.map((review, index) => ({
            ...review,
            userId: insertedUsers[index % insertedUsers.length]._id
        }));

        // Insert reviews (with proper user references)
        const insertedReviews = await Review.insertMany(reviewsWithUsers);
        console.log(`Inserted ${insertedReviews.length} reviews`);

        // Insert locations
        const insertedLocations = await Location.insertMany(locations);
        console.log(`Inserted ${insertedLocations.length} locations`);



        // Link hotels to reviews (distributing reviews across hotels)
        const hotelsWithReviews = hotels.map((hotel, index) => {
            if (index === 0) {
                // Montmartre Majesty Hotel gets first 3 reviews
                return { ...hotel, reviews: [insertedReviews[0]._id, insertedReviews[1]._id, insertedReviews[2]._id] };
            } else if (index === 1) {
                // Loire Luxury Lodge gets next 2 reviews
                return { ...hotel, reviews: [insertedReviews[3]._id, insertedReviews[4]._id] };
            } else if (index === 2) {
                // Tokyo Tower Inn gets next 3 reviews
                return { ...hotel, reviews: [insertedReviews[5]._id, insertedReviews[6]._id, insertedReviews[7]._id] };
            } else if (index === 3) {
                // Sydney Harbor Hotel gets next 3 reviews
                return { ...hotel, reviews: [insertedReviews[8]._id, insertedReviews[9]._id, insertedReviews[10]._id] };
            } else if (index === 4) {
                // Maldives Paradise Resort gets next 2 reviews
                return { ...hotel, reviews: [insertedReviews[11]._id, insertedReviews[12]._id] };
            } else if (index === 5) {
                // Swiss Alpine Lodge gets next 2 reviews
                return { ...hotel, reviews: [insertedReviews[13]._id, insertedReviews[14]._id] };
            } else if (index === 6) {
                // New York Grand Hotel gets next 2 reviews
                return { ...hotel, reviews: [insertedReviews[15]._id, insertedReviews[16]._id] };
            } else {
                // Barcelona Boutique Hotel gets last 2 reviews
                return { ...hotel, reviews: [insertedReviews[17]._id, insertedReviews[18]._id] };
            }
        });

        // Insert hotels (with proper Embeddings references)
        const hotelsWithEmbedding = hotelsWithReviews.map(async (hotel) => {
            console.log("Embedding hotel", hotel.name);
            const embedding = await generateEmbedding(
                `${hotel.name} ${hotel.description} ${hotel.location} ${hotel.price}`
            );
            return { ...hotel, embedding };
        });
        const toBeCreatedHotels = await Promise.all(hotelsWithEmbedding);

        // Insert hotels (with proper review references and Embeddings)
        const insertedHotels = await Hotel.insertMany(toBeCreatedHotels);
        console.log(`Inserted ${insertedHotels.length} hotels`);

        console.log("Database seeding completed successfully!");
        console.log("\nSummary:");
        console.log(`- Users: ${insertedUsers.length}`);
        console.log(`- Reviews: ${insertedReviews.length}`);
        console.log(`- Locations: ${insertedLocations.length}`);
        console.log(`- Hotels: ${insertedHotels.length}`);

        console.log("\nHotel Review Distribution:");
        hotels.forEach((hotel, index) => {
            const reviewCount = hotelsWithReviews[index].reviews.length;
            console.log(`- ${hotel.name}: ${reviewCount} reviews`);
        });

        process.exit(0);
    } catch (error) {
        console.error("Error seeding database:", error);
        process.exit(1);
    }
};

// Run the seed function
seedDatabase();
