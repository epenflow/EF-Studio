'use client';
import React from 'react';
export function domReady() {
	const [isDom, setDom] = React.useState(false);
	React.useState(() => {
		setDom((isDom) => (isDom = true));
	});
	return isDom;
}
