import Navigation from '@/components/Navigation';
import InformationCard from '@/components/Info/InformationCard';

export default function page() {
	return (
		<>
			<Navigation>
				<main className='w-screen h-screen overflow-hidden flex items-center justify-end p-2 relative'>
					<InformationCard />
				</main>
			</Navigation>
		</>
	);
}
