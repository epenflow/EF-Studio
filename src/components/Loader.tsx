'use client';
import Condition from '@/utils/Condition';
import useMediaQuery from '@/utils/hooks/useMediaQuery';
import gsap from 'gsap';
import React from 'react';
interface Props {
	isCompleted: boolean;
	setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}
const Loader: React.FC<Props> = ({ setCompleted, isCompleted }) => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	let squares: HTMLDivElement[] = [];
	React.useEffect(() => {
		function animationSquare() {
			const squareAnimations = gsap.timeline().to(squares, {
				opacity: 0,
				delay: 0.5,
				duration: 0.0025,
				ease: 'power4.out',
				stagger: { each: 0.0025, from: 'random' },
			});
			if (isCompleted) {
				squareAnimations.play();
			}
			squareAnimations.to(containerRef.current, {
				autoAlpha: 0,
				ease: 'power1.inOut',
				onComplete: () => {
					setCompleted(true);
				},
			});
		}
		if (containerRef.current) {
			const screenWidth = window.innerWidth;
			const screenHeight = window.innerHeight;
			const squareSize = 55;
			const numCols = Math.ceil(screenWidth / squareSize);
			const numRows = Math.ceil(screenHeight / squareSize);
			containerRef.current.style.width = `${numCols * squareSize}px`;
			containerRef.current.style.height = `${numRows * squareSize}px`;
			const numSquare = numCols * numRows;
			const createSquare = () => {
				for (let i = 0; i < numSquare; i++) {
					const square = document.createElement('div');
					square.classList.add('square');
					containerRef.current?.appendChild(square);
					squares.push(square);
				}
			};
			createSquare();
			animationSquare();
		}
	}, []);

	return (
		<div
			ref={containerRef}
			className='fixed w-screen h-screen flex flex-wrap items-start justify-start box-border overflow-hidden z-[99999] top-0 left-0 bg-black bg-opacity-50'
		/>
	);
};
export default Loader;
