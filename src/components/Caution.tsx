'use client';
import cn from '@/utils/cn';
import React, { HTMLAttributes } from 'react';
import Draggable from 'react-draggable';
interface Props extends HTMLAttributes<HTMLDivElement> {}
const Caution: React.FC<Props> = ({ className, style }) => {
	return (
		<Draggable positionOffset={{ x: '-50%', y: '-50%' }}>
			<div
				className={cn(
					'bg-[#F7D417] text-3xl lg:text-5xl font-bold uppercase text-center p-2 flex flex-col cursor-move fixed w-fit left-1/2 top-1/2',
					className
				)}
				style={style}>
				<span className='text-5xl lg:text-6xl bg-black text-[#F7D417]'>
					caution
				</span>
				<span>
					construction
					<br />
					area
					<br />
					authorized
					<br />
					personel only
				</span>
				<span className='text-xs'>
					this new site is undergoing construction,
					<br /> please be careful if there is suspicious activity
				</span>
			</div>
		</Draggable>
	);
};

export default Caution;
