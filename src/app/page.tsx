import MainSections from '@/components/Main/MainSections';
import Navigation from '@/components/Navigation/Navigation';
export default function Home() {
	return (
		<>
			<Navigation>
				<main className='overflow-x-hidden'>
					<MainSections />
				</main>
			</Navigation>
		</>
	);
}
