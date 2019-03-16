import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

class Routes extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={Home} />
				{/* <Route exact path="/test" component={Test} />
				<Route exact path="/about" component={About} />
				<Route exact path="/portfolio" component={Portfolio} />
				<Route exact path="/blog/new-post" component={NewPost} />
				<Route exact path="/blog/posts" component={Posts} />
				<Route path="/blog/post/:slug" component={Post} />
				<Route component={Page404} /> */}
			</Switch>
		);
	}
}

export default Routes;
