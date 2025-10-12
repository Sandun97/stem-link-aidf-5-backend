

export const users = [
    {
        fname: "John",
        lname: "Doe",
        email: "john.doe@example.com",
        address: {
            line_1: "123 Main Street",
            line_2: "Apt 4B",
            city: "New York",
            state: "NY",
            country: "USA",
            zip: "10001"
        }
    },
    {
        fname: "Jane",
        lname: "Smith",
        email: "jane.smith@example.com",
        address: {
            line_1: "456 Oak Avenue",
            city: "Los Angeles",
            state: "CA",
            country: "USA",
            zip: "90210"
        }
    },
    {
        fname: "Mike",
        lname: "Johnson",
        email: "mike.johnson@example.com",
        address: {
            line_1: "789 Pine Road",
            city: "Chicago",
            state: "IL",
            country: "USA",
            zip: "60601"
        }
    },
    {
        fname: "Sarah",
        lname: "Williams",
        email: "sarah.williams@example.com",
        address: {
            line_1: "321 Elm Street",
            city: "Boston",
            state: "MA",
            country: "USA",
            zip: "02101"
        }
    },
    {
        fname: "David",
        lname: "Brown",
        email: "david.brown@example.com",
        address: {
            line_1: "654 Maple Drive",
            city: "Seattle",
            state: "WA",
            country: "USA",
            zip: "98101"
        }
    },
    {
        fname: "Emily",
        lname: "Davis",
        email: "emily.davis@example.com",
        address: {
            line_1: "987 Cedar Lane",
            city: "Miami",
            state: "FL",
            country: "USA",
            zip: "33101"
        }
    },
    {
        fname: "Robert",
        lname: "Wilson",
        email: "robert.wilson@example.com",
        address: {
            line_1: "147 Birch Court",
            city: "Denver",
            state: "CO",
            country: "USA",
            zip: "80201"
        }
    },
    {
        fname: "Lisa",
        lname: "Anderson",
        email: "lisa.anderson@example.com",
        address: {
            line_1: "258 Spruce Way",
            city: "Austin",
            state: "TX",
            country: "USA",
            zip: "73301"
        }
    }
];

export const reviews = [
    // Reviews for Montmartre Majesty Hotel
    {
        rating: 5,
        comment: "Absolutely amazing hotel! The view of the Eiffel Tower was breathtaking. Staff was very friendly and helpful.",
        userId: null
    },
    {
        rating: 4,
        comment: "Great location and beautiful rooms. The breakfast was delicious. Would definitely recommend!",
        userId: null
    },
    {
        rating: 5,
        comment: "Perfect location in Montmartre. The rooftop terrace has incredible city views. Room was spacious and clean.",
        userId: null
    },
    
    // Reviews for Loire Luxury Lodge
    {
        rating: 5,
        comment: "Luxury at its finest! The vineyard views were spectacular and the service was impeccable.",
        userId: null
    },
    {
        rating: 4,
        comment: "Beautiful chateau-style hotel. The wine tasting experience was unforgettable. Rooms are elegant.",
        userId: null
    },
    
    // Reviews for Tokyo Tower Inn
    {
        rating: 5,
        comment: "Perfect blend of traditional Japanese hospitality and modern comfort. The Tokyo Tower view is incredible!",
        userId: null
    },
    {
        rating: 4,
        comment: "Excellent location near Tokyo Tower. The onsen experience was amazing. Staff speaks English well.",
        userId: null
    },
    {
        rating: 5,
        comment: "Stunning city views from the room. The traditional Japanese breakfast was a highlight. Very clean and modern.",
        userId: null
    },
    
    // Reviews for Sydney Harbor Hotel
    {
        rating: 4,
        comment: "Modern hotel with excellent amenities. The city views are amazing, especially at night.",
        userId: null
    },
    {
        rating: 4,
        comment: "Beautiful harbor views and excellent location. The rooms are spacious and well-appointed.",
        userId: null
    },
    {
        rating: 5,
        comment: "Perfect location for exploring Sydney. The Opera House view from our room was spectacular!",
        userId: null
    },
    
    // Reviews for new hotels
    {
        rating: 5,
        comment: "Luxurious resort with stunning beach views. The infinity pool overlooking the ocean is magical.",
        userId: null
    },
    {
        rating: 4,
        comment: "Beautiful beachfront property. The spa services were excellent and the food was delicious.",
        userId: null
    },
    {
        rating: 5,
        comment: "Amazing mountain views and cozy atmosphere. Perfect for a romantic getaway. The fireplace in the room was wonderful.",
        userId: null
    },
    {
        rating: 4,
        comment: "Great ski-in/ski-out location. The hot tub with mountain views was perfect after a day of skiing.",
        userId: null
    },
    {
        rating: 5,
        comment: "Historic charm meets modern luxury. The rooftop bar has incredible city skyline views.",
        userId: null
    },
    {
        rating: 4,
        comment: "Beautiful historic building with modern amenities. The location is perfect for exploring the city.",
        userId: null
    },
    {
        rating: 5,
        comment: "Exclusive boutique hotel with personalized service. The private terrace was perfect for evening drinks.",
        userId: null
    },
    {
        rating: 4,
        comment: "Intimate and luxurious. The attention to detail in service and amenities is outstanding.",
        userId: null
    }
];

// Image URLs to reuse
const IMAGE_1 = "https://cf.bstatic.com/xdata/images/hotel/max1280x900/297840629.jpg?k=d20e005d5404a7bea91cb5fe624842f72b27867139c5d65700ab7f69396026ce&o=&hp=1";
const IMAGE_2 = "https://cf.bstatic.com/xdata/images/hotel/max1280x900/596257607.jpg?k=0b513d8fca0734c02a83d558cbad7f792ef3ac900fd42c7d783f31ab94b4062c&o=&hp=1";
const IMAGE_3 = "https://cf.bstatic.com/xdata/images/hotel/max1280x900/308797093.jpg?k=3a35a30f15d40ced28afacf4b6ae81ea597a43c90c274194a08738f6e760b596&o=&hp=1";
const IMAGE_4 = "https://cf.bstatic.com/xdata/images/hotel/max1280x900/84555265.jpg?k=ce7c3c699dc591b8fbac1a329b5f57247cfa4d13f809c718069f948a4df78b54&o=&hp=1";

// Use the four image URLs defined above for all hotels, cycling through them
const hotelImages = [IMAGE_1, IMAGE_2, IMAGE_3, IMAGE_4];

export const hotels = [
    {
        name: "Montmartre Majesty Hotel",
        description: "Experience the charm of Montmartre at this luxurious Parisian hotel, offering elegantly appointed rooms with panoramic city and Eiffel Tower views. Enjoy amenities such as a rooftop terrace, gourmet restaurant, spa, fitness center, free WiFi, and private parking. Located in the heart of Paris, guests are steps away from iconic attractions like Sacré-Cœur and vibrant local cafés. The hotel’s main features include classic French décor, attentive concierge service, and rooms with large windows overlooking the romantic Paris skyline.",
        image: hotelImages[2],
        location: "Paris, France",
        rating: 4.7,
        reviews: [],
        price: 160,
    },
    {
        name: "Loire Luxury Lodge",
        description: "Discover the beauty of the Loire Valley at this luxury lodge, featuring spacious rooms with vineyard and river views. Amenities include an outdoor pool, fine dining restaurant, wine cellar, complimentary WiFi, and on-site parking. Guests can explore nearby châteaux, cycle through scenic countryside, or relax in the tranquil gardens. The lodge’s main highlights are its exclusive wine tastings, serene setting, and rooms with private balconies overlooking the Loire River and lush vineyards.",
        image: hotelImages[0],
        location: "Loire Valley, France",
        rating: 4.7,
        reviews: [],
        price: 200,
    },
    {
        name: "Tokyo Tower Inn",
        description: "Stay in the heart of Tokyo at this modern hotel, offering stylish rooms with breathtaking views of the Tokyo Tower and city skyline. Amenities include a rooftop bar, Japanese and international restaurants, fitness center, free high-speed WiFi, and secure parking. Located near Shiba Park and Roppongi, guests enjoy easy access to shopping, nightlife, and cultural sites. The hotel’s main features are its contemporary design, attentive service, and rooms with floor-to-ceiling windows showcasing the vibrant cityscape.",
        image: hotelImages[1],
        location: "Tokyo, Japan",
        rating: 4.4,
        reviews: [],
        price: 250,
    },
    {
        name: "Sydney Harbor Hotel",
        description: "Experience luxury on Sydney’s waterfront at this five-star hotel, featuring rooms with spectacular views of the Sydney Opera House and Harbor Bridge. Amenities include an outdoor pool, award-winning seafood restaurant, spa, gym, complimentary WiFi, and valet parking. Located in Circular Quay, guests are within walking distance of The Rocks, Royal Botanic Garden, and vibrant harborside attractions. The hotel’s main highlights are its prime location, world-class service, and rooms with private balconies overlooking the sparkling harbor.",
        image: hotelImages[3],
        location: "Sydney, Australia",
        rating: 4.8,
        reviews: [],
        price: 300,
    },
    {
        name: "Maldives Paradise Resort",
        description: "Escape to an overwater paradise in the Maldives, where luxurious villas offer direct access to turquoise lagoons and white sandy beaches. Enjoy amenities such as a private infinity pool, beachfront dining, spa, water sports center, free WiFi, and airport transfers. The resort is surrounded by coral reefs, perfect for snorkeling and diving. Main features include romantic sunset views, personalized butler service, and rooms with glass floors for underwater viewing.",
        image: hotelImages[1],
        location: "Maldives",
        rating: 4.9,
        reviews: [],
        price: 450,
    },
    {
        name: "Swiss Alpine Lodge",
        description: "Nestled in the Swiss Alps, this cozy lodge offers breathtaking mountain views, ski-in/ski-out access, and authentic Swiss hospitality. Amenities include a heated indoor pool, gourmet Swiss restaurant, sauna, fitness center, free WiFi, and on-site parking. Located near Zermatt, guests can enjoy hiking, skiing, and exploring alpine villages. The lodge’s main features are its rustic-chic rooms with balconies overlooking the Matterhorn and a welcoming après-ski lounge.",
        image: hotelImages[3],
        location: "Zermatt, Switzerland",
        rating: 4.6,
        reviews: [],
        price: 280,
    },
    {
        name: "New York Grand Hotel",
        description: "Experience the energy of Manhattan at this iconic hotel, offering elegant rooms with stunning city skyline views. Amenities include a rooftop bar, fine dining restaurant, 24-hour fitness center, complimentary WiFi, and valet parking. Located in Midtown, guests are steps from Times Square, Central Park, and Broadway theaters. The hotel’s main highlights are its Art Deco design, attentive concierge, and rooms with panoramic windows overlooking the New York skyline.",
        image: hotelImages[0],
        location: "New York, USA",
        rating: 4.5,
        reviews: [],
        price: 320,
    },
    {
        name: "Barcelona Boutique Hotel",
        description: "Charming boutique hotel in the heart of Barcelona, blending authentic Spanish culture with modern luxury. Enjoy amenities such as a rooftop terrace with city views, tapas bar, outdoor pool, free WiFi, and private parking. Located near La Rambla and the Gothic Quarter, guests can explore vibrant markets and historic sites. Main features include contemporary rooms with balconies, personalized service, and views of Barcelona’s colorful cityscape.",
        image: hotelImages[2],
        location: "Barcelona, Spain",
        rating: 4.3,
        reviews: [],
        price: 180,
    },
    {
        name: "Santorini Sunset Suites",
        description: "Enjoy breathtaking sunsets over the Aegean Sea from your private balcony in this luxurious Santorini hotel. Amenities include an infinity pool, Mediterranean restaurant, spa, complimentary WiFi, and free parking. Located in Oia, guests are close to blue-domed churches and cliffside cafés. The hotel’s main features are its Cycladic architecture, romantic suites with sea views, and exclusive sunset lounge.",
        image: hotelImages[3],
        location: "Santorini, Greece",
        rating: 4.8,
        reviews: [],
        price: 350,
    },
    {
        name: "Dubai Desert Oasis",
        description: "A five-star oasis in the heart of the Dubai desert, featuring private pools, world-class dining, and Arabian-inspired luxury. Amenities include a spa, fitness center, camel rides, free WiFi, and valet parking. Located near the Dubai Desert Conservation Reserve, guests can enjoy desert safaris and stargazing. Main highlights are opulent suites with desert views, lush gardens, and authentic Middle Eastern experiences.",
        image: hotelImages[0],
        location: "Dubai, UAE",
        rating: 4.9,
        reviews: [],
        price: 500,
    },
    {
        name: "Venetian Canal Palace",
        description: "Stay in a historic palace on Venice’s Grand Canal, with elegantly furnished rooms and gondola rides at your doorstep. Amenities include a waterfront restaurant, private dock, complimentary WiFi, and concierge service. Located in the heart of Venice, guests are close to St. Mark’s Square and the Rialto Bridge. Main features include ornate interiors, canal views from every room, and exclusive access to private boat tours.",
        image: hotelImages[1],
        location: "Venice, Italy",
        rating: 4.7,
        reviews: [],
        price: 400,
    },
    {
        name: "London Royal Suites",
        description: "Classic British elegance meets modern luxury in the heart of London, just steps from Buckingham Palace. Enjoy amenities such as afternoon tea lounge, fine dining, spa, fitness center, free WiFi, and valet parking. Located in Westminster, guests are near iconic landmarks and shopping districts. Main features include regal suites with city views, attentive butler service, and a grand lobby with classic British décor.",
        image: hotelImages[2],
        location: "London, UK",
        rating: 4.6,
        reviews: [],
        price: 370,
    },
    {
        name: "Rio Beachfront Resort",
        description: "Wake up to the sound of waves at this vibrant resort on Copacabana Beach. Amenities include an oceanfront pool, Brazilian steakhouse, beach bar, fitness center, free WiFi, and private parking. Located in Rio de Janeiro, guests enjoy direct beach access and views of Sugarloaf Mountain. Main highlights are lively entertainment, spacious rooms with sea views, and a rooftop terrace for sunset cocktails.",
        image: hotelImages[3],
        location: "Rio de Janeiro, Brazil",
        rating: 4.5,
        reviews: [],
        price: 220,
    },
    {
        name: "Cape Town Mountain Retreat",
        description: "Nestled at the foot of Table Mountain, this retreat offers panoramic views, luxury spa treatments, and easy access to hiking trails. Amenities include an outdoor pool, gourmet restaurant, wellness center, free WiFi, and secure parking. Located in Cape Town, guests are close to the V&A Waterfront and Kirstenbosch Gardens. Main features are modern rooms with mountain or city views, lush gardens, and a tranquil atmosphere.",
        image: hotelImages[1],
        location: "Cape Town, South Africa",
        rating: 4.7,
        reviews: [],
        price: 260,
    },
    {
        name: "Prague Castle View Hotel",
        description: "Enjoy medieval charm and modern comfort with views of Prague Castle. Amenities include a rooftop terrace, Czech restaurant, spa, free WiFi, and on-site parking. Located in the historic center, guests are steps from Charles Bridge and Old Town Square. Main highlights are elegantly decorated rooms with castle or river views, and a cozy lounge with live piano music.",
        image: hotelImages[0],
        location: "Prague, Czech Republic",
        rating: 4.6,
        reviews: [],
        price: 210,
    },
    {
        name: "Bangkok Sky Tower",
        description: "Soar above the city in this high-rise hotel with a rooftop infinity pool and sky bar. Amenities include multiple international restaurants, spa, gym, free WiFi, and valet parking. Located in central Bangkok, guests are near shopping malls and vibrant nightlife. Main features are modern rooms with floor-to-ceiling windows offering panoramic city views and a rooftop lounge with 360-degree vistas.",
        image: hotelImages[2],
        location: "Bangkok, Thailand",
        rating: 4.5,
        reviews: [],
        price: 190,
    },
    {
        name: "Istanbul Sultan Suites",
        description: "Experience Ottoman luxury in the heart of Istanbul’s historic district. Amenities include a Turkish hammam, rooftop restaurant with Bosphorus views, spa, free WiFi, and private parking. Located near the Blue Mosque and Hagia Sophia, guests enjoy easy access to cultural sites. Main features are lavish suites with city or sea views, traditional décor, and personalized concierge service.",
        image: hotelImages[3],
        location: "Istanbul, Turkey",
        rating: 4.8,
        reviews: [],
        price: 230,
    },
    {
        name: "Marrakech Medina Palace",
        description: "A palace hotel with lush gardens and traditional Moroccan architecture, located in the heart of Marrakech’s Medina. Amenities include a courtyard pool, Moroccan restaurant, spa, free WiFi, and valet parking. Guests are close to souks, palaces, and the famous Jemaa el-Fnaa square. Main highlights are opulent rooms with garden or city views, intricate tilework, and nightly live music.",
        image: hotelImages[1],
        location: "Marrakech, Morocco",
        rating: 4.7,
        reviews: [],
        price: 210,
    },
    {
        name: "Bali Oceanfront Villas",
        description: "Private villas with direct beach access and tropical gardens in beautiful Bali. Amenities include private pools, beachfront restaurant, spa, yoga pavilion, free WiFi, and complimentary parking. Located near Seminyak, guests can enjoy surfing, local markets, and vibrant nightlife. Main features are open-air living spaces, ocean views from every villa, and personalized butler service.",
        image: hotelImages[0],
        location: "Bali, Indonesia",
        rating: 4.9,
        reviews: [],
        price: 340,
    },
    {
        name: "Los Angeles Star Hotel",
        description: "Modern luxury in downtown LA, with a rooftop pool, celebrity chef restaurant, and sweeping city views. Amenities include a fitness center, spa, free WiFi, and valet parking. Located near LA Live and the Arts District, guests are close to entertainment and shopping. Main highlights are contemporary rooms with skyline views, rooftop lounge, and exclusive event spaces.",
        image: hotelImages[1],
        location: "Los Angeles, USA",
        rating: 4.4,
        reviews: [],
        price: 270,
    },
    {
        name: "Vienna Imperial Residence",
        description: "Live like royalty in this grand hotel near Vienna’s historic opera house. Amenities include a classical music lounge, gourmet Austrian restaurant, spa, fitness center, free WiFi, and valet parking. Located in the city center, guests are close to museums and palaces. Main features are opulent rooms with city or garden views, marble bathrooms, and elegant ballrooms.",
        image: hotelImages[2],
        location: "Vienna, Austria",
        rating: 4.8,
        reviews: [],
        price: 310,
    },
    {
        name: "Budapest Thermal Spa Hotel",
        description: "Relax in natural hot springs and enjoy river views in the heart of Budapest. Amenities include indoor and outdoor thermal pools, Hungarian restaurant, spa, free WiFi, and secure parking. Located near the Danube, guests are close to historic baths and Buda Castle. Main highlights are spacious rooms with river or city views, and direct access to thermal spa facilities.",
        image: hotelImages[3],
        location: "Budapest, Hungary",
        rating: 4.7,
        reviews: [],
        price: 200,
    },
    {
        name: "Hong Kong Harbor Lights",
        description: "Spectacular harbor views and luxury shopping at your doorstep in this modern Hong Kong hotel. Amenities include a rooftop pool, Cantonese restaurant, fitness center, free WiFi, and valet parking. Located in Tsim Sha Tsui, guests are near Victoria Harbour and major shopping malls. Main features are sleek rooms with floor-to-ceiling windows, harbor or city views, and a sky lounge for evening cocktails.",
        image: hotelImages[0],
        location: "Hong Kong, China",
        rating: 4.6,
        reviews: [],
        price: 330,
    },
    {
        name: "Lisbon Riverside Hotel",
        description: "Chic design and river views in the heart of Lisbon’s historic district. Amenities include a rooftop pool, Portuguese restaurant, spa, free WiFi, and private parking. Located near Alfama and the Tagus River, guests can explore historic trams and vibrant nightlife. Main highlights are modern rooms with river or city views, and a rooftop terrace for sunset drinks.",
        image: hotelImages[1],
        location: "Lisbon, Portugal",
        rating: 4.5,
        reviews: [],
        price: 180,
    },
    {
        name: "Edinburgh Castle Suites",
        description: "Stay steps from Edinburgh Castle in this boutique hotel with Scottish flair. Amenities include a whisky bar, traditional Scottish restaurant, fitness center, free WiFi, and on-site parking. Located in Old Town, guests are close to the Royal Mile and Princes Street Gardens. Main features are spacious suites with castle or city views, tartan décor, and nightly live music.",
        image: hotelImages[2],
        location: "Edinburgh, UK",
        rating: 4.7,
        reviews: [],
        price: 240,
    },
    {
        name: "Seoul Skyline Hotel",
        description: "Modern comfort and panoramic city views in the heart of Seoul. Amenities include a rooftop pool, Korean and international restaurants, spa, gym, free WiFi, and valet parking. Located in Myeongdong, guests are near shopping, palaces, and nightlife. Main highlights are contemporary rooms with skyline views, a sky lounge, and attentive service.",
        image: hotelImages[3],
        location: "Seoul, South Korea",
        rating: 4.6,
        reviews: [],
        price: 210,
    },
    {
        name: "Toronto Lakeview Resort",
        description: "Enjoy lakeside luxury and city convenience at this Toronto resort, featuring rooms with views of Lake Ontario and the city skyline. Amenities include an indoor pool, Canadian restaurant, spa, fitness center, free WiFi, and secure parking. Located near the Harbourfront, guests are close to CN Tower and entertainment venues. Main features are spacious rooms with lake or city views, and a lakeside terrace for dining.",
        image: hotelImages[0],
        location: "Toronto, Canada",
        rating: 4.5,
        reviews: [],
        price: 230,
    },
    {
        name: "Auckland Harbor Hotel",
        description: "Harbor views and modern amenities in the heart of Auckland. Amenities include a rooftop pool, seafood restaurant, gym, free WiFi, and valet parking. Located near Viaduct Harbour, guests are close to Sky Tower and ferry terminals. Main highlights are contemporary rooms with harbor or city views, and a rooftop bar for sunset drinks.",
        image: hotelImages[2],
        location: "Auckland, New Zealand",
        rating: 4.7,
        reviews: [],
        price: 250,
    },
    {
        name: "Cairo Nile Palace",
        description: "Luxury on the banks of the Nile, with views of the pyramids and city skyline. Amenities include an outdoor pool, Egyptian and international restaurants, spa, fitness center, free WiFi, and secure parking. Located in central Cairo, guests are close to the Egyptian Museum and historic sites. Main features are elegant rooms with Nile or pyramid views, and a riverside terrace for evening dining.",
        image: hotelImages[3],
        location: "Cairo, Egypt",
        rating: 4.8,
        reviews: [],
        price: 270,
    },
    {
        name: "Helsinki Arctic Hotel",
        description: "Experience the magic of the Northern Lights in this modern arctic retreat. Amenities include a glass-roofed lounge for aurora viewing, Finnish restaurant, sauna, free WiFi, and on-site parking. Located near Helsinki’s city center, guests are close to museums and the waterfront. Main highlights are cozy rooms with arctic or city views, and unique opportunities for winter activities.",
        image: hotelImages[1],
        location: "Helsinki, Finland",
        rating: 4.6,
        reviews: [],
        price: 220,
    },
    {
        name: "Mexico City Art Hotel",
        description: "A vibrant hotel filled with local art, in the heart of Mexico City. Amenities include a rooftop pool, Mexican fusion restaurant, art gallery, free WiFi, and secure parking. Located near the historic center, guests are close to museums and lively plazas. Main features are colorful rooms with city views, rotating art exhibits, and a rooftop terrace for evening events.",
        image: hotelImages[0],
        location: "Mexico City, Mexico",
        rating: 4.5,
        reviews: [],
        price: 170,
    },
    {
        name: "Stockholm Waterfront Suites",
        description: "Scandinavian design and waterfront views in central Stockholm. Amenities include a marina-side restaurant, spa, gym, free WiFi, and private parking. Located near Gamla Stan, guests are close to museums and shopping. Main highlights are minimalist suites with harbor or city views, and a waterfront terrace for dining.",
        image: hotelImages[2],
        location: "Stockholm, Sweden",
        rating: 4.7,
        reviews: [],
        price: 260,
    },
    {
        name: "Beijing Imperial Hotel",
        description: "Modern luxury near the Forbidden City, with traditional Chinese gardens and elegant rooms. Amenities include a tea lounge, Chinese and international restaurants, spa, fitness center, free WiFi, and valet parking. Located in central Beijing, guests are close to Tiananmen Square and shopping districts. Main features are rooms with garden or city views, and a tranquil courtyard for relaxation.",
        image: hotelImages[1],
        location: "Beijing, China",
        rating: 4.6,
        reviews: [],
        price: 300,
    },
    {
        name: "Buenos Aires Tango Suites",
        description: "Live music, tango shows, and Argentinian hospitality in the heart of Buenos Aires. Amenities include a tango bar, Argentinian steakhouse, fitness center, free WiFi, and secure parking. Located in San Telmo, guests are close to historic plazas and markets. Main highlights are stylish suites with city views, nightly tango performances, and a rooftop terrace.",
        image: hotelImages[3],
        location: "Buenos Aires, Argentina",
        rating: 4.5,
        reviews: [],
        price: 180,
    },
    {
        name: "Moscow Red Square Hotel",
        description: "Steps from Red Square, this hotel blends Russian grandeur with modern comfort. Amenities include a grand ballroom, Russian and European restaurants, spa, fitness center, free WiFi, and valet parking. Located in central Moscow, guests are close to the Kremlin and Bolshoi Theatre. Main features are luxurious rooms with Red Square or city views, and a lavish lobby with crystal chandeliers.",
        image: hotelImages[0],
        location: "Moscow, Russia",
        rating: 4.7,
        reviews: [],
        price: 320,
    },
    {
        name: "Singapore Marina Bay Resort",
        description: "Iconic rooftop pool and city views at Singapore’s most famous hotel. Amenities include a sky park, international restaurants, spa, gym, free WiFi, and valet parking. Located at Marina Bay, guests are close to Gardens by the Bay and luxury shopping. Main highlights are rooms with panoramic city or bay views, and the world-renowned rooftop infinity pool.",
        image: hotelImages[1],
        location: "Singapore",
        rating: 4.9,
        reviews: [],
        price: 480,
    },
    {
        name: "Dublin Literary Hotel",
        description: "A boutique hotel inspired by Ireland’s literary greats, in the heart of Dublin. Amenities include a library lounge, Irish restaurant, fitness center, free WiFi, and on-site parking. Located near Trinity College and Temple Bar, guests are close to historic pubs and museums. Main features are themed rooms with city views, nightly readings, and a cozy fireside bar.",
        image: hotelImages[2],
        location: "Dublin, Ireland",
        rating: 4.6,
        reviews: [],
        price: 210,
    },
    {
        name: "Oslo Fjord View Hotel",
        description: "Modern comfort and stunning fjord views in Oslo. Amenities include a waterfront restaurant, spa, gym, free WiFi, and private parking. Located near the Oslo Opera House and Aker Brygge, guests are close to museums and shopping. Main highlights are rooms with fjord or city views, and a rooftop terrace for enjoying the midnight sun.",
        image: hotelImages[3],
        location: "Oslo, Norway",
        rating: 4.7,
        reviews: [],
        price: 230,
    },
    {
        name: "Warsaw Royal Palace Hotel",
        description: "Classic European elegance in the heart of Warsaw. Amenities include a grand restaurant, spa, fitness center, free WiFi, and secure parking. Located near the Royal Castle and Old Town, guests are close to historic sites and parks. Main features are elegant rooms with city or garden views, and a ballroom for special events.",
        image: hotelImages[0],
        location: "Warsaw, Poland",
        rating: 4.5,
        reviews: [],
        price: 170,
    },
    {
        name: "Brussels Chocolate Suites",
        description: "Indulge in Belgian chocolate and luxury in this unique Brussels hotel. Amenities include a chocolate-themed restaurant, spa, fitness center, free WiFi, and private parking. Located near Grand Place, guests are close to museums and chocolatiers. Main highlights are suites with city views, chocolate tastings, and a cozy lounge.",
        image: hotelImages[1],
        location: "Brussels, Belgium",
        rating: 4.6,
        reviews: [],
        price: 200,
    },
    {
        name: "Copenhagen Harbor Hotel",
        description: "Colorful harbor views and Danish design in central Copenhagen. Amenities include a waterfront restaurant, spa, gym, free WiFi, and on-site parking. Located near Nyhavn, guests are close to Tivoli Gardens and shopping. Main features are modern rooms with harbor or city views, and a rooftop terrace for enjoying the city’s vibrant atmosphere.",
        image: hotelImages[2],
        location: "Copenhagen, Denmark",
        rating: 4.7,
        reviews: [],
        price: 210,
    },
    {
        name: "Kuala Lumpur Sky Suites",
        description: "Soaring above the city, this hotel offers panoramic views and luxury amenities. Enjoy a rooftop infinity pool, international restaurant, spa, gym, free WiFi, and valet parking. Located in the city center, guests are close to the Petronas Towers and shopping malls. Main highlights are modern suites with skyline views and a sky lounge for evening cocktails.",
        image: hotelImages[3],
        location: "Kuala Lumpur, Malaysia",
        rating: 4.8,
        reviews: [],
        price: 190,
    },
    {
        name: "Santiago Andes Retreat",
        description: "Mountain views and Chilean hospitality in the heart of Santiago. Amenities include an outdoor pool, Chilean restaurant, spa, gym, free WiFi, and secure parking. Located near the Andes foothills, guests are close to parks and vineyards. Main features are rooms with mountain or city views, and a garden terrace for relaxation.",
        image: hotelImages[0],
        location: "Santiago, Chile",
        rating: 4.6,
        reviews: [],
        price: 180,
    },
    {
        name: "Perth Beachside Resort",
        description: "Relax on white sand beaches and enjoy oceanfront dining in Perth. Amenities include a beachfront pool, Australian restaurant, spa, gym, free WiFi, and free parking. Located on the Indian Ocean coast, guests are close to Cottesloe Beach and local markets. Main highlights are rooms with ocean or garden views, and a beach bar for sunset drinks.",
        image: hotelImages[1],
        location: "Perth, Australia",
        rating: 4.7,
        reviews: [],
        price: 220,
    },
    {
        name: "Doha Pearl Hotel",
        description: "Modern luxury and Arabian hospitality in the heart of Doha. Amenities include a rooftop pool, Middle Eastern restaurant, spa, gym, free WiFi, and valet parking. Located near The Pearl-Qatar, guests are close to luxury shopping and the Corniche. Main features are contemporary rooms with city or sea views, and a rooftop lounge for evening relaxation.",
        image: hotelImages[2],
        location: "Doha, Qatar",
        rating: 4.8,
        reviews: [],
        price: 260,
    },
    {
        name: "Athens Acropolis View Hotel",
        description: "Wake up to views of the Acropolis in this stylish Athens hotel. Amenities include a rooftop pool, Greek restaurant, spa, gym, free WiFi, and private parking. Located in Plaka, guests are close to ancient ruins and museums. Main highlights are modern rooms with Acropolis or city views, and a rooftop bar for sunset cocktails.",
        image: hotelImages[3],
        location: "Athens, Greece",
        rating: 4.7,
        reviews: [],
        price: 210,
    },
    {
        name: "Hanoi Old Quarter Hotel",
        description: "Traditional Vietnamese charm and modern comfort in Hanoi’s Old Quarter. Amenities include a rooftop restaurant, spa, fitness center, free WiFi, and secure parking. Located near Hoan Kiem Lake, guests are close to markets and historic temples. Main features are rooms with city or street views, and a rooftop terrace for enjoying the lively atmosphere.",
        image: hotelImages[0],
        location: "Hanoi, Vietnam",
        rating: 4.6,
        reviews: [],
        price: 160,
    },
    {
        name: "Manila Bayfront Suites",
        description: "Enjoy Manila’s famous sunsets from your private balcony at this bayfront hotel. Amenities include an outdoor pool, Filipino restaurant, spa, gym, free WiFi, and valet parking. Located on Manila Bay, guests are close to Intramuros and shopping malls. Main highlights are spacious suites with bay or city views, and a rooftop bar for evening drinks.",
        image: hotelImages[1],
        location: "Manila, Philippines",
        rating: 4.5,
        reviews: [],
        price: 170,
    },
    {
        name: "Lima Pacific Hotel",
        description: "Modern comfort and Pacific Ocean views in the heart of Lima. Amenities include a rooftop pool, Peruvian restaurant, spa, gym, free WiFi, and secure parking. Located in Miraflores, guests are close to beaches and parks. Main features are rooms with ocean or city views, and a rooftop terrace for sunset dining.",
        image: hotelImages[2],
        location: "Lima, Peru",
        rating: 4.6,
        reviews: [],
        price: 180,
    },
    {
        name: "Reykjavik Northern Lights Hotel",
        description: "Chase the aurora from this cozy hotel in Reykjavik, featuring rooms with views of the Northern Lights or city. Amenities include a geothermal hot tub, Icelandic restaurant, sauna, free WiFi, and free parking. Located near the city center, guests are close to Hallgrímskirkja and the waterfront. Main highlights are rooms with large windows for aurora viewing and a fireside lounge.",
        image: hotelImages[3],
        location: "Reykjavik, Iceland",
        rating: 4.8,
        reviews: [],
        price: 250,
    },
    {
        name: "Tallinn Old Town Suites",
        description: "Medieval charm and modern comfort in Tallinn’s Old Town. Amenities include a sauna, Estonian restaurant, free WiFi, and on-site parking. Located within the city walls, guests are close to historic squares and museums. Main features are spacious suites with old town or city views, and a cozy lounge with fireplace.",
        image: hotelImages[0],
        location: "Tallinn, Estonia",
        rating: 4.7,
        reviews: [],
        price: 170,
    },
    {
        name: "Zagreb City Center Hotel",
        description: "Central location and Croatian hospitality in Zagreb. Amenities include a Mediterranean restaurant, fitness center, free WiFi, and secure parking. Located near Ban Jelačić Square, guests are close to museums and parks. Main highlights are modern rooms with city or park views, and a rooftop terrace for evening drinks.",
        image: hotelImages[1],
        location: "Zagreb, Croatia",
        rating: 4.5,
        reviews: [],
        price: 160,
    },
    {
        name: "Bratislava Riverside Hotel",
        description: "River views and modern amenities in the heart of Bratislava. Amenities include a riverside restaurant, spa, gym, free WiFi, and private parking. Located near the Danube, guests are close to the old town and castle. Main features are rooms with river or city views, and a riverside terrace for dining.",
        image: hotelImages[2],
        location: "Bratislava, Slovakia",
        rating: 4.6,
        reviews: [],
        price: 150,
    },
    {
        name: "Luxor Nile View Hotel",
        description: "Ancient wonders and modern comfort on the banks of the Nile. Amenities include an outdoor pool, Egyptian restaurant, spa, gym, free WiFi, and secure parking. Located near Luxor Temple and Valley of the Kings, guests enjoy rooms with Nile or temple views and a riverside terrace for sunset dining.",
        image: hotelImages[3],
        location: "Luxor, Egypt",
        rating: 4.7,
        reviews: [],
        price: 200,
    }
];

export const locations = [
    { name: "ALL" },
    { name: "France" },
    { name: "Australia" },
    { name: "Japan" },
    { name: "Maldives" },
    { name: "Switzerland" },
    { name: "USA" },
    { name: "Spain" },
    { name: "Iceland" },
    { name: "Estonia" },
    { name: "Croatia" },
    { name: "Slovakia" },
    { name: "Egypt" }
];
