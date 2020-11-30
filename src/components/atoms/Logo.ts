import React from 'react';

interface ILogo {
	url?: string;
}

const Logo: React.FC<ILogo> = ({ url = '/../assets/img/logo.svg' }) => {
	return React.createElement('img', {
		className: 'is-centered align-self-center',
		src: url,
		style: {
			minWidth: '70%',
			maxWidth: '700px'
		}
	});
};

export default Logo;