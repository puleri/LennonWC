import Footer from "./Footer/Footer";
import AdditionalServices from "./Homepage/AdditionalServices";
import CTA from "./Homepage/CTA";
import CustomerStories from "./Homepage/CustomerStories";
import Hero from "./Homepage/Hero";
import Navbar from "./NavBar/NavBar";

function Homepage() {
  return (
    <>
    <Navbar />
    <Hero />
    <AdditionalServices />
    <CustomerStories />
    <CTA />
    <Footer />
    </>
  );
}

export default Homepage;
