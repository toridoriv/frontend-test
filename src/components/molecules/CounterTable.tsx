import { createClassName, ICounterTableProps, CounterCell } from './../../scripts/imports';

function CounterTable({
	...props
}: ICounterTableProps) {
  return (
    <table className={ createClassName('table', props.classes) }>
      <tbody>
        { props.counters.map(function(counter) {
          return <CounterCell counter={ counter } key={ counter.id }/>
        })}
      </tbody>
    </table>
  );
};

export default CounterTable;
