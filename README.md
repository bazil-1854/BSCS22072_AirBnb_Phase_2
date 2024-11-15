# Airbnb (clone)
This project is a responsive and interactive React application that replicates the main features of the Airbnb homepage. Built using functional components and React hooks, it includes a navbar, search bar, category buttons, property listing cards, and a footer. The application is designed to provide an engaging user experience while showcasing properties available for rent.

## Technologies Used
- React
- Tailwind CSS
- Framer Motion
- Express Js

## Features
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Dynamic Navbar**: Contains navigation links, a user menu for login/signup, and a logo.
- **Search Functionality**: Users can search for properties by location.
- **Categories**: A horizontal scrollable list of category buttons for easy browsing.
- **Property Listings**: Display of property cards with relevant details.
- **Property Listings Details**: Display of individual property details.
- **Footer**: Links to support, community, hosting, and social media.


# Setup Instructions 
To run the project locally, follow these steps:

```bash
   git clone https://github.com/bazil-1854/BSCS22072-Semester-Project.git
```

Go to the project directory

```bash
   cd my-project
```

***Setup for Server***

```bash
   cd Server
```

Then **Run** this command in your terminal to install all required dependancies:
```bash
   npm install
```
In the project directory, run:

```bash
   node server
``` 
This will start the Server at PORT **3001**

***Setup for Client***
```bash
   cd Client
```

Then **Run** this command in your terminal to install all required dependancies:
```bash
   npm install
```
In the project directory, run:

```bash
   npm start
``` 
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Express Server for Listings and Bookings API
This application provides API's to manage listings and bookings on static data. The server is built using Express.js and includes endpoints to fetch listings, search for specific data, and save bookings to a JSON file. Following is the list of implemented API endpoints. 
  - Get All Listings - **get-all-listings**
  - Get Listing by ID - **get-listing-by-id**
  - Search Listings - **search-listings**
  - Create a Booking - **create-a-booking**