import { React } from './../../constants/_dependencies';
import { el } from './../../constants/_variables';

// TODO: Add help field

interface IInputProps {
	hasLabel: boolean;
	label: string;
	placeholder: string;
	type: string;
};

const Input: React.FC<IInputProps> = ({
	hasLabel = true,
	label = 'Input Title',
	placeholder = 'Placeholder',
	type = 'text'
}) => {

	const children:any = [];

	if (hasLabel) {
		children.push(el('label', {}, label));
	}

	const input = el('input', {
		className: 'input',
		type,
		placeholder
	});

	const control = el('div', {
		className: 'control'
	}, input);

	return el('div', {
		className: 'field'
	}, [
		control
	]);
};

export default Input;
