import Navigation from '@/components/Navigation/Navigation';
import Window from '@/components/Terminal/Window';
import TerminalList from './components/TerminalList';
import Caution from '@/components/Caution';
export default function Home() {
	return (
		<>
			<Window />
			<Navigation>
				<main className=''>
					<Caution />
					<TerminalList />
				</main>
			</Navigation>
		</>
	);
}
