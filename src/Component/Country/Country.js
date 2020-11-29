import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const {name , capital , flag } = props.country;
    
const countryStyle ={
    border : "2px solid red",
    padding:  "20px",
    margin : "20px",
    borderRadius:"10px"
}
const imgStyle ={
    width : "150px"
}

    return (
        <div style={countryStyle}>
            <h2> Country : <Link to={`/country/${name}`}>{name}</Link></h2>
            <h3>Capital City : {capital}</h3>
            <img style={imgStyle} src={flag} alt=""/>
            <br></br>
            <button>Click here to more Details</button>
        </div>
    );
};

export default Country;