import { Columns, Column, CreateCounterHeader, CreateCounterInput, Loader } from './../../scripts/imports';

function CreateCounter({ ...props }) {
	console.log(props);
	const containerClasses = ['container', 'is-fluid', 'is-vcentered', 'is-align-self-center', 'is-mobile', 'is-centered'];

	return (
		<div id='AddCountersScreen' className='container'>
			<Columns classes={ containerClasses }>
				<Column>
					<Columns classes={ ['is-centered'] }>
						<Column classes={ ['is-half'] }>
							<CreateCounterHeader/>
						</Column>
					</Columns>
					<Columns classes={ ['is-centered'] }>
						<Column classes={ ['is-half'] }>
							<CreateCounterInput value={ props.value } onChange={ props.onChange }/>
						</Column>
					</Columns>
					<Columns classes={ ['is-centered'] }>
						<Column classes={ ['is-half', 'has-text-centered'] }>
							<Loader/>
						</Column>
					</Columns>
				</Column>
			</Columns>
		</div>
	);
};

export default CreateCounter;
