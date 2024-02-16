'use client';
import dynamic from 'next/dynamic';
import React from 'react';

const FooterTimes = () => {
	const [dates, setDates] = React.useState<Date>(new Date());
	React.useEffect(() => {
		const intervalId = setInterval(() => {
			setDates((prev) => {
				const newDate = new Date();
				prev = newDate;
				return prev;
			});
		}, 1000);
		return () => {
			clearInterval(intervalId);
		};
	}, []);
	function formatDate(date: Date | number) {
		const dateFormat = new Intl.DateTimeFormat('id-ID', {
			minute: '2-digit',
			hour: '2-digit',
			second: '2-digit',
			hour12: true,
		}).format(date);
		return dateFormat;
	}
	return <h1>{formatDate(dates).replaceAll('.', ' : ')}</h1>;
};

export default dynamic(() => Promise.resolve(FooterTimes), {
	ssr: false,
});
