import Caution from '@/components/Caution';
import Navigation from '@/components/Navigation/Navigation';
import Window from '@/components/Terminal/Window';

export default function page() {
	return (
		<>
			<Window />
			<Navigation>
				<main className=''>
					<Caution />
				</main>
			</Navigation>
		</>
	);
}
