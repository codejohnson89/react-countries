import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
import LazyLoading from 'react-list-lazy-load';
import { updateText } from '../redux/searchTerm';


import SearchBar from '../components/SearchBar';
import CardComponent from '../components/Card';
import DropdownMenu from '../components/DropdownMenu';

const baseURL = 'https://restcountries.eu/rest/v2/all';

const Home = () => {
    const [ countries, setCountries ] = useState(null);
    const query = useSelector((state) => state.searchTerm.value);

    const filter = () => {
        countries.filter((country) => {
            setCountries(country.region.toLowerCase() === query)
        })
    }

    useEffect(() => {
        axios.get(baseURL).then((res) => {
            setCountries(res.data);
        })
    }, []);

    useEffect(() => {
        console.log('updated')
    }, [SearchBar])

    // console.log(countries.filter(country => country.region.toLowerCase() === 'africa'))

    return (
        <>
            <Container className="light">
                <Row>
                    <Col sm={12} md={6} className="left">
                        <SearchBar />
                    </Col>
                    <Col sm={12} md={6} className="right">
                        <DropdownMenu/>
                    </Col>
                </Row>
                <Row className="countryRow">

                    {countries && (
                        countries.map((country) => {
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
