import React from 'react';
import { Link } from 'react-router-dom';

const AllCountry = (props) => {
    const {name} = props.country;
    return (
        <ul>
            <li>Country Name: <Link to={`/country/${name}`}>{name}</Link></li>
        </ul>
    );
};

export default AllCountry;