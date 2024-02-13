import React from 'react';

const Navbar = () => {
	return (
		<header className='fixed top-0 left-0'>
			<div className='w-screen flex flex-row justify-between items-center lg:px-10 px-2 py-2  font-bold lg:font-medium lg:text-lg capitalize text-xs'>
				<h1>epenflow</h1>
				<h1 className='flex items-center justify-center gap-1'>
					<span className='h-4 w-4 rounded-full border border-solid border-black block hover:bg-black'></span>
					info
				</h1>
			</div>
		</header>
	);
};

export default Navbar;
