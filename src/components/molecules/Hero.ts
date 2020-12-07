import { React, createClassName, IHeroProps, Title, Subtitle } from './../../scripts/imports';

function Hero({
	title = 'Title',
	subtitle = 'Subtitle',
	...props
}: IHeroProps) {

	const classesNames = createClassName('hero', props.classes);
	const body = React.createElement('div', { className: 'hero-body'}, Title({ children: title}), Subtitle({ children: subtitle }));
	const container = React.createElement('div', { className: 'container' }, body);

	return React.createElement(
		'section', { className: classesNames }, container
	);
};

export default Hero;
