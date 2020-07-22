import React from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import SignIn from '../../containers/SignIn';
import Dashboard from '../../containers/Dashboard';

// const isToken = localStorage.getItem('token');
export const App = () => {
	// function PrivateRoute({ children, ...rest }) {
	// 	return <Route {...rest} render={(props) => (isToken ? children : <Redirect to={{ pathname: '/bizkit' }} />)} />;
	// }

	console.log(process.env.PUBLIC_URL);
	return (
		<div>
			<Helmet>
				<link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
			</Helmet>
			<Router basename={process.env.PUBLIC_URL}>
				<Route path='/' exact={true}>
					<SignIn />
				</Route>
				<Route path='/dashboard' exact={true}>
					<Dashboard />
				</Route>
			</Router>
		</div>
	);
};
