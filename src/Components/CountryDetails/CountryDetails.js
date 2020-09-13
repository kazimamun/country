import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    const {countryName} =useParams();
    const [country, setCountry] = useState([])
    useEffect(()=>{
        fetch(`https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`)
        .then(res => res.json())
        .then(data => setCountry(data))
    },[])
    return (
        <div>
           {console.log(country[0])}
        </div>
    );
};

export default CountryDetails;