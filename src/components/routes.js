import React from 'react';
import { Route } from 'react-router-dom';

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
				() => <Profile user={props.user} updateUser={props.updateUser} />
			} />
			<Route path="/astronauts"  render={
				() => <Astronauts user={props.user} updateUser={props.updateUser} />
			} />
			<Route path="/isslocation" render={
				() => <ISSLocation user={props.user} updateUser={props.updateUser} />
			} />
		</div>
	)
}

export default Routes;