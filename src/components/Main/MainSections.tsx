import React from 'react';
import { TerminalCards } from './TerminalCards';
import Cards from './Cards';
const MainSections = () => {
	return (
		<section className='overflow-hidden'>
			<TerminalCards />
			<Cards />
		</section>
	);
};

export default MainSections;
