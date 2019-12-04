import React from 'react';
import { Link } from 'react-router-dom';


const Nav = props => {
    let links = <></>; // Fill with additional links based on user state

    console.log(`props.user: ${props.user}`);
        
    if (props.user) { // This is null unless logged in, then it's the token
        links = (
            <>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/astronauts">Astronauts</Link></li>
                <li><Link to="/isslocation">ISS Location</Link></li>
            </> 
        )
    }

    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                {links}
            </ul>
        </nav>
    )
}



export default Nav;