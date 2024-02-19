import { terminalHeaderButtonClass } from './ClassName';
const Title = {
	open: 'red__open',
	minimize: 'yellow__minimize',
	maximize: 'green__maximize',
} as const;
const Actions = ['open', 'minimize', 'maximize'] as const;

export type TActions = (typeof Actions)[keyof typeof Actions];
type TButtons = {
	key: number;
	title: (typeof Title)[keyof typeof Title];
	classNames: (typeof terminalHeaderButtonClass)[keyof typeof terminalHeaderButtonClass];
	actions: TActions;
};
export const buttons: TButtons[] = [
	{
		key: 1,
		title: 'red__open',
		classNames: terminalHeaderButtonClass.red,
		actions: 'minimize',
	},
	{
		key: 2,
		title: 'yellow__minimize',
		classNames: terminalHeaderButtonClass.yellow,
		actions: 'minimize',
	},
	{
		key: 3,
		title: 'green__maximize',
		classNames: terminalHeaderButtonClass.green,
		actions: 'maximize',
	},
];
