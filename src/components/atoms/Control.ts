import { React } from './../../constants/_dependencies';
import { el } from './../../constants/_variables';

interface IControlProps {
	hasIcon: boolean;
	iconPosition?: string;
	children: Array<React.ReactNode>;
};

const Control: React.FC<IControlProps> = ({
	hasIcon = true,
	iconPosition = 'right',
	children = [ el('input') ]
}) => {

	return el('div', {
		className: hasIcon ? 'control' + ' has-icon-' + iconPosition : 'control'
	}, children);

};

export default Control;
