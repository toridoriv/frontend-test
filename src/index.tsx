import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';

// ReactDOM.render(<App/>, document.getElementById('root'));

const Routing = () => {
	return (
		<Router>
			<Route exact path="/" component={ App }/>
		</Router>
	);
};

ReactDOM.render(
	<React.StrictMode>
		<Routing/>
	</React.StrictMode>,
	document.getElementById('root')
);