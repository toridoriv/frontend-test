import { React } from './../../constants/_dependencies';
import { el } from './../../constants/_variables';

interface ILabelProps {
	text: React.ReactNode;
};

const Label: React.FC<ILabelProps> = ({
	text = 'Label'
}) => {
	return el('label', {
		className: 'label'
	}, text);
};

export default Label;
