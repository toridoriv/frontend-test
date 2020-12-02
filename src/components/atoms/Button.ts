import { React, v4 } from './../../constants/_dependencies';
import { Icon } from './../../constants/_components';
import { el } from './../../constants/_variables';

interface IButtonProps {
  classes?: string;
  hasIcon?: boolean;
	iconType?: string;
  isPrimary?: boolean;
  label?: string;
  onClick?: () => void;
};

const Button: React.FC<IButtonProps> = ({
	classes = 'button',
	hasIcon = true,
	iconType = 'plus',
	isPrimary = true,
	label = 'Button',
	onClick = () => { console.log ('Hi, I am a button'); }
}) => {

	const children:any = [];

	if (label) {
		children.push(el('span', { key: v4() }, label));
	};

	if (hasIcon && label) {
		children.push(el('span', { style: { marginLeft: '.5em' }, key: v4() }));
	}

	if (hasIcon) {
		children.push(Icon({ type: iconType}));
	};



	return el('button', {
		className: isPrimary ? classes + ' is-primary' : classes,
		onClick
	}, children);

};

export default Button;
