import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Catogories from '../components/Catogories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer'


const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
            <Catogories />
            <Products />
            <Announcement />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Home
