export const terminalClass = {
	positions: 'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50',
	styles: 'bg-default-200 border-default rounded-lg flex flex-col shadow-default-200',
	sizes: {
		lg: 'h-[90%] w-[90%]',
		md: 'h-[50vh] lg:h-4/5 w-4/5 lg:w-1/2',
	},
	modal: 'w-screen h-screen flex items-center justify-center',
};

export const terminalHeaderClass = {
	styles: 'bg-default-300 border-solid border-default-400 shadow-default-100',
	spaces: 'p-2',
	displays: 'flex flex-row items-center relative gap-2',
	headings: 'w-full text-center text-xs font-semibold',
	variants: {
		minimize: 'border-[1px] rounded-lg w-52',
		maximize: 'border-b-[1px] rounded-t-lg',
	},
} as const;
export const terminalHeaderButtonClass = {
	red: '--red-terminal-button bg-[#FD5754] border-[#DF494A]',
	yellow: '--yellow-terminal-button bg-[#FEBB40] border-[#E1A034]',
	green: '--green-terminal-button bg-[#34C848] border-[#30AB3B]',
	buttons: 'border border-solid  h-3 w-3 cursor-pointer rounded-full',
} as const;
export const terminalContent = {
	default: 'h-full rounded-b-lg',
};
