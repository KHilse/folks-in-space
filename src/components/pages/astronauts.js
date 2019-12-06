import React from 'react';

const Astronauts = props => {
    return (
        <div>
            <h1>Astronauts</h1>
            {props.astronauts.map((astronaut) => {
                return <p>{astronaut.name} on {astronaut.craft}</p>
            })}
        </div>
    )
}

export default Astronauts;