import React from 'react';

const Caution = () => {
	return (
		<div className='bg-[#F7D417] text-3xl lg:text-5xl font-bold uppercase text-center p-2 flex flex-col'>
			<h1 className='text-5xl lg:text-6xl bg-black text-[#F7D417]'>
				caution
			</h1>
			<span>
				construction
				<br />
				area
				<br />
				authorized
				<br />
				personel only
			</span>
			<span className='text-xs'>
				this new site is undergoing construction,
				<br /> please be careful if there is suspicious activity
			</span>
		</div>
	);
};

export default Caution;
