import React, { useEffect, useState } from 'react';
import Country from '../Country/Country'
const Home = () => {
    const [country , setCountry] = useState([]);
    useEffect(()=>{
        const url = `https://restcountries.eu/rest/v2/all`
        fetch(url)
        .then(res=> res.json())
        .then(data => setCountry(data))
    },[])
    return (
        <div>
            <h3>Total Countries : {country.length}</h3>
            {
                country.map(singleCountry=> <Country country={singleCountry} ></Country> )
            }
        </div>
    );
};

export default Home;