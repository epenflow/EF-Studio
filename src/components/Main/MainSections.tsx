import React from 'react';
import Cards from './Cards';
import TerminalList from './TerminalList';

const MainSections = () => {
	return (
		<section className='overflow-hidden'>
			<TerminalList />
			<Cards />
		</section>
	);
};

export default MainSections;
