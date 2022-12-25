import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";

function Service (){
 return(
    <>
    <Navbar/>
   <Hero
   cName="hero-mid"
   heroImg ="https://images.unsplash.com/photo-1532931899774-fbd4de0008fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsJTIwY2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
   title = "Service"
    />
   <Trip/>
    <Footer/>
    </>
 )

}

export default Service;