import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { GoogleLogin, GoogleLogout } from 'react-google-login';
import dotenv from 'dotenv';
dotenv.config();

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const Nav = props => {
    const classes = useStyles();
    let links = <></>; // Fill with additional links based on user state

    /** Handles Google Oauth login result */
    function responseGoogle(response) {
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
                <Button color="primary" align="right"><Link to="/profile">Profile</Link></Button>
                <Button color="primary" align="right"><Link to="/astronauts">Astronauts</Link></Button>
                <Button color="primary" align="right"><Link to="/isslocation">ISS Location</Link></Button>
                <div className="google-buttons">
                    <GoogleLogout 
                        clientId={process.env.GOOGLE_CLIENT_ID}
                        buttonText="Logout"
                        onLogoutSuccess={handleGoogleLogout}
                    />
    			</div>
            </> 
        )
    } else {
        links = (
            <div className="google-buttons">
                <GoogleLogin 
                    clientId={process.env.GOOGLE_CLIENT_ID}
                    buttonText="Login"
                    scope=''
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        )

    }

    const colorTheme = createMuiTheme({
        palette: {
            primary: { main: "#88f", contrastText: "#fff" },
            secondary: { main: "#88f", contrastText: "#fff" },
            contrastText: "#fff",
            background: {
                default: '#c0c0c0',
            }
        }
    });

    return (
        <nav className={classes.root}>
            <ThemeProvider theme={colorTheme}>
            <AppBar>
                <Toolbar>
                    <Typography className={classes.title} align="left" variant="h6" color="inherit">
                        Folks in Space
                    </Typography>
                    <Button color="primary" align="right"><Link to="/">Home</Link></Button>
                    {links}
                </Toolbar>
            </AppBar>
            </ThemeProvider>
        </nav>
    )
}

export default Nav;