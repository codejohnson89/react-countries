import React from 'react';
import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';


const CardComponent = (props) => {
    const { title, image, population, region, capital } = props;




    return (
        <Link to="/details" className="cardbody" onClick={() => {
            document.cookie = `title=${title}`;
            }}>
            <Card>
                <div className="image" style={{backgroundImage: `url(${image})`}}>
                </div>           
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>Population: <span id="Population">{population.toLocaleString('en-US')}</span><br></br></Card.Text>                    
                    <Card.Text>Region: <span id="Region">{region}</span><br></br></Card.Text>
                    <Card.Text>Capital: <span id="Capital">{capital}</span><br></br></Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default CardComponent;