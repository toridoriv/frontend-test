import { React, Button, Icon } from './../../scripts/imports';

function CounterCell({ ...props }) {
  return(
    <tr className='counter-cell'>
      <th className='is-borderless'>{ props.counter.title }</th>
      <td className='is-button-container is-borderless'>
        <Button classes={ ['is-primary', 'is-inverted'] } isPrimary={ true } onClick={ () => console.log(props.counter.id) }>
          <Icon type='minus'/>
        </Button>
      </td>
      <td className='is-count-container is-borderless'>
        <span>{ props.counter.count }</span>
      </td>
      <td className='is-button-container is-borderless'>
        <Button classes={ ['is-primary', 'is-inverted'] } isPrimary={ true } onClick={ () => console.log(props.counter.id) }>
          <Icon type='plus'/>
        </Button>
      </td>
    </tr>
  );
};

export default CounterCell;
