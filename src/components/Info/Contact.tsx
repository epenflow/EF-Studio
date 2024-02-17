import React from 'react';
import Link from 'next/link';
import List from './List';
import { Contact as ContactTypes } from './libs/Constant';
import Mapping from '@/utils/Mapping';
interface Props {
	contact: Array<ContactTypes>;
}
export const Contact: React.FC<Props> = ({ contact }) => {
	return (
		<Mapping
			of={contact}
			render={(item, index) => (
				<Link
					href={'#'}
					key={index}>
					<List className='hover:underline'>{item.title}</List>
				</Link>
			)}
		/>
	);
};
