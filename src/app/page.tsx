import Navigation from '@/components/Navigation/Navigation';
import Window from '@/components/Terminal/Window';
import TerminalList from './components/TerminalList';
import Caution from '@/components/Caution';
export default function Home() {
	return (
		<>
			<Window />
			<Navigation>
				<main className='pt-5'>
					<Caution />
					<h1 className='relative z-10 p-2 text-6xl font-bold uppercase mix-blend-difference text-default-200'>
						ideas only matter if they're made real
					</h1>
					<TerminalList />
				</main>
			</Navigation>
		</>
	);
}
