import "./Trip.css"
import TripData from "./TripData";


function Trip (){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destination using google maps.</p>
             
             <div className="tripcard">
                <TripData
                image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbcnoXl-Cz5UfdejQzYWvpVI4OwDse6zwYwA&usqp=CAU"
                heading = "Trip to Bali Indonesia"
                text = "Bali is a province of Indonesia and the westernmost of the Lesser Sunda Islands. East of Java and west of Lombok, the province includes the island of Bali and a few smaller neighbouring islands, notably Nusa Penida, Nusa Lembongan, and Nusa Ceningan to the southeast."
                />

                   <TripData
                image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Agbbnn1Ywaz3dG6EIL1H7bqzG_8BQ64_dQ&usqp=CAU"
                heading = "Trip to Australia"
                text = "Bali is a province of Indonesia and the westernmost of the Lesser Sunda Islands. East of Java and west of Lombok, the province includes the island of Bali and a few smaller neighbouring islands, notably Nusa Penida, Nusa Lembongan, and Nusa Ceningan to the southeast."
                />

                   <TripData
                image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqL6Gf4DNTMS_EDw-3fTVH992f_FHVgoAItw&usqp=CAU"
                heading = "Trip to United Kingdom"
                text = "The United Kingdom, made up of England, Scotland, Wales and Northern Ireland, is an island nation in northwestern Europe. England  birthplace of Shakespeare and The Beatles – is home to the capital, London, a globally influential centre of finance and culture. England is also site of Neolithic Stonehenge, Bath’s Roman spa and centuries-old universities at Oxford and Cambridge"
                />

                   <TripData
                image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkbkVAh8H1F0EZ_mSdO0bBpEeUTjH57XFkh-srSCwcDS6j2kFdRXc2xqmJtwndP8wG5RE&usqp=CAU"
                heading = " Trip to Nepal"
                text = "Nepal, formerly the Federal Democratic Republic of Nepal, is a landlocked country in South Asia. It is mainly situated in the Himalayas, but also includes parts of the Indo-Gangetic Plain, bordering"
                />
             </div>
        
        </div>
    );
}


export default Trip;