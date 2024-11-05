const listingData = [
    {
        id: 1,
        title: 'Cozy Beachfront Bungalow',
        type: 'Home',
        guests: 4,
        price: 120,
        rating: 4.8,
        image: 'https://images.pexels.com/photos/1704120/pexels-photo-1704120.jpeg',
        category: 'Beachfront',
    },
    {
        id: 2,
        title: 'Mountain Cabin Retreat',
        type: 'Private Room',
        guests: 2,
        price: 90,
        rating: 2.7,
        image: 'https://images.pexels.com/photos/3408740/pexels-photo-3408740.jpeg',
        category: 'Cabins',
    },
    {
        id: 3,
        title: 'Luxury City Apartment',
        type: 'Home',
        guests: 5,
        price: 250,
        rating: 5.0,
        image: 'https://images.pexels.com/photos/3705868/pexels-photo-3705868.jpeg',
        category: 'Luxury',
    },
    {
        id: 4,
        title: 'Charming Country House',
        type: 'Home',
        guests: 6,
        price: 150,
        rating: 4.6,
        image: 'https://images.pexels.com/photos/2828964/pexels-photo-2828964.jpeg',
        category: 'Unique Stays',
    },
    {
        id: 5,
        title: 'Budget Beach Hut',
        type: 'Private Room',
        guests: 3,
        price: 75,
        rating: 4.2,
        image: 'https://images.pexels.com/photos/4573184/pexels-photo-4573184.jpeg',
        category: 'Budget',
    },
    {
        id: 6,
        title: 'Family-Friendly Cabin in the Woods',
        type: 'Home',
        guests: 8,
        price: 180,
        rating: 4.9,
        image: 'https://images.pexels.com/photos/3202633/pexels-photo-3202633.jpeg',
        category: 'Family-Friendly',
    },
    {
        id: 7,
        title: 'Pet-Friendly Loft in the City',
        type: 'Apartment',
        guests: 4,
        price: 110,
        rating: 4.5,
        image: 'https://images.pexels.com/photos/3830971/pexels-photo-3830971.jpeg',
        category: 'Pet-Friendly',
    },
    {
        id: 8,
        title: 'Luxury Ocean View Villa',
        type: 'Villa',
        guests: 10,
        price: 500,
        rating: 5.0,
        image: 'https://images.pexels.com/photos/3027015/pexels-photo-3027015.jpeg',
        category: 'Luxury',
    },
    {
        id: 9,
        title: 'Trendy Tiny House',
        type: 'Tiny Home',
        guests: 2,
        price: 70,
        rating: 4.4,
        image: 'https://images.pexels.com/photos/1640776/pexels-photo-1640776.jpeg',
        category: 'Unique Stays',
    },
    {
        id: 10,
        title: 'Chic Studio Near the Beach',
        type: 'Studio',
        guests: 2,
        price: 95,
        rating: 4.6,
        image: 'https://images.pexels.com/photos/2924726/pexels-photo-2924726.jpeg',
        category: 'Beachfront',
    },
    {
        id: 11,
        title: 'Rustic Farmhouse Getaway',
        type: 'Home',
        guests: 5,
        price: 160,
        rating: 4.7,
        image: 'https://images.pexels.com/photos/2076906/pexels-photo-2076906.jpeg',
        category: 'Family-Friendly',
    },
    {
        id: 12,
        title: 'Cozy Treehouse Retreat',
        type: 'Treehouse',
        guests: 4,
        price: 120,
        rating: 4.8,
        image: 'https://images.pexels.com/photos/1863735/pexels-photo-1863735.jpeg',
        category: 'Cabins',
    },
    {
        id: 13,
        title: 'Lavish Penthouse Suite',
        type: 'Penthouse',
        guests: 3,
        price: 400,
        rating: 4.9,
        image: 'https://images.pexels.com/photos/1675590/pexels-photo-1675590.jpeg',
        category: 'Luxury',
    },
    {
        id: 14,
        title: 'Stylish City Apartment',
        type: 'Apartment',
        guests: 4,
        price: 130,
        rating: 4.6,
        image: 'https://images.pexels.com/photos/1662562/pexels-photo-1662562.jpeg',
        category: 'Unique Stays',
    },
    {
        id: 15,
        title: 'Modern Beachfront Condo',
        type: 'Condo',
        guests: 6,
        price: 250,
        rating: 4.8,
        image: 'https://images.pexels.com/photos/2384691/pexels-photo-2384691.jpeg',
        category: 'Beachfront',
    },
    {
        id: 16,
        title: 'Charming Cabin in the Woods',
        type: 'Cabin',
        guests: 5,
        price: 140,
        rating: 4.7,
        image: 'https://images.pexels.com/photos/2899906/pexels-photo-2899906.jpeg',
        category: 'Cabins',
    },
    {
        id: 17,
        title: 'Spacious Family Lodge',
        type: 'Lodge',
        guests: 12,
        price: 300,
        rating: 4.5,
        image: 'https://images.pexels.com/photos/1593631/pexels-photo-1593631.jpeg',
        category: 'Family-Friendly',
    },
    {
        id: 18,
        title: 'Unique Hobbit House',
        type: 'House',
        guests: 2,
        price: 110,
        rating: 4.9,
        image: 'https://images.pexels.com/photos/2889660/pexels-photo-2889660.jpeg',
        category: 'Unique Stays',
    },
    {
        id: 19,
        title: 'Budget-Friendly Beach Apartment',
        type: 'Apartment',
        guests: 4,
        price: 85,
        rating: 4.3,
        image: 'https://images.pexels.com/photos/2566852/pexels-photo-2566852.jpeg',
        category: 'Budget',
    },
    {
        id: 20,
        title: 'Luxury Retreat with Pool',
        type: 'Villa',
        guests: 8,
        price: 450,
        rating: 5.0,
        image: 'https://images.pexels.com/photos/3027040/pexels-photo-3027040.jpeg',
        category: 'Luxury',
    },
    {
        id: 21,
        title: 'Pet-Friendly Mountain Lodge',
        type: 'Lodge',
        guests: 6,
        price: 170,
        rating: 4.6,
        image: 'https://images.pexels.com/photos/1455771/pexels-photo-1455771.jpeg',
        category: 'Pet-Friendly',
    },
    {
        id: 22,
        title: 'Trendy Urban Loft',
        type: 'Loft',
        guests: 3,
        price: 150,
        rating: 4.5,
        image: 'https://images.pexels.com/photos/2767402/pexels-photo-2767402.jpeg',
        category: 'Unique Stays',
    },
    {
        id: 23,
        title: 'Affordable Studio with Beach Access',
        type: 'Studio',
        guests: 2,
        price: 95,
        rating: 4.4,
        image: 'https://images.pexels.com/photos/1166482/pexels-photo-1166482.jpeg',
        category: 'Beachfront',
    },
    {
        id: 24,
        title: 'Luxury Eco-Friendly Cabin',
        type: 'Cabin',
        guests: 4,
        price: 210,
        rating: 4.8,
        image: 'https://images.pexels.com/photos/3882152/pexels-photo-3882152.jpeg',
        category: 'Cabins',
    },
    {
        id: 25,
        title: 'Family-Friendly Beach House',
        type: 'House',
        guests: 10,
        price: 350,
        rating: 4.7,
        image: 'https://images.pexels.com/photos/3141372/pexels-photo-3141372.jpeg',
        category: 'Family-Friendly',
    },
    {
        id: 26,
        title: 'Modern Apartment with Balcony',
        type: 'Apartment',
        guests: 2,
        price: 120,
        rating: 4.5,
        image: 'https://images.pexels.com/photos/2887806/pexels-photo-2887806.jpeg',
        category: 'Unique Stays',
    },
    {
        id: 27,
        title: 'Charming Cottage with Garden',
        type: 'Cottage',
        guests: 4,
        price: 140,
        rating: 4.6,
        image: 'https://images.pexels.com/photos/2108035/pexels-photo-2108035.jpeg',
        category: 'Family-Friendly',
    },
    {
        id: 28,
        title: 'Rustic River Cabin',
        type: 'Cabin',
        guests: 6,
        price: 160,
        rating: 4.5,
        image: 'https://images.pexels.com/photos/1894278/pexels-photo-1894278.jpeg',
        category: 'Cabins',
    },
    {
        id: 29,
        title: 'Tranquil Beach House',
        type: 'House',
        guests: 8,
        price: 300,
        rating: 5.0,
        image: 'https://images.pexels.com/photos/1158319/pexels-photo-1158319.jpeg',
        category: 'Beachfront',
    },
    {
        id: 30,
        title: 'Stylish Loft in Downtown',
        type: 'Loft',
        guests: 2,
        price: 130,
        rating: 4.6,
        image: 'https://images.pexels.com/photos/1664405/pexels-photo-1664405.jpeg',
        category: 'Unique Stays',
    },
];

module.exports = listingData;