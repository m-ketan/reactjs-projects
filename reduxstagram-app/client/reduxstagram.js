import React from 'react';
import {render} from 'react-dom';
import Main from './components/Main';
import CSS from './styles/style.styl';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

const router = (
		<Router history={browserHistory}>
			<Route>
				<Route path="/" component={Main}>
					<IndexRoute component={PhotoGrid}></IndexRoute>
					<Route path="/view/:postId" component={Single}></Route>
				</Route>
			</Route>
		</Router>
	);

render(router, document.getElementById('root'));

