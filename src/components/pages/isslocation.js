import React from 'react';
import ReactGlobe from 'react-globe';

const ISSLocation = props => {

    let markers = props.issLocationArray.map((marker, i) => {
        return {
            id: i,
            city: 'ISS',
            color: 'yellow',
            coordinates: [marker.latitude, marker.longitude],
            value: 25,
          };
    })

    return (
        <div className="iss-location-container">
            <h1>ISS Location</h1>
            <p>Yellow track shows path and current location</p>
            <ReactGlobe markers={markers} />
        </div>
    )
}

export default ISSLocation;