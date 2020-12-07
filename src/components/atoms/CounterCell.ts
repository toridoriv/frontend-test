import { React, ICounterCellProps } from './../../scripts/imports';

function CounterCell({ ...props }: ICounterCellProps) {

  const header = React.createElement('td', {}, props.counter.title);
  const quantity = React.createElement('td', {}, props.counter.count);
  const plus = React.createElement('td', {}, 'Plus');
  const less = React.createElement('td', {}, 'Less');

  return React.createElement(
    'tr', {}, header, plus, quantity, less
  );
};

export default CounterCell;
