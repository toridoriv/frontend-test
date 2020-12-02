import { React, v4 } from './../../constants/_dependencies';
import { el } from './../../constants/_variables';

interface IInputProps {
	className?: string;
	placeholder: string;
	type: string;
	value?: string;
};

const Input: React.FC<IInputProps> = ({
	className = 'input',
	placeholder = 'I am a placeholder',
	type = 'text',
	...props
}) => {
	return el('input', {
		className,
		key: v4(),
		placeholder,
		type,
		value: props.value
	});
};

export default Input;
