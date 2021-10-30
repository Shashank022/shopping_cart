import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Catogories from '../components/Catogories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'

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
        </div>
    )
}

export default Home
