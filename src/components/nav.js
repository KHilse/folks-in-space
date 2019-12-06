import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
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

    console.log(`props.user: ${props.user}`);
    console.log(`astros ${props.astronauts}`);
    console.log(`iss ${props.issLocationArray}`);

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
        clearInterval(props.timer);
        props.updateUser(null);
	}


    if (props.user) { // This is null unless logged in, then it's the token
        links = (
            <>
                <Button color="primary"><Link to="/profile">Profile</Link></Button>
                <Button color="primary"><Link to="/astronauts">Astronauts</Link></Button>
                <Button color="primary"><Link to="/isslocation">ISS Location</Link></Button>
                <Button color="primary">
                <div className="google-buttons">
                    <span className="google-status">{`Welcome ${props.user.fullName}`}</span>
                    <GoogleLogout 
                        clientId="406245836490-5is1hkf4v9vfhlc5oavfcm65pldebsbn.apps.googleusercontent.com"
                        buttonText="Logout"
                        onLogoutSuccess={handleGoogleLogout}
                    />
    			</div>
                </Button>
            </> 
        )
    } else {
        links = (
            <Button color="primary">
                <div className="google-buttons">
                    <span className="google-status">Log in with Google =>&nbsp;</span>
                    <GoogleLogin 
                        clientId="703741484512-tdhp2ed5337aqdjgp8dfm6te2ob3mfe8.apps.googleusercontent.com"
                        buttonText="Login"
                        scope=''
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
    			</div>
            </Button> 
        )

    }

//     <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//     <MenuIcon />
// </IconButton>

    const colorTheme = createMuiTheme({
        palette: {
        primary: { main: "#88f", contrastText: "#fff" },
        secondary: { main: "#88f", contrastText: "#fff" },
        contrastText: "#fff"
        }
    });

    return (
        <nav className={classes.root}>
            <ThemeProvider theme={colorTheme}>
            <AppBar>
                <Toolbar>
                    <Typography className={classes.title} variant="h6" color="inherit">
                        Folks in Space
                    </Typography>
                    <Button color="primary"><Link to="/">Home</Link></Button>
                    {links}
                </Toolbar>
            </AppBar>
            </ThemeProvider>
        </nav>
    )
}



export default Nav;