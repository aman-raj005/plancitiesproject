import React from 'react';
import Cards from "./Cards";
import "./Styling.css"


function Tours({ tours, removetourhandler }) {
    function viewprofile(){
        window.location.href = 'https://aman-raj-005.netlify.app/';
    }
    return (
        <div className='container'>
            <div onClick={viewprofile} style={{ cursor: 'pointer' }}>
            <h1 id='title'>Plan With Aman
            <i class="fa-solid fa-arrow-pointer"></i></h1>
        </div>
            <div className='cards'>
                {tours.map((tour) => (
                    <Cards 
                        key={tour.id} 
                        id={tour.id} 
                        info={tour.info} 
                        price={tour.price} 
                        name={tour.name} 
                        image={tour.image} 
                        removetourhandler={removetourhandler}
                    />
                ))}
            </div>
        </div>
    );
}

export default Tours;
