import { terminalHeaderButtonClass } from './classTypes';
const title = {
	open: 'red__open',
	minimize: 'yellow__minimize',
	maximize: 'green__maximize',
};
type buttons = {
	key: number;
	title: string;
	classNames: string;
	actions: string;
};
export const buttons: buttons[] = [
	{
		key: 1,
		title: title.open,
		classNames: terminalHeaderButtonClass.red,
		actions: 'minimize',
	},
	{
		key: 2,
		title: title.minimize,
		classNames: terminalHeaderButtonClass.yellow,
		actions: 'minimize',
	},
	{
		key: 3,
		title: title.maximize,
		classNames: terminalHeaderButtonClass.green,
		actions: 'maximize',
	},
];
