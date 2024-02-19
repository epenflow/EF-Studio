'use client';
import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Loader from '../Loader';
interface Props {
	children: React.ReactNode;
}
const Navigation: React.FC<Props> = ({ children }) => {
	const [loading, setLoading] = React.useState<boolean>(false);
	return !loading ? (
		<Loader
			loading={loading}
			setLoading={setLoading}
		/>
	) : (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
};

export default Navigation;
