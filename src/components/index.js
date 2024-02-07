import Footer from "./Footer/Footer";
import AdditionalServices from "./Homepage/AdditionalServices";
import CTA from "./Homepage/CTA";
import CustomerStories from "./Homepage/CustomerStories";
import Hero from "./Homepage/Hero";
import Reviews2 from "./Homepage/Reviews2";
import Navbar from "./NavBar/NavBar";

function Homepage() {
  return (
    <>
    <Navbar />
    <Hero />
    <AdditionalServices />
    <CustomerStories />
    <Reviews2 />
    <CTA />
    <Footer />
    </>
  );
}

export default Homepage;
