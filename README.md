# BookHaven: A Full-Stack Bookstore Application

## Description

BookHaven is a modern and feature-rich online bookstore built with the MERN stack (MongoDB, Express.js, React, Node.js). This application provides a seamless and interactive experience for users to browse, search, and discover a vast collection of books fetched live from the Open Library API. It includes user authentication, protected routes, a dynamic book catalog with search and pagination, and a sleek, responsive design with a dark mode theme switcher.

## Features

- **Dynamic Book Catalog:** Fetches live book data from the Open Library API.
- **User Authentication:** Secure signup and login functionality for users.
- **Protected Routes:** The main "Course" catalog is only accessible to logged-in users.
- **Live Search:** Instantly search for books across the entire catalog.
- **Pagination:** A clean pagination system to easily navigate through search results.
- **Dark/Light Mode:** A theme switcher for a comfortable viewing experience.
- **Responsive Design:** A fully responsive layout that works on all devices, from mobile phones to desktops.
- **Interactive UI:** Detailed book modals and smooth toast notifications for a modern user experience.

## Tech Stack

**Frontend:**
- **React:** A JavaScript library for building user interfaces.
- **Vite:** A fast and modern frontend build tool.
- **React Router:** For client-side routing and navigation.
- **Tailwind CSS & DaisyUI:** For a utility-first approach to styling.
- **Axios:** For making API requests to the backend.
- **React Hook Form:** For efficient and easy form handling.
- **React Hot Toast:** For clean and modern notifications.

**Backend:**
- **Node.js & Express.js:** For building the RESTful API.
- **MongoDB & Mongoose:** As the database for storing user data.
- **CORS:** To handle cross-origin requests between the frontend and backend.
- **bcryptjs:** For hashing user passwords securely.
- **dotenv:** For managing environment variables.

## File Structure

The project is organized into two main folders: `frontend` and `backend`.
/bookstore-app
|
|-- backend/
|   |-- controller/       # Handles the business logic for API routes (e.g., book.controller.js)
|   |-- model/            # Defines the Mongoose schemas for the database (e.g., user.model.js)
|   |-- route/            # Defines the API endpoints (e.g., book.route.js)
|   |-- index.js          # The main entry point for the backend server
|   -- package.json      # Backend dependencies and scripts | -- frontend/
|-- src/
|   |-- assets/       # Images and other static assets
|   |-- components/   # Reusable React components (Navbar, Cards, etc.)
|   |-- context/      # React Context providers for state management (Auth, Theme)
|   |-- home/         # Components specific to the homepage
|   |-- courses/      # Components for the main book catalog page
|   |-- pages/        # Standalone pages like "About" and "Contact"
|   |-- App.jsx       # Main application component with routing logic
|   -- main.jsx      # The entry point for the React application -- package.json      # Frontend dependencies and scripts

## Screenshot

![BookHaven Screenshot](./s1.png)
![BookHaven Screenshot](./s2.png)


## Deployment

This application is ready for deployment. The recommended setup is:
- **Database:** A free cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
- **Backend:** Deployed as a Web Service on [Render](https://render.com/).
- **Frontend:** Deployed on [Vercel](https://vercel.com/).

## Author

- **Saad Shibli** - *Initial work* - [saadshibli](https://github.com/saadshibli)

## License

This project is licensed under the MIT License.

The MIT License is a permissive free software license originating at the Massachusetts Institute of Technology (MIT). It puts only very limited restrictions on reuse and has, therefore, an excellent license compatibility. You are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software.

For the full license text, please see the [Open Source Initiative page for the MIT License](https://opensource.org/licenses/MIT).

