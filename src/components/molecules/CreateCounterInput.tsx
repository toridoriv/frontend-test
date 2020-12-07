function CreateCounterInput() {
  return(
    <div className='field container'>
      <label className='label'>Name</label>
      <div className='control'>
        <input className='input' type='text' placeholder='Cups of coffee'/>
      </div>
      <p className="help">Give it a name. Creative block? See <a>examples</a>.</p>
    </div>
  );
};

export default CreateCounterInput;
