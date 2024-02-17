'use client';
import React from 'react';
import Heading from './Heading';
import Cards from '../Cards';
import Education from './Education';
import Link from 'next/link';
import { CONTENT } from './libs/Constant';
import { Contact } from './Contact';
import Marquee from 'react-fast-marquee';
import Mapping from '@/utils/Mapping';
import Draggable from 'react-draggable';
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
		<Draggable>
			<div className='cursor-move flex justify-end'>
				<Cards className='w-full lg:w-1/2 h-auto overflow-y-scroll p-2 relative no-scrollbar'>
					<Heading>information</Heading>
					<p className='text-xs text-justify'>
						{CONTENT.description}
					</p>
					<div className='flex lg:flex-col flex-row justify-between  gap-2 mb-1 mt-3'>
						<div>
							<Heading className='mb-2 mt-0'>service</Heading>
							<Education service={CONTENT.service} />
						</div>
						<div>
							<Heading className='mb-2 mt-0'>contact</Heading>
							<Contact contact={CONTENT.contact} />
						</div>
						<div>
							<Heading className='mb-2 mt-0'>who am i</Heading>
							<Heading className='flex justify-center flex-col'>
								<span>©️epen flow 2024</span>
								<span>Idea, Form, Function</span>
								<span>(Brand/Design/Code)</span>
							</Heading>
						</div>
					</div>

					<Link
						href={'#'}
						className='border-default p-1 uppercase w-full flex items-center justify-center text-default-400 hover:bg-black hover:text-white text-sm'>
						download cv
					</Link>
				</Cards>
			</div>
		</Draggable>
	);
};

export default DragCards;
