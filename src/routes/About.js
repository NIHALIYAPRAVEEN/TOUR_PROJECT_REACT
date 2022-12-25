import AboutUs from "../components/Aboutus";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar"

function About (){
 return(
     <>
    <Navbar/>
   <Hero
   cName="hero-mid"
   heroImg ="https://images.unsplash.com/photo-1529369623266-f5264b696110?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHRyYXZlbCUyMGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
   title = "About"
       />

    <AboutUs/>
       <Footer/>
    </>
 )

}

export default About;