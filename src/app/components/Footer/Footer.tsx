import dynamic from 'next/dynamic';
import React from 'react';
import FooterTimes from './FooterTimes';

const Footer = () => {
	console.info('footer');
	return (
		<footer className='fixed bottom-0 left-0'>
			<div className='w-screen flex flex-row justify-between items-center lg:px-10 px-2 py-2  font-bold lg:font-medium lg:text-lg capitalize text-xs'>
				<div className='flex flex-row items-center'>
					<h1>instagram,</h1>
					<h1>threads</h1>
				</div>
				<FooterTimes />
				<h1>send an email</h1>
			</div>
		</footer>
	);
};

export default Footer;
