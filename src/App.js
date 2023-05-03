import logo from './logo.svg';
import "@fontsource/raleway"
import "@fontsource/raleway/400.css"; // Weight 400.
import "@fontsource/raleway/700.css"; // Weight 700.
import "@fontsource/raleway/900.css"; // Weight 900.


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Homepage from './components';
import Navbar from './components/NavBar/NavBar';
import ComingSoon from './components/ComingSoon/ComingSoon';
import Services from './components/Services/Services';
import About from './components/About/About';
import Reviews from './components/Reviews/Reviews';
import ContactForm from './components/ContactForm/ContactForm';



function App() {
  return (
    <>
       
      <div className="">
       <Router>
         <Routes>
           
           <Route path="/" element={<Homepage/>}></Route>
           <Route path="/services" element={<Services/>}></Route>
           <Route path="/about" element={<About/>}></Route>
           <Route path="/reviews" element={<Reviews/>}></Route>
           <Route path="/contact" element={<ContactForm/>}></Route>


         </Routes>
       </Router>
     </div>
     
     
{/*     
      <ComingSoon />
       */}
    </>

  );
}

export default App;
