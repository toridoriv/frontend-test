import { React } from './../../constants/_dependencies';
import { el } from './../../constants/_variables';

interface ICircleProps {
	backgroundColor?: string;
	dimensions?: string;
};

const Circle: React.FC<ICircleProps> = ({
	backgroundColor = 'has-background-primary',
	dimensions = '50px'
}) => {

	return el('div', {
		className: backgroundColor,
		style: {
			height: dimensions,
			borderRadius: '50%',
			width: dimensions
		}
	});
	
};

export default Circle;
