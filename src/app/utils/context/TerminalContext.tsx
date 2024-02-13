'use client';
import React from 'react';

type contexts = {
	minimize: boolean;
	maximize: boolean;
	open: boolean;
	setMinimize: React.Dispatch<React.SetStateAction<boolean>>;
	setMaximize: React.Dispatch<React.SetStateAction<boolean>>;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const TerminalContext = React.createContext<contexts>({
	minimize: false,
	maximize: false,
	open: false,
	setMinimize: () => {},
	setMaximize: () => {},
	setOpen: () => {},
});
interface Props {
	children: React.ReactNode;
}
export const TerminalProvider = ({ children }: Props) => {
	const [minimize, setMinimize] = React.useState<boolean>(false);
	const [maximize, setMaximize] = React.useState<boolean>(false);
	const [open, setOpen] = React.useState<boolean>(false);
	const values = {
		minimize,
		maximize,
		open,
		setMinimize,
		setMaximize,
		setOpen,
	};
	return (
		<TerminalContext.Provider value={values}>
			{children}
		</TerminalContext.Provider>
	);
};
export const useTerminalProvider = () => {
	const context = React.useContext<contexts>(TerminalContext);
	if (context === undefined) {
		throw new Error('use context must use within ContextProvider');
	}
	return context;
};
