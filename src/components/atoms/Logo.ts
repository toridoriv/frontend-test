import { React, createClassName, IBaseProps, logo } from './../../scripts/imports';

function Logo({ ...props }: IBaseProps) {

	return React.createElement(
		'img', {
			className: createClassName('is-centered align-self-center', props.classes),
			src: logo,
			style: {
				minWidth: '50%',
				maxWidth: '700px'
			},
		},
		props.children
	);
};

export default Logo;
