'use client';
import React from 'react';
import { createPortal } from 'react-dom';
interface Props {
	children: React.ReactNode;
	show?: boolean;
}
export const BodyPortal = ({ children, show }: Props) => {
	const [element, setElement] = React.useState<HTMLElement | null>(null);
	React.useEffect(() => {
		const body = document.body;
		setElement(body);
	}, [element]);
	return show && element ? createPortal(children, element) : null;
};
