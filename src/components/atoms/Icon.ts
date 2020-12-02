import { React, v4 } from './../../constants/_dependencies';
import { el } from './../../constants/_variables';

interface IIconProps {
	type: string;
}

const Icon: React.FC<IIconProps> = ({
	type = ''
}) => {
	const icon = el('i', { className: 'fas fa-' + type });
	return el('span', { className: 'icon', key: v4() }, icon);
};

export default Icon;
