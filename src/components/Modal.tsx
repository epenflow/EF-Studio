import React, { HtmlHTMLAttributes } from 'react';

const Modal: React.FC<HtmlHTMLAttributes<HTMLElement>> = ({
	children,
	onClick,
}) => {
	return (
		<article
			onClick={onClick}
			className='fixed top-0 left-0 w-screen h-screen overflow-hidden bg-black bg-opacity-25 flex items-center justify-center z-[100]'>
			{children}
		</article>
	);
};

export default Modal;
