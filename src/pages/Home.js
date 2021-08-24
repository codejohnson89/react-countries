import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';
import CardComponent from '../components/Card';

const baseURL = 'https://restcountries.eu/rest/v2/all';

const Home = () => {
    const [ countries, setCountries ] = useState(null);

    useEffect(() => {
        console.log('hello')
        axios.get(baseURL).then((res) => {
            setCountries(res.data);
        })
    }, []);

    return (
        <>
            <Container>
                <Row>
                    {countries && (
                        countries.map((country) => {
                            console.log(country.flag)
                            return <CardComponent key={country.name} 
                                        title={country.name} 
                                        image={country.flag}
                                        population={country.population} 
                                        region={country.region} 
                                        capital={country.capital}/>
                        })
                    )}
                </Row>
            </Container>
        </>
    )
}

export default Home;
