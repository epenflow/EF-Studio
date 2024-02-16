'use client';
import React from 'react';
import getAge from '../utils/hooks/getAge';
import Image from 'next/image';
import Link from 'next/link';
import Modal from './Modal';
import Mapping from '@/utils/Mapping';
import cn from '@/utils/cn';
type Education = {
	school: string;
	years: number | string;
	locations: string;
	major?: string;
};
type ContentType = {
	description: string;
	education: Array<Education>;
};
const CONTENT: ContentType = {
	description: `"Hi, I'm I Putu Mega Krisnayana ${getAge(
		2000
	)}y/o, but you can call me Epen Flow. I live in Bali, and I'm really enthusiastic about technology and art. I believe that technology should make our lives easier, faster, and more efficient. That's why I decide to pursue a degree in information systems at ITB STIKOM BALI.  Moreover, I'm also self-taught, and whenever I have free time, I spend it studying programming and other topics that I find interesting."`,
	education: [
		{
			school: 'itb stikom bali',
			years: '2019 - now',
			locations: 'denpasar, bali',
			major: 'bachelor information systems',
		},
		{
			school: 'smk n 1 bangli',
			years: '2015 - 2018',
			locations: 'bangli, bali',
			major: 'computer and network engineer',
		},
		{
			school: 'smp n 2 bangli',
			years: '2012 - 2015',
			locations: 'bangli, bali',
		},
	],
};
interface Props {
	onClick?: () => void;
}

const Details = ({ locations, school, years, major }: Education) => {
	return (
		<div className='flex flex-row justify-between'>
			<div className='flex flex-col items-start'>
				<span className='uppercase font-bold'>{school}</span>
				<span className='italic hidden lg:block'>{major}</span>
			</div>
			<div className='flex flex-col items-end'>
				<span className='uppercase font-bold'>{years}</span>
				<span className='italic capitalize hidden lg:block'>
					{locations}
				</span>
			</div>
		</div>
	);
};
const Info: React.FC<Props> = ({ onClick }) => {
	const [isHover, setHover] = React.useState<boolean>(false);
	function hover() {
		setHover((prev) => !prev);
	}
	return (
		<div className='lg:w-1/2 w-4/5 h-4/5 bg-white z-50 p-2 flex flex-col gap-2 overflow-y-scroll no-scrollbar border-default'>
			<div className='capitalize flex items-center justify-between font-bold'>
				<h1>info</h1>
				<button
					className='capitalize hover:underline flex items-center justify-center gap-1'
					onClick={onClick}
					onMouseEnter={hover}
					onMouseLeave={hover}>
					<span
						className={cn(
							'h-3 w-3 hidden lg:block rounded-full border-[1px] border-solid border-black',
							isHover && 'bg-black'
						)}
					/>
					close
				</button>
			</div>
			<div
				className='flex items-center justify-center w-full h-52 bg-contain bg-no-repeat bg-center bg-[#231F20]'
				style={{ backgroundImage: 'url(/ef-logo-grid.png)' }}
			/>
			<p className='normal-case text-justify'>{CONTENT.description}</p>
			<details>
				<summary className='cursor-pointer'>Education</summary>
				<Mapping
					of={CONTENT.education}
					render={(item, index) => (
						<Details
							{...item}
							key={index}
						/>
					)}
				/>
			</details>
			<details>
				<summary>Internship experience</summary>
				<p>update soon!</p>
			</details>
		</div>
	);
};

export default Info;
