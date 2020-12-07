function Searchbar() {
	return(
		<div className='field'>
			<div className='control has-icons-left is-borderless is-medium'>
				<input className='input is-medium' type='search' placeholder='Search'></input>
				<span className='icon is-medium is-left'>
					<i className='fas fa-search'></i>
				</span>
			</div>
		</div>
	);
};

export default Searchbar;
