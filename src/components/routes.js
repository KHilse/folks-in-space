import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// COMPONENTS
import Home from './pages/home';
import Profile from './auth/profile';
import Astronauts from './pages/astronauts';
import ISSLocation from './pages/isslocation';

const Routes = props => {
	return (
		<div>
			<Route exact path="/" component={Home} />
			<Route path="/profile"  render={
				() => (props.user) ? <Profile user={props.user} updateUser={props.updateUser} /> : <Redirect to="/" />
			} />
			<Route path="/astronauts"  render={
				() => (props.user) ? <Astronauts astronauts={props.astronauts} user={props.user} updateUser={props.updateUser} /> : <Redirect to="/" />
			} />
			<Route path="/isslocation" render={
				() => (props.user) ? <ISSLocation issLocationArray={props.issLocationArray} user={props.user} updateUser={props.updateUser} /> : <Redirect to="/" />
			} />
		</div>
	)
}

export default Routes;