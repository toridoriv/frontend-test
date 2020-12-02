import { React, v4 } from './../../constants/_dependencies';
import { el } from './../../constants/_variables';

interface IColumnsProps {
	children: any;
}

const Columns: React.FC<IColumnsProps> = ({ children = el('div') }) => {
	return el('div', {
		className: 'columns',
		key: v4()
	}, children);
}

export default Columns;
