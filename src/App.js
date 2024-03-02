import logo from './logo.svg';
import "@fontsource/raleway"
import "@fontsource/raleway/400.css"; // Weight 400.
import "@fontsource/raleway/700.css"; // Weight 700.
import "@fontsource/raleway/900.css"; // Weight 900.


import "@fontsource/libre-franklin"
import "@fontsource/libre-franklin/200.css"; // Weight 400.
import "@fontsource/libre-franklin/400.css"; // Weight 400.
import "@fontsource/libre-franklin/700.css"; // Weight 700.
import "@fontsource/libre-franklin/900.css"; // Weight 900.



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Homepage from './components';
import Navbar from './components/NavBar/NavBar';
import ComingSoon from './components/ComingSoon/ComingSoon';
import Services from './components/Services/Services';
import About from './components/About/About';
import Reviews from './components/Reviews/Reviews';
import Contact from './components/Contact/Contact';
import ThankYou from './components/ThankYou/ThankYou';
import License from './components/License/License';
import Blog from './components/Blog/Blog';
import BlogPost from './components/Blog/BlogPost';


import blogPosts from './components/Blog/BlogData.json'



function App() {
  return (
    <>

      <div className="">
        <Router>
          <Routes>

            <Route path="/" element={<Homepage />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/reviews" element={<Reviews />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/thank-you" element={<ThankYou />}></Route>
            <Route path="/licensed" element={<License />}></Route>
            <Route exact path="/blog" element={<Blog />}></Route>

            {/* Dynamic generation of blog post routes */}
            {blogPosts.map((post) => (
              <Route
                key={post.id}
                path={`/blog/${post.id}`}
                element={<BlogPost 
                  title={post.title} 
                  content={post.content} 
                  author={post.author}
                  date={post.date}
                  />}
              />
            ))}

          </Routes>
        </Router>
      </div>



      {/* <ComingSoon /> */}

    </>

  );
}

export default App;
