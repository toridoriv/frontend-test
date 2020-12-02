import { React } from './../../constants/_dependencies';
import { el } from './../../constants/_variables';

interface IColumnsProps {
	children: Array<React.ReactNode>;
}

const Columns: React.FC<IColumnsProps> = ({ children = el('div') }) => {
	return el('div', {
		className: 'columns'
	}, children);
};

export default Columns;
