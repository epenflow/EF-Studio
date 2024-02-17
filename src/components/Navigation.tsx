import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
interface Props {
	children: React.ReactNode;
}
const Navigation: React.FC<Props> = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
};

export default Navigation;
