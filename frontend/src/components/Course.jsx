import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Cards from "./Cards";
import axios from "axios";

function Course() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const location = useLocation();
  const navigate = useNavigate();
  
  // Get search query and page from URL
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("q") || "programming";
  const pageFromUrl = parseInt(queryParams.get("page")) || 1;

  useEffect(() => {
    // Sync currentPage state with the URL's page number
    if (pageFromUrl !== currentPage) {
      setCurrentPage(pageFromUrl);
    }
  }, [pageFromUrl]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/book?q=${query}&page=${currentPage}`
        );
        if (res.data && Array.isArray(res.data.books)) {
          setBooks(res.data.books);
          setTotalPages(res.data.totalPages);
        } else {
          setBooks([]);
          setTotalPages(1);
        }
        setError(null);
      } catch (error) {
        console.log("Error: ", error);
        setError("Could not fetch books. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    getBooks();
  }, [query, currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
      // Update URL to reflect the new page
      navigate(`/course?q=${query}&page=${newPage}`);
    }
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="pt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            Discover Courses That Make Learning{" "}
            <span className="text-pink-500"> Easy</span> and{" "}
            <span className="text-pink-500"> Fun! :)</span>
          </h1>
          <p className="mt-12">
            Showing results for: <span className="font-bold">{query}</span>
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6">
              Back to Home
            </button>
          </Link>
        </div>

        {loading && <div className="text-center mt-12">Loading...</div>}
        {error && <div className="text-center mt-12 text-red-500">{error}</div>}

        {!loading && !error && (
          <>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {books.length > 0 ? (
                books.map((item) => <Cards key={item.id} item={item} />)
              ) : (
                <div className="col-span-4 text-center">No books found.</div>
              )}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center my-8">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 mx-1 bg-gray-200 dark:bg-slate-700 rounded disabled:opacity-50"
              >
                &laquo; Previous
              </button>
              <span className="px-4 py-2 mx-1">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage >= totalPages}
                className="px-4 py-2 mx-1 bg-gray-200 dark:bg-slate-700 rounded disabled:opacity-50"
              >
                Next &raquo;
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Course;
