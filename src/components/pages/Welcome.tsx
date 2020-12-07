import { Button, Columns, Column, Hero, Logo } from './../../scripts/imports';

function Welcome({ ...props }) {
	console.log(props);
	const containerClasses = ['container', 'is-fluid', 'is-vcentered', 'is-align-self-center', 'is-mobile', 'is-centered'];

	return (
		<div id='Welcome' className='container'>
			<Columns classes={ containerClasses }>
				<Column>
					<Columns classes={ ['is-centered'] }>
						<Column classes={ ['is-half', 'has-text-centered'] }>
							<Logo/>
						</Column>
					</Columns>
					<Columns classes={ ['is-centered'] }>
						<Column classes={ ['is-half', 'has-text-centered'] }>
							<Hero title='Welcome to Counters' subtitle='Capture cups of lattes, frapuccinos, or anything else that can be counted.'/>
						</Column>
					</Columns>
					<Columns classes={ ['is-centered'] }>
						<Column classes={ ['is-half', 'has-text-centered'] }>
							<Button isPrimary={ true } label='Get Started' onClick={ () => { props.onChange() } }/>
						</Column>
					</Columns>
				</Column>
			</Columns>
		</div>
	);
};

export default Welcome;
