import React from 'react';
import ReactGlobe from 'react-globe';

const ISSLocation = props => {
    return (
        <div style={{ width: '90vw', height: '50vh' }}>
            <h1>ISS Location</h1>
            <ReactGlobe />
        </div>
    )
}

export default ISSLocation;