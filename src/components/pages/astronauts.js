import React from 'react';
import Card from '@material-ui/core/Card';
import Carousel from 'react-material-ui-carousel';

const Astronauts = props => {
    return (
        <div className="astronauts-carousel-container">
            <h1>There are {props.astronauts.length} People in Space</h1>
            <Carousel animation="slide" interval="3000">
                {props.astronauts.map((astronaut, i) => {
                    return <Card key={i}>
                        <div className="astronaut-paper">
                            <h1>{astronaut.name}</h1>
                            <h2>Aboard the <i>{astronaut.craft}</i></h2>
                        </div>
                        </Card>
                })}
            </Carousel>
        </div>
    )
}

export default Astronauts;