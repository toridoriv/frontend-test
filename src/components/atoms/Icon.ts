import { React, createClassName, IIconProps } from './../../scripts/imports';

function Icon({ size = 'medium', ...props }: IIconProps) {

	const classesNames = createClassName(`icon is-${ size }`, props.classes);

  const i = React.createElement('i', { className: `fas fa-${ props.type }`});

	return React.createElement(
		'span', { className: classesNames }, i
	);
};

export default Icon;
