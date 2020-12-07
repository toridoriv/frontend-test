import { React, createClassName, IBaseProps } from './../../scripts/imports';

function Title({ ...props }: IBaseProps) {

	const classesNames = createClassName('title', props.classes);

	return React.createElement(
		'h1', { className: classesNames }, props.children
	);
};

export default Title;
