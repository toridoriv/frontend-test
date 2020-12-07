import { Columns, Column, Searchbar, Hero, AddCounter, _, CounterTable, fetchCounters, useEffect, Loader } from './../../scripts/imports';

function Main({ ...props }) {

	const containerClasses = ['container', 'is-fluid', 'is-vcentered', 'is-align-self-center', 'is-mobile', 'is-centered'];
	let isLoading = _.find(props.value, 'loading');
	const countersList =  _.find(props.value, 'counters');
	const setLoading = props.onChange[0];
	const setCounters = props.onChange[1];
	const setCurrentScreen = props.onChange[2];

	useEffect(() => {
		setTimeout(() => {
			// @ts-ignore
			fetchCounters().then((response) => {
				setCounters({ counters: response });
				setLoading({ loading: false });
			});
		}, 2000);
	}, [setLoading, setCounters]);

	return (
		<div id='Main' className='container'>
			<Columns classes={ containerClasses }>
				<Column>
					<Columns classes={ ['is-centered'] }>
						<Column classes={ ['is-half', 'has-text-centered'] }>
							<Searchbar/>
						</Column>
					</Columns>
					<Columns classes={ ['is-centered'] }>
						<Column classes={ ['is-half', 'has-text-centered', 'is-body'] }>
							{ isLoading ? <Loader/> : countersList.counters.length !== 0 ? <CounterTable counters={ countersList.counters }/> :  <Hero classes={ ['is-small'] } title='No counters yet' subtitle='“When I started counting my blessings, my whole life turned around.” —Willie Nelson'/> }
						</Column>
					</Columns>
					<Columns classes={ ['is-centered'] }>
						<Column classes={ ['is-half', 'has-text-centered'] }>
							<AddCounter onClick={ () => setCurrentScreen('CreateCounter') }/>
						</Column>
					</Columns>
				</Column>
			</Columns>
		</div>
	);
};

export default Main;
