type Education = {
	school: string;
	years: number | string;
	locations: string;
	major?: string;
};
export type Contact = {
	title: string;
	href: string;
};
type ContentType = {
	description: string;
	education: Array<Education>;
	service: Array<string>;
	contact: Array<Contact>;
};
export const CONTENT: ContentType = {
	description: `Hi, I'm I Putu Mega Krisnayana, but you can call me Epen Flow. I live in Bali, and I'm really enthusiastic about technology and art. I view art and technology as two halves of a whole, like Yin and Yang. I believe in the transformative power of innovation and creativity should make our lives easier, faster, and more efficient. That's why I decide to pursue a degree in information systems at ITB STIKOM BALI. Moreover, I'm also self-taught, and whenever I have free time, I spend it studying programming and other topics that I find interesting. With a strong interest in technology, programming, music, art, and photography, I have developed a diverse set of skills. My skills include communication, teamwork, and leadership. I’m proficient in using Microsoft Office and Adobe Creative Suite. In terms of programming, I have experience with Laravel, Next-Js, and Python. Additionally, I'm skilled in using Corel Draw, Adobe Creative Suite and Blender for design and animation purposes. My interests and skills combined make me a well-rounded individual capable of contributing to various fields. If you're interested in learning more about me, you can preview my portfolio on my website.`,
	education: [
		{
			school: 'itb stikom bali',
			years: '2019 - now',
			locations: 'denpasar, bali',
			major: 'bachelor information systems',
		},
		{
			school: 'smk n 1 bangli',
			years: '2015 - 2018',
			locations: 'bangli, bali',
			major: 'computer and network engineer',
		},
		{
			school: 'smp n 2 bangli',
			years: '2012 - 2015',
			locations: 'bangli, bali',
		},
	],
	service: [
		'Digital Strategy',
		'Art Direction',
		'Brand Identity',
		'	Printed Matter',
	],
	contact: [
		{
			title: 'email',
			href: '#',
		},
		{
			title: 'instagram',
			href: '#',
		},
		{
			title: 'threads',
			href: '#',
		},
		{
			title: 'facebook',
			href: '#',
		},
		{
			title: 'twitter',
			href: '#',
		},
	],
};
