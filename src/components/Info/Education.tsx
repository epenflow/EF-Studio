import React from 'react';
import Mapping from '@/utils/Mapping';
import List from './List';
interface Props {
	service: Array<string>;
}
const Education: React.FC<Props> = ({ service }) => {
	return (
		<div className='text-xs flex flex-col gap-1'>
			<Mapping
				of={service}
				render={(item, index) => <List key={index}>{item}</List>}
			/>
		</div>
	);
};

export default Education;
