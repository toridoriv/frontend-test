import { React, createClassName, IButtonProps } from './../../scripts/imports';

function Button({ ...props }: IButtonProps) {
	const btnClasses = props.isPrimary ? createClassName('button is-primary', props.classes) : createClassName('button', props.classes);
	return React.createElement(
		'button', {
			className: btnClasses,
			onClick: props.onClick
		},
		props.label, props.children
	);
};

export default Button;
