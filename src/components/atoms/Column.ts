import { React, v4 } from './../../constants/_dependencies';
import { el } from './../../constants/_variables';

interface IColumnProps {
	children: any;
};

const Column: React.FC<IColumnProps> = ({ children = el('div') }) => {
	return el('div', {
		className: 'column',
		key: v4()
	}, children);
};

export default Column;
