import { React } from './../../constants/_dependencies';
import { el } from './../../constants/_variables';

interface IButtonProps {
	children?: Array<React.ReactNode>;
  classes?: string;
  isPrimary?: boolean;
  label: string;
  onClick?: () => void;
};

const Button: React.FC<IButtonProps> = ({
	isPrimary = true,
	label = 'Click me 😏',
	onClick = () => { console.log('😳'); },
	...props
}) => {

	return el('button', {
		className: isPrimary ? 'button ' + props.classes + ' is-primary' : 'button ' + props.classes,
		onClick
	}, [ props.children, label ]);

};

export default Button;
