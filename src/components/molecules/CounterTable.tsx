import { createClassName, CounterCell, ICounterState, uuidv4 } from './../../scripts/imports';

function CounterTable({
	...props
}) {
  return (
    <table className={ createClassName('table is-fullwidth is-hoverable is-borderless', props.classes) }>
      <tbody key={ uuidv4() }>
        { props.value.map(function(counter: ICounterState) {
          return <CounterCell counter={ counter } key={ counter.id }/>
        })}
      </tbody>
    </table>
  );
};

export default CounterTable;
