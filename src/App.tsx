import { React, Welcome, Main, useState, CreateCounter } from './scripts/imports';

function App() {

	const [ userStatus, setUserStatus ] = useState({
		logged: false
	});

	const [ loading, setLoading ] = useState({
		loading: true
	});

	const [ counters, setCounters ] = useState({
		counters: []
	});

	const [ currentScreen, setCurrentScreen ] = useState('App');

	function showScreen(currentScreen: string) {
		switch(currentScreen) {
			case 'Main': {
				return <Main value={ [ loading, counters ] } onChange={ [setLoading, setCounters, setCurrentScreen ] }/>;
			}
			case 'CreateCounter': {
				return <CreateCounter/>;
			}
			default:
				return <Welcome value={ userStatus } onChange={ handleUserStateChange } />;
		}
	};

	function handleUserStateChange() {
		setUserStatus({ logged: true });
		setCurrentScreen('Main');
	};

	return (
		<div id='App'>
			{ showScreen(currentScreen) }
		</div>
  );
};

export default App;
