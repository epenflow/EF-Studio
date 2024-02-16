import Navbar from '@/components/Navbar/Navbar';
import MainSections from '@/components/Main/MainSections';
import Footer from '@/components/Footer/Footer';
export default function Home() {
	return (
		<>
			<Navbar />
			<main className='overflow-x-hidden'>
				<MainSections />
			</main>
			<Footer />
		</>
	);
}
