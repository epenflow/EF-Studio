'use client';
import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Loader from './Loader';
import Condition from '@/utils/Condition';
interface Props {
	children: React.ReactNode;
}
const Navigation: React.FC<Props> = ({ children }) => {
	const [isCompleted, setCompleted] = React.useState<boolean>(false);
	return (
		<>
			<Condition
				state={!isCompleted}
				secondChildren={
					<>
						<Navbar />
						{children}
						<Footer />
					</>
				}>
				<Loader
					isCompleted={isCompleted}
					setCompleted={setCompleted}
				/>
			</Condition>
		</>
	);
};

export default Navigation;
