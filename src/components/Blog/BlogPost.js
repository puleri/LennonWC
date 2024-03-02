import React from 'react'
import './BlogPost.css';
import Navbar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import Markdown from 'react-markdown'
import "@fontsource/raleway"
import "@fontsource/raleway/400.css"; // Weight 400.
import "@fontsource/raleway/700.css"; // Weight 700.
import "@fontsource/raleway/900.css"; // Weight 900.
import CTA from '../Homepage/CTA';



const Blog = (props) => {
    return (
        <div className=''>
            <Navbar />
            <div className='blog-wrapper'>
                <div className='container'>
                    <h1 className='blog-title'>
                        {props.title}
                    </h1>
                    <br />

                    <p className='blog-content'>
                        <Markdown>
                            {props.content}
                        </Markdown>
                    </p>
                    <br/>

                    <p className='blog-attribution'>
                            {props.date}
                            <br/>
                            Author: {props.author}
                    </p>

                </div>
            </div>
            <CTA />
            <Footer />
        </div>
    )
}
export default Blog