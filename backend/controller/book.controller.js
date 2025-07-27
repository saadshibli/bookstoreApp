import Book from "../model/book.model.js";
import axios from "axios"; // Import axios

const GOOGLE_BOOKS_API_KEY = process.env.GOOGLE_BOOKS_API_KEY;

export const getBook = async(req,res) => {
    try {
        // Get search term from query parameter (e.g., /book?q=harry+potter)
        const searchTerm = req.query.q || "programming"; // Default search term

        let books = []; // Initialize an empty array to hold books

        // Construct the Google Books API URL
        const googleBooksApiUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchTerm)}&key=${GOOGLE_BOOKS_API_KEY}`;

        console.log(`Fetching books from Google Books API: ${googleBooksApiUrl}`);

        const googleResponse = await axios.get(googleBooksApiUrl);
        const googleBooks = googleResponse.data.items; // Google Books API returns results in 'items' array

        if (googleBooks && googleBooks.length > 0) {
            // Map Google Books API response to your book schema
            books = googleBooks.map(item => {
                const volumeInfo = item.volumeInfo;
                return {
                    name: volumeInfo.title || "Unknown Title",
                    // Google Books API doesn't always provide price directly, using a random placeholder or actual if available
                    price: parseFloat(item.saleInfo?.listPrice?.amount) || (Math.floor(Math.random() * 50) + 10),
                    category: volumeInfo.categories ? volumeInfo.categories[0] : "General",
                    image: volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : "https://via.placeholder.com/150", // Placeholder image
                    title: volumeInfo.subtitle || volumeInfo.title || "No subtitle"
                };
            });
            console.log(`Fetched ${books.length} books from Google Books API.`);
        } else {
            console.log("No books found from Google Books API. Falling back to MongoDB.");
            // Fallback to local MongoDB if external API yields no results
            books = await Book.find();
            console.log(`Fetched ${books.length} books from MongoDB.`);
        }

        res.status(200).json(books);

    } catch (error) {
        console.error("Error fetching books:", error.message);
        if (error.response) {
            console.error("Google Books API Error Data:", error.response.data);
            console.error("Google Books API Error Status:", error.response.status);
            res.status(error.response.status).json({
                message: "Error fetching books from external API.",
                details: error.response.data
            });
        } else if (error.request) {
            console.error("No response received from Google Books API:", error.request);
            res.status(503).json({ message: "No response from external book API, service unavailable." });
        } else {
            console.error("Internal server error:", error.message);
            res.status(500).json({ message: "An unexpected error occurred.", details: error.message });
        }
    }
};

// import Book from "../model/book.model.js";

// export const getBook = async(req,res) => {
//     try {
//         const book = await Book.find();
//         res.status(200).json(book);
//     } catch (error) {
//         console.log("Error: ", error);
//         res.status(500).json(error);
//     }
// };