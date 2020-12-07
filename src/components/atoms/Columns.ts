import { React, createClassName, IBaseProps } from './../../scripts/imports';

function Columns({ ...props }: IBaseProps) {

	const classesNames = createClassName('columns', props.classes);

	return React.createElement(
		'div', { className: classesNames }, props.children
	);
};

export default Columns;
