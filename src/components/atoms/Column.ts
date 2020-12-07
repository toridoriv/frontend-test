import { React, createClassName, IBaseProps } from './../../scripts/imports';

function Column({ ...props }: IBaseProps) {

	const classesNames = createClassName('column', props.classes);

	return React.createElement(
		'div', { className: classesNames }, props.children
	);
};

export default Column;
