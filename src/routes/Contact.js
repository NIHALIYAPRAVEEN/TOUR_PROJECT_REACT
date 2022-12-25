import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Contact (){
 return(
    <>
    <Navbar/>
   <Hero
   cName="hero-mid"
   heroImg ="https://images.unsplash.com/photo-1587560699334-bea93391dcef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbnRhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    />

   <ContactUs/>
    <Footer/>
    </>
 )

}

export default Contact;