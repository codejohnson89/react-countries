import React from 'react';
import {ReactSVG} from 'react-svg';
import { Card } from 'react-bootstrap';


const CardComponent = (props) => {
    const { title, flag, population, region, capital } = props;


    return (
        <Card>
            <ReactSVG src={flag}/>            
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>Population: <span id="Population">{population}</span><br></br></Card.Text>                    
                <Card.Text>Region: <span id="Region">{region}</span><br></br></Card.Text>
                <Card.Text>Capital: <span id="Capital">{capital}</span><br></br></Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CardComponent;