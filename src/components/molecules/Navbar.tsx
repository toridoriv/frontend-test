function Navbar({ ...props }) {
  return(
    <div className='mini-navbar card is-shadowless'>
      <article className='message header has-background-white has-text-black'>
        <div className='columns message-header has-background-white has-text-black is-mobile'>
          <div className='column is-1 is-mobile'>
            <button className='delete is-pulled-left' aria-label='delete'></button>
          </div>
          <div className='column is-mobile'>
            <h1 className='is-size-5 has-text-weight-bold'>{ props.title }</h1>
          </div>
          <div className='column is-2 is-mobile'>
            { props.children }
          </div>
        </div>
      </article>
    </div>
  );
};

export default Navbar;
