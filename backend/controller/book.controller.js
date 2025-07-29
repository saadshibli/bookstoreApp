// backend/controller/book.controller.js
import Book from "../model/book.model.js";
import axios from "axios";

export const getBook = async (req, res) => {
  try {
    const searchTerm = req.query.q || "programming";
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const offset = (page - 1) * limit;

    // Requesting more fields from the API
    const fields = "key,title,author_name,first_publish_year,subject,cover_i,first_sentence";
    const openLibraryUrl = `https://openlibrary.org/search.json?q=${encodeURIComponent(
      searchTerm
    )}&limit=${limit}&offset=${offset}&fields=${fields}`;

    console.log(`Fetching books from: ${openLibraryUrl}`);

    const response = await axios.get(openLibraryUrl);
    const { docs, numFound } = response.data;

    let books = [];
    if (docs && docs.length > 0) {
      books = docs.map((doc) => {
        const author = doc.author_name ? doc.author_name.join(', ') : 'Unknown Author';
        const category = doc.subject ? doc.subject[0] : "General";
        
        // Use the first sentence if available, otherwise generate a dynamic description
        const description = doc.first_sentence 
          ? doc.first_sentence[0] 
          : `Discover '${doc.title}', a compelling book by ${author}. Delve into the world of ${category.toLowerCase()} and explore a story that has captivated readers since its first publication in ${doc.first_publish_year || 'its era'}.`;

        return {
          id: doc.key,
          name: doc.title,
          price: Math.floor(Math.random() * 50) + 10,
          category: category,
          image: doc.cover_i
            ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`
            : "https://via.placeholder.com/150",
          title: doc.title,
          author: author,
          publishYear: doc.first_publish_year,
          description: description
        };
      });
    } else {
      console.log("No books found from Open Library.");
    }

    res.status(200).json({
      books,
      totalBooks: numFound,
      currentPage: page,
      totalPages: Math.ceil(numFound / limit),
    });
  } catch (error) {
    console.error("Error fetching books:", error.message);
    res.status(500).json({ message: "An unexpected error occurred on the server." });
  }
};
