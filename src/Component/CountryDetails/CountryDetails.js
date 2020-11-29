import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {

    const {countryName} = useParams();


    const [properties ,  setProperties]= useState([]);

    useEffect(()=>{
        const url =`https://restcountries.eu/rest/v2/name/${countryName}`
        
        fetch(url)
        .then(res => res.json())
        .then (data => setProperties(data))
    },[])

    console.log(properties)

    const {name , capital , flag ,region ,population,area ,timezones } = properties;

    return (
        <div>
                <h2>Name : {name}</h2>
                <h3>Capital City : {capital}</h3>
                <img src={flag} alt=""/>
                <h3>Region : {region}</h3>
                <h3>Population : {population}</h3>
                <h3>Area : {area}</h3>
                {/* <h3>{properties.languages.nativeName}</h3> */}
                <h3>TimeZones : {timezones}</h3>
                {/* <h3>{properties.currencies.name}</h3> */}
                {/* <h3>{properties.currencies.symbol}</h3> */}



        </div>
    );
};

export default CountryDetails;