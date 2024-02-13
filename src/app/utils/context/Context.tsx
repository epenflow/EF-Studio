'use client';
import React from 'react';

type contexts = {};
const CreatContext = React.createContext<contexts>({});

const ContextProvider = () => {
	const values = {};
	return <CreatContext.Provider value={values}></CreatContext.Provider>;
};
const useContextProvider = () => {
	const context = React.useContext<contexts>(CreatContext);
	if (context === undefined) {
		throw new Error('use context must use within ContextProvider');
	}
	return context;
};
