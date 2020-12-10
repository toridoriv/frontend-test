import { Circle } from './../../scripts/imports';

function Loader() {
  const size = 60;
  return (
    <div className='is-loader-container is-flex is-justify-content-center is-align-items-center'>
      <Circle opacity={ 0.2 } size={ `${ size }px` }/>
      <Circle opacity={ 0.5 } size={ `${ (size / 100) * 60 }px` }/>
      <Circle size={ `${ (size / 100) * 30 }px` }/>
    </div>
  );
};

export default Loader;
