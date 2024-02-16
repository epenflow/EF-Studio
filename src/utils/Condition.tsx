import React from 'react';
interface Props {
	children: React.ReactNode;
	state: boolean;
	secondChildren: React.ReactNode;
}
const Condition = ({ state, children, secondChildren }: Props) => {
	return state ? children : secondChildren;
};

export default Condition;
