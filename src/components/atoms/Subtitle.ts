import { React, createClassName, IBaseProps } from './../../scripts/imports';

function Subtitle({ ...props }: IBaseProps) {

	const classesNames = createClassName('subtitle', props.classes);

	return React.createElement(
		'h2', { className: classesNames }, props.children
	);
};

export default Subtitle;
