import { React, v4 } from './../../constants/_dependencies';
import { el } from './../../constants/_variables';

interface IHeroProps {
	isPrimary: boolean;
	subtitle: string;
	title: string;
};

const Hero: React.FC<IHeroProps> = ({
	isPrimary = true,
	subtitle = 'Subtitle',
	title = 'Title'
}) => {

	const titleCont = el('h1', {
		className: 'title',
		key: v4()
	}, title);

	const subtitleCont = el('h2', {
		className: 'subtitle',
		key: v4()
	}, subtitle);

	const container = el('div', {
		className: 'container',
		key: v4()
	}, [ titleCont, subtitleCont ]);

	const body = el('div', {
		className: 'hero-body'
	}, container);

	return el('section', {
		className: isPrimary ? 'hero primary' : 'hero',
		key: v4()
	}, [ body ]);
};

export default Hero;
