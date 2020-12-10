import { Columns, Column, Searchbar, Hero, AddCounter, _, fetchCounters, useEffect, Loader, randomCounters, CounterTable } from './../../scripts/imports';

function Main({ ...props }) {

	const containerClasses = ['container', 'is-fluid', 'is-vcentered', 'is-align-self-center', 'is-mobile', 'is-centered'];
	const setCurrentScreen = props.onChange[2];

	const isLoading = props.value.loading.loading;
	const setLoading = props.onChange.setLoading;

	const counters = props.value.counters.counters;
	const setCounters = props.onChange.setCounters;

	const hasMockData = props.value.hasMockData;
	// const setMockDataState = props.onChange.setMockDataState;

	useEffect(() => {
		if (counters.length === 0) {
			const mockData = randomCounters(5, counters);
			console.log(mockData, counters);
			setTimeout(function() {
				fetchCounters().then((response) => {
					_.isEmpty(response) && hasMockData ? setCounters({ counters: mockData }) : setCounters({ counters: response });
					setLoading({ loading: false });
				});
			}, 2000);
		}
	});

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
							{
								isLoading ? <Loader/> : counters.length !== 0 ? <CounterTable value={ counters }/> :  <Hero classes={ ['is-small'] } title='No counters yet' subtitle='“When I started counting my blessings, my whole life turned around.” —Willie Nelson'/> }
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
