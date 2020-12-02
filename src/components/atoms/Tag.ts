import { React } from './../../constants/_dependencies';
import { el } from './../../constants/_variables';

interface ITagProps {
	text: React.ReactNode;
};

const Tag: React.FC<ITagProps> = ({
	text = 'I am a tag'
}) => {
	return el('span', {
		className: 'tag is-medium'
	}, text);
};

export default Tag;
