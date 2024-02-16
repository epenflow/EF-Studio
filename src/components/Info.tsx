import React from 'react';
import getAge from '../utils/hooks/getAge';
import Image from 'next/image';
import Link from 'next/link';
import Modal from './Modal';
const CONTENT = {
	description: `"Hi, I'm I Putu Mega Krisnayana ${getAge(
		2000
	)}y/o, but you can call me Epen Flow. I live in Bali, and I'm really enthusiastic about technology and art. I believe that technology should make our lives easier, faster, and more efficient. That's why I decide to pursue a degree in information systems at ITB STIKOM BALI.  Moreover, I'm also self-taught, and whenever I have free time, I spend it studying programming and other topics that I find interesting."`,
};
interface Props {
	onClick?: () => void;
}
const Info: React.FC<Props> = ({ onClick }) => {
	return (
		<div className='lg:w-1/2 w-4/5 h-4/5 bg-white z-50 p-2 flex flex-col gap-2 overflow-y-scroll no-scrollbar'>
			<div className='capitalize flex items-center justify-between font-bold'>
				<h1>info</h1>
				<button
					className='capitalize'
					onClick={onClick}>
					close
				</button>
			</div>
			<div
				className='flex items-center justify-center w-full h-52 bg-contain bg-no-repeat bg-center bg-[#231F20]'
				style={{ backgroundImage: 'url(/ef-logo-grid.png)' }}
			/>
			<p className='normal-case text-justify'>{CONTENT.description}</p>
			<details>
				<summary>Education</summary>
				<p>update soon!</p>
			</details>
		</div>
	);
};

export default Info;
