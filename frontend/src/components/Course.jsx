import React from 'react'
import Cards from './Cards';
// import list from '../../public/list.json'; //replaced by axios
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Course() {
    const [book, setBook] = useState([]);
    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:4001/book");
                setBook(res.data);
                console.log(res.data);
            } catch (error) {
                console.log("Error: ", error);
            }
        }
        getBook();
    }, []);

  return (
    <>
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
            <div className="pt-28 items-center justify-center text-center">
                <h1 className='text-2xl md:text-4xl'>
                    Discover Courses That Make Learning <span className='text-pink-500'> Easy</span> and  
                    <span className='text-pink-500'> Fun! :)</span>
                </h1>
                <p className="mt-12">
                    Browse through a wide variety of carefully crafted courses designed to help you learn at your own pace and convenience. Whether you're just starting out on your learning journey or aiming to sharpen and upgrade your existing skills, our diverse course collection has something valuable for everyone. Each course is structured to provide clear guidance, practical examples, and engaging content to ensure that learning feels natural, motivating, and effective. From beginner-friendly introductions to advanced topics, you're sure to find the right path that matches your goals and interests.
                </p>
                <Link to="/">
                    <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6">Back</button>
                </Link>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
                {
                    book.map((item)=> ( //removed list.map and replaced with book.map
                        <Cards key={item.id} item={item}/>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default Course