import { React } from './../../constants/_dependencies';
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
		className: 'title'
	}, title);

	const subtitleCont = el('h2', {
		className: 'subtitle'
	}, subtitle);

	const container = el('div', {
		className: 'container'
	}, [ titleCont, subtitleCont ]);

	const body = el('div', {
		className: 'hero-body'
	}, container);

	return el('section', {
		className: isPrimary ? 'hero primary' : 'hero'
	}, [ body ]);
};

export default Hero;
