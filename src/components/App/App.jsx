import React from 'react';
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import SignIn from '../../containers/SignIn';
import Dashboard from '../../containers/Dashboard';

const isToken = localStorage.getItem('token');
export const App = () => {
	function PrivateRoute({ children, ...rest }) {
		return <Route {...rest} render={(props) => (isToken ? children : <Redirect to={{ pathname: '/' }} />)} />;
	}

	return (
		<div>
			<Helmet>
				<link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
			</Helmet>
			<Router>
				<Route path='/' exact={true}>
					<SignIn />
				</Route>
				<PrivateRoute path='/dashboard'>
					<Dashboard />
				</PrivateRoute>
			</Router>
		</div>
	);
};
