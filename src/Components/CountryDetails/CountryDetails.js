import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const CountryDetails = () => {
    const {countryName} =useParams();
    const [country, setCountry] = useState([])
    useEffect(()=>{
        fetch(`https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`)
        .then(res => res.json())
        .then(data => setCountry(data))
    },[])
    console.log(country)
    return (
        <div>
          {country.length && 
            <div>
                <p>Name: {country[0].name}</p>
                <img style={{height: '100px'}} src={country[0].flag} alt=""/>
                <p>Area Length: {country[0].area}</p>
            </div>}
            <Link to='/'>Home</Link>
        </div>
    );
};

export default CountryDetails;