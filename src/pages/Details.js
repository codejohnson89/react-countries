import React, { useState} from 'react';
import {useAsyncEffect} from 'use-async-effect';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { getCookie } from '../utils/util';
import { Link } from 'react-router-dom';

import DetailInfo from '../components/DetailInfo';
import DetailImage from '../components/DetailImage';




const Details = () => {

    const [ countryData, setCountryData ] = useState(null);
    let country;  
    let queryURL = `https://restcountries.eu/rest/v2/name/`;

    useAsyncEffect(() => {
        country = getCookie('title');
        queryURL += country;
        axios.get(queryURL)
        .then((res) => {
            setCountryData(res.data[0]);
        })
    }, [])

    return (
        <>
            <Container className="btn-container">
            <Link to="/" className="btn detail-btn">Back</Link>
            </Container>
            <Container className="details">
                <div className="container-content">
                    {(countryData == null) ? <div>Loading</div> :  (
                        <>
                        <div className="image-content">
                            <DetailImage image={countryData.flag}/>
                        </div>
                        <div className="detail-content">
                            <DetailInfo 
                            name={countryData.name} 
                            population={countryData.population} 
                            region={countryData.region}
                            subRegion={countryData.subregion}
                            capital={countryData.capital}
                            topLevelDomain={countryData.topLevelDomain}
                            currencies={countryData.currencies}
                            languages={countryData.languages}
                            borders={countryData.borders}
                            />
                        </div>
                        </>
                    )}
                </div>
            </Container>
        </>
    )
}

export default Details;