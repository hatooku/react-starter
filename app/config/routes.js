import React from 'react';
import { Router, Route, IndexRoute, Link, hashHistory} from 'react-router'

import Main from '../containers/Main';

const routes = (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
		</Route>
	</Router>
);

export default routes;