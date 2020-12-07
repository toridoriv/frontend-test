import { Button, Icon } from './../../scripts/imports';

function AddCounter({ ...props }) {

  return(
    <div className='footer has-text-right has-background-white'>
      <Button classes={ ['pl-6', 'pr-6'] } isPrimary={ true } onClick={ props.onClick }>
        <Icon type={ 'plus' }/>
      </Button>
    </div>
  );
};

export default AddCounter;
