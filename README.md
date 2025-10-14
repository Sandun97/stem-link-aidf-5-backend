# Hotel Management System – Backend (Node.js + Express)

This is the backend application for the Hotel Management System, built using Node.js, Express, and MongoDB.

---

## Repositories

- **Frontend:** [hotel-frontend](https://github.com/Sandun97/stem-link-aidf-5-frontend.git)
- **Backend (this repo):** [hotel-backend](https://github.com/Sandun97/stem-link-aidf-5-backend.git)

> Make sure to clone and set up both the frontend and backend repositories for full functionality.

---

## Node Version

This project currently requires **Node.js version 20.x**.

> Check your version with:
> ```bash
> node -v --v22.17.0
> ```

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with your MongoDB Atlas connection string:
```env
MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net/hotel_db?retryWrites=true&w=majority
```

3. Run the seed script to populate the database with initial data:
```bash
npm run seed
```

4. Start the development server:
```bash
npm run dev
```

## Database Seeding

The seed script will:
- Connect to your MongoDB Atlas database
- Clear existing data (users, reviews, hotels, locations)
- Insert 8 sample users
- Insert 19 sample reviews
- Insert 8 sample hotels (with review references)
- Insert 8 sample locations
- Exit automatically when complete

## Available Scripts

- `npm run dev` - Start development server with nodemon
- `npm run seed` - Run database seed script

## Database Schema

### User
- fname (String, required)
- lname (String, required)
- email (String, required)
- address (Object with line_1, city, country, zip required)

### Review
- rating (Number, 1-5, required)
- comment (String, required)
- userId (ObjectId, references User model, required)

### Hotel
- name (String, required)
- location (String, required)
- image (String, required)
- description (String, required)
- price (Number, required)
- rating (Number, 0-5)
- reviews (Array of ObjectIds, references Review model)

### Location
- name (String, required)
