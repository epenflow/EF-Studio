import Caution from '@/components/Caution';
import Navigation from '@/components/Navigation/Navigation';
import Window from '@/components/Terminal/Window';
import { CONTENT } from './components/libs/Constant';
import cn from '@/utils/cn';
import { HTMLAttributes } from 'react';
interface IHeading extends HTMLAttributes<HTMLHeadingElement> {}
const Heading = ({ className, children }: IHeading) => {
	return (
		<h1
			className={cn(
				`text-4xl font-medium capitalize mix-blend-difference text-default-200`,
				className
			)}>
			{children}
		</h1>
	);
};
export default function page() {
	return (
		<>
			<Window />
			<Navigation>
				<main className='relative flex flex-col gap-2 px-2 pt-10 overflow-x-clip '>
					<Heading>information</Heading>
					<p className='text-2xl font-normal text-justify lg:text-4xl lg:w-4/5 mix-blend-difference text-default-200 lg:text-start'>
						{CONTENT.descriptionTwo}
					</p>
					<Heading>working experience</Heading>
					<Heading className='uppercase text-center'>
						//under construction//
					</Heading>
				</main>
			</Navigation>
		</>
	);
}
