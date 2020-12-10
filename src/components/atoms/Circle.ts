import { ICircleProps, createElement } from './../../scripts/imports';

function Circle({ opacity = 1, ...props }: ICircleProps) {
  const className = 'circle has-background-primary';
  const style = {
    height: props.size,
    opacity,
    width: props.size
  };
  return createElement('div', {
    className,
    style
  });
};

export default Circle;
