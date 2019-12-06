import React from 'react';
import ReactGlobe from 'react-globe';

const ISSLocation = props => {

    let markers = props.issLocationArray.map((marker, i) => {
        return {
            id: i,
            city: 'ISS',
            color: 'blue',
            coordinates: [marker.latitude, marker.longitude],
            value: 25,
          };
    })

    return (
        <div style={{ width: '90vw', height: '50vh' }}>
            <h1>ISS Location</h1>
            <ReactGlobe markers={markers} />
        </div>
    )
}

export default ISSLocation;