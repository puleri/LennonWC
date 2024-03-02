import React from 'react'
import Navbar from '../NavBar/NavBar'
import CTA1 from '../CTA1/CTA1'
import Footer from '../Footer/Footer'
import Featured from './Featured'
import BlogList from './BlogList'
import CTA from '../Homepage/CTA'

const Blog = () => {
    return (
        <div className=''>
            <Navbar />
            <Featured />
            <BlogList />
            <CTA />
            <Footer />
        </div>
    )
}
export default Blog