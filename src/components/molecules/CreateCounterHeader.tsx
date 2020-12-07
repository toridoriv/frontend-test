import { Button } from './../../scripts/imports';

function CreateCounterHeader() {
  return(
    <article className='message header has-background-white has-text-black'>
      <div className='columns message-header has-background-white has-text-black is-mobile'>
        <div className='column is-1 is-mobile'>
          <button className='delete is-pulled-left' aria-label='delete'></button>
        </div>
        <div className='column is-mobile'>
          <h1 className='is-size-5 has-text-weight-bold'>Create Counter</h1>
        </div>
        <div className='column is-2 is-mobile'>
          <Button isPrimary={ true } label='Save' onClick={ () => { console.log('asdasda') } }/>
        </div>
      </div>
    </article>
  );
};

export default CreateCounterHeader;
