import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// Renamed to FeaturedBooks to better reflect its new purpose
function FeaturedBooks() {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBook = async () => {
      try {
        setLoading(true);
        // Fetch a curated list of popular books instead of filtering for free ones
        const res = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/book?q=classic+literature&limit=9`
        );
        
        if (Array.isArray(res.data.books)) {
          setBook(res.data.books);
        } else {
          console.error("API did not return an array:", res.data);
          setBook([]);
        }
        setError(null);
      } catch (error) {
        console.log("Error fetching featured books: ", error);
        setError("Could not fetch featured books.");
      } finally {
        setLoading(false);
      }
    };
    getBook();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: true },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          {/* Updated title to reflect the change */}
          <h1 className="font-semibold text-xl pb-2">Featured Books</h1>
          <p>
            Explore our hand-picked selection of timeless classics and popular reads.
          </p>
        </div>
        <div>
          {loading && <div className="text-center">Loading...</div>}
          {error && <div className="text-center text-red-500">{error}</div>}
          {!loading && !error && (
            <Slider {...settings}>
              {book.map((item) => (
                <Cards item={item} key={item.id} />
              ))}
            </Slider>
          )}
        </div>
      </div>
    </>
  );
}

export default FeaturedBooks;