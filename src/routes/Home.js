import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import Trip from "../components/Trip";


function Home (){
 return(
    <>
    <Navbar/>
   <Hero
   cName="hero"
   heroImg ="https://images.unsplash.com/photo-1532931899774-fbd4de0008fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsJTIwY2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
   title = "Your Journey Your Story"
   text = " Choose Your Favourite Destination."
   buttonText = " Our Travel Plan"
   url = "/"
   btnClass = "show"
    />

    <Destination/>

    <Trip/>

    <Footer/>

     
    </>
 )

}

export default Home;