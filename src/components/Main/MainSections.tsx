import React from 'react';
import Cards from './Cards';
const TerminalList = React.lazy(() => import('./TerminalList'));
const MainSections = () => {
	return (
		<section className='overflow-hidden'>
			<TerminalList />
			<Cards />
		</section>
	);
};

export default MainSections;
