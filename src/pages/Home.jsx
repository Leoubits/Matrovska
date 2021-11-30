import React from 'react'
import { Navbar } from '../components/Navbar.jsx'
import { Announcement } from '../components/Announcement'
import { Slider } from '../components/Slider'
import { Categories } from '../components/Categories'
import { Products } from '../components/Products'
import { Newsletter } from '../components/Newsletter.jsx'
import { Footer } from '../components/Footer.jsx'
import { Mob_Showcase } from '../components/Mob_Showcase.jsx'
import { Video } from '../components/Video.jsx'

export const Home = () => {

    return (
        <div>
            <Announcement />
            <Navbar />
            <Mob_Showcase />
            <Slider />
            <Categories />
            <Products />
            <Video />
            <Newsletter />
            <Footer />
        </div>
    )
}
