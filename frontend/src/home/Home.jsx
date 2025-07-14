import React from 'react'
import Navbar from '../components/Navbar';
import Banner from '../components/Banners';
import FreeBook from '../components/FreeBook';
import Footer from '../components/Footer';

function Home() {
    return (
        <div className="">
            <Navbar/>
            <Banner/>
            <FreeBook/>
            <Footer/>
        </div>
    )
}

export default Home