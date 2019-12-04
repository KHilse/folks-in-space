import React from 'react';
import { Link } from 'react-router-dom';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
//import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const SERVER_URL = process.env.SERVER_URL;

const Nav = props => {
    let links = <></>; // Fill with additional links based on user state

    console.log(`props.user: ${props.user}`);

    /** Handles Google Oauth login result */
    function responseGoogle(response) {
		console.log(response);
		if (response.AccessToken) {
			localStorage.setItem('googleToken', response.accessToken);
		} else {
			localStorage.setItem('googleToken', response.Zi.access_token)
		}
        localStorage.setItem('googleId', response.googleId);
        let userData = {
            firstName: response.profileObj.givenName,
            lastName: response.profileObj.familyName,
            fullName: response.profileObj.name,
            profileImage: response.profileObj.imageUrl,
            email: response.profileObj.email
        }
        props.updateUser(userData);
	}

    /** Handles Google Oauth logout result */
	function handleGoogleLogout() {
		localStorage.setItem('googleToken', null);
		localStorage.setItem('googleId', null);
        props.updateUser(null);
	}


    if (props.user) { // This is null unless logged in, then it's the token
        links = (
            <>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/astronauts">Astronauts</Link></li>
                <li><Link to="/isslocation">ISS Location</Link></li>
                <div className="google-buttons">
                    <span className="google-status">{`Welcome ${props.user.fullName}`}</span>
                    <GoogleLogout 
                        clientId="406245836490-5is1hkf4v9vfhlc5oavfcm65pldebsbn.apps.googleusercontent.com"
                        buttonText="Logout"
                        onLogoutSuccess={handleGoogleLogout}
                    />
    			</div>
            </> 
        )
    } else {
        links = (
            <>
                <div className="google-buttons">
                    <span className="google-status">Log in with Google =></span>
                    <GoogleLogin 
                        clientId="703741484512-tdhp2ed5337aqdjgp8dfm6te2ob3mfe8.apps.googleusercontent.com"
                        buttonText="Login"
                        scope=''
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
    			</div>
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