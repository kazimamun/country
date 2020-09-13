import React, { useEffect, useState } from 'react';
import AllCountry from '../AllCountry/AllCountry';

const Home = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
            {
                countries.map(country =><AllCountry key={country.name} country={country} />)
            }
        </div>
    );
};

export default Home;