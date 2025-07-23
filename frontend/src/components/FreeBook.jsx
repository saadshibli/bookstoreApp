import React from 'react';
import Cards from './Cards';
import axios from 'axios';
import { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import list from "../../public/list.json" //replaced by axios

export default function FreeBook() {
  const [book, setBook] = useState([]);
  useEffect(() => {
      const getBook = async () => {
          try {
              const res = await axios.get("https://bookhavenapp.onrender.com/book");
              const data = res.data.filter((data) => data.category === "free");
              setBook(data);
              console.log(data);
          } catch (error) {
              console.log("Error: ", error);
          }
      }
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
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p>Discover our selection of free courses designed to help you learn new skills and advance your career. Start exploring today!</p>
        </div>
        <div>
          <Slider {...settings}>
            {book.map((item) => (  //removed filterData.map and replaced with book.map
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}
