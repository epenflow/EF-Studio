import Image from 'next/image';
import Terminal from './components/Terminal/Terminal';
import { TerminalProvider } from './utils/context/TerminalContext';
import Caution from './components/Caution';

export default function Home() {
	return (
		<main>
			<section className=''>
				<TerminalProvider>
					<Terminal
						title='under__construction@epenflow'
						contentClassNames='flex flex-col items-center justify-center'>
						<Caution />
					</Terminal>
				</TerminalProvider>
			</section>
			<section className='h-[300vh]'></section>
		</main>
	);
}
