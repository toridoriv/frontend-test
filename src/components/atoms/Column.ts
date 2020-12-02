import { React } from './../../constants/_dependencies';
import { el } from './../../constants/_variables';

interface IColumnProps {
	children: Array<React.ReactNode>;
};

const Column: React.FC<IColumnProps> = ({ children = el('div') }) => {
	return el('div', {
		className: 'column'
	}, children);
};

export default Column;
