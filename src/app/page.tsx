import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar';
import MainSections from './components/Sections/MainSections';

export default function Home() {
	return (
		<>
			<Navbar />
			<main>
				<MainSections />
			</main>
			<Footer />
		</>
	);
}
