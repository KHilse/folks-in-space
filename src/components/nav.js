import React from 'react';
import { Link } from 'react-router-dom';


const Nav = props => {
    let links = <></>;

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