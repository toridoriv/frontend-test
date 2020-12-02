import { React, v4 } from './constants/_dependencies';
import { Button, Circle, Column, Columns, Hero,
	Control, Form, Input, Label, Icon, Tag } from './constants/_components';
import { el } from './constants/_variables';

const App: React.FC = () => {

	const btn = el(Button, {
		label: 'Click me 😏',
		key: v4()
	});

	const circle = el(Circle);

	const tag = el(Tag);

	const icon = el(Icon, {
		position: 'left',
		size: 'small',
		type: 'heart',
		key: v4()
	});

	const input = el(Input, {
		placeholder: 'placeholder',
		type: 'search',
		key: v4()
	});

	const control = el(Control, {
		hasIcon: true,
		iconPosition: 'left',
		children: [ input, icon ],
		key: v4()
	});

	const label = el(Label, {
		text: 'Labeeeeel',
		key: v4()
	});

	const form = el(Form, {
		children: [ label, control ],
		key: v4()
	});

	const column1 = el(Column, {
		children: [ btn, el(Hero), form, tag ],
		key: v4()
	});

	const column2 = el(Column, {
		children: [ circle ],
		key: v4()
	});

	return el('div', {
		className: 'App container'
	}, [
		el(Columns, {
			children: [ column1, column2 ],
			key: v4()
		})
	]);
};

export default App;
