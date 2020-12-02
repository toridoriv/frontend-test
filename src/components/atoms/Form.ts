import { React } from './../../constants/_dependencies';
import { el } from './../../constants/_variables';

interface IFormProps {
	children: Array<React.ReactNode>;
};

const Form: React.FC<IFormProps> = ({
	children = [
		el('input')
	]
}) => {
	return el('div', {
		className: 'field'
	}, children);
};

export default Form;
