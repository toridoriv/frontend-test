import { React, ReactDOM, Route, Router, Switch } from './constants/_dependencies';
import { App } from './constants/_components';
import './styles/main.scss';

const Routing = () => {
	return (
		<Router basename="/frontend-test">
			<Switch>
				<Route exact path="/" component={ App }/>
			</Switch>
		</Router>
	);
};

ReactDOM.render(
	<React.StrictMode>
		<Routing/>
	</React.StrictMode>,
	document.getElementById('root')
);
