import Caution from '@/components/Caution';
import Navigation from '@/components/Navigation/Navigation';
import Window from '@/components/Terminal/Window';
import { CONTENT } from './components/libs/Constant';

export default function page() {
	return (
		<>
			<Window />
			<Navigation>
				<main className='relative flex flex-col gap-2 px-2 pt-10 overflow-x-clip '>
					<h1 className='text-4xl font-medium capitalize'>
						information
					</h1>
					<div
						className='absolute w-screen h-screen'
						style={{
							backgroundImage: `url('/ef-profile.png')`,
							backgroundSize: 'contain',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center',
						}}></div>
					<p className='text-2xl font-normal text-justify lg:text-4xl lg:w-4/5 mix-blend-difference text-default-200 lg:text-start'>
						{CONTENT.descriptionTwo}
					</p>

					<h1 className='text-4xl font-medium capitalize mix-blend-difference text-default-200'>
						work experience
					</h1>
				</main>
			</Navigation>
		</>
	);
}
