import { React, Button, Navbar } from './../../scripts/imports';

function CreateCounterHeader() {
  const btn = React.createElement(Button, {
    isPrimary: true,
    label: 'Save',
    onClick: () => { console.log('asdasdasd')}
  });
  return (
    <Navbar title='Create counter' children={ btn }/>
  );
};

export default CreateCounterHeader;
