import { React } from './../../constants/_dependencies';
import { el } from './../../constants/_variables';

interface IIconProps {
	classes?: string;
	position?: string;
	size: string;
	type: string;
}

const Icon: React.FC<IIconProps> = ({
	classes = 'icon ',
	size = 'small',
	type = '',
	...props
}) => {

	const icon = el('i', {
		className: 'fas fa-' + type
	});

	return el('span', {
		className: props.position ? classes + 'is-' + props.position + ' is-' + size : classes + 'is-' + size
	}, icon);

};

export default Icon;
