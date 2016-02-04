import React from 'react';
import {Router,Route,IndexRoute,hashHistory}  from 'react-router';

import App from './App';
import Home from './containers/Home';
import Gallery from './containers/Gallery/Gallery';
import PageA from './containers/PageA';
import PageB from './containers/PageB';


export default () => {
	return (
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Home} />
				<Route path="Gallery" component={Gallery} />
				<Route path="B" component={PageB} />
			</Route>
		</Router>
	);
}

