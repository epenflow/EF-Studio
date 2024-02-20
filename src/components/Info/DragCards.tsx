'use client';
import React from 'react';
import Heading from './Heading';
import Cards from '../Cards';
import Education from './Education';
import Link from 'next/link';
import { CONTENT } from './libs/Constant';
import { Contact } from './Contact';
import Draggable from 'react-draggable';
import cn from '@/utils/cn';
const text = [
	'we are building our new website, stay tuned',
	'patience is a virtue',
	'good things may come to those who wait',
	'patience is not an absence of action',
	'we are building our new website',
	'have patience, all things are difficult before they become easy',
	'the two most powerful warriors are patience and time',
];
const DragCards = () => {
	return (
		<Draggable handle='#drag__handle_info'>
			<div className='flex justify-end'>
				<Cards className='w-full lg:w-1/2 h-auto relative no-scrollbar shadow-default-200 rounded-lg'>
					<div className='flex flex-row items-center gap-1 bg-default-300 p-2 rounded-t-lg border-b-[1px] border-solid border-default-400 shadow-default-200'>
						<span
							id='drag__handle_info'
							className={cn(
								`cursor-move h-3 w-3 rounded-full border-[1px] border-solid border-default-400 hover:bg-[#007AFF] hover:border-[#c9e3ff]`
							)}></span>
						<Heading>information</Heading>
					</div>
					<div className='flex flex-col px-2 my-2 gap-2'>
						<p className='text-xs text-justify cursor-text'>
							{CONTENT.description}
						</p>
						<div className='flex lg:flex-col flex-row justify-between  gap-2'>
							<div>
								<Heading>service</Heading>
								<Education service={CONTENT.service} />
							</div>
							<div>
								<Heading>contact</Heading>
								<Contact contact={CONTENT.contact} />
							</div>
							<div>
								<Heading>who am i</Heading>
								<Heading className='flex justify-center flex-col'>
									<span>©️epen flow 2024</span>
									<span>Idea, Form, Function</span>
									<span>(Brand/Design/Code)</span>
								</Heading>
							</div>
						</div>
						<Link
							href={'#'}
							className='bg-default-300 border-default w-full flex items-center justify-center rounded-lg hover:bg-[#007AFF] font-medium uppercase p-2 text-xs text-default-400 hover:text-white shadow-default-200 hover:border-[#c9e3ff]'>
							download cv
						</Link>
					</div>
				</Cards>
			</div>
		</Draggable>
	);
};

export default DragCards;
