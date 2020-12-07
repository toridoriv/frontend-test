function CreateCounterInput({ ...props }) {

  const setCurrentScreen = props.onChange[2];

  return(
    <div className='field container'>
      <label className='label'>Name</label>
      <div className='control'>
        <input className='input' type='text' placeholder='Cups of coffee'/>
      </div>
      <p className="help">Give it a name. Creative block? See <button className='link' onClick={ () => setCurrentScreen('Examples') }>examples</button>.</p>
    </div>
  );
};

export default CreateCounterInput;
