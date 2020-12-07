import { React, createClassName } from './../../scripts/imports';

function Tag({
  ...props
}) {
  const classesNames = createClassName('tag', props.classes);
  return React.createElement('span', {
    className: classesNames,
    style: {
      backgroundColor: '#ECECEC',
      border: '1px solid #DCDCDF',
      borderRadius: '99px',
      boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
      color: 'black',
      fontWeight: '500',
      fontSize: '17px',
      lineHeight: '23px',
      padding: '8px 18px'
    }
  }, props.children);
};

export default Tag;
