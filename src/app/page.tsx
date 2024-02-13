import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar';
import MainSections from './components/Sections/MainSections';
import Mapping from './utils/Mapping';

export default function Home() {
	return (
		<>
			<Navbar />
			<main className='overflow-x-hidden'>
				<MainSections />
				<Mapping
					of={Array.from({ length: 5 })}
					render={(_, index) => (
						<section className='h-screen w-screen overflow-hidden'></section>
					)}
				/>
			</main>
			<Footer />
		</>
	);
}
