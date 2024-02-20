import React from 'react';
import Mapping from '@/utils/Mapping';
import List from './List';
interface Props {
	service: Array<string>;
}
const Education: React.FC<Props> = ({ service }) => {
	return (
		<Mapping
			of={service}
			render={(item, index) => <List key={index}>{item}</List>}
		/>
	);
};

export default Education;
