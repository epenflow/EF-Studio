import React, { HTMLAttributes } from 'react';
import Link from 'next/link';
import cn from '@/utils/cn';
interface Props extends HTMLAttributes<HTMLDivElement> {}
const Author: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn(className)}>
			<span className='block w-full h-[1px] bg-default-400' />
			<div className='flex items-center flex-row gap-2 capitalize relative'>
				<span
					className='block h-10 w-10 rounded-full bg-default-200 border-default'
					style={{
						backgroundImage: `url('/ef-profile.png')`,
						backgroundPosition: 'center',
						backgroundSize: 'cover',
					}}></span>
				<div>
					<div className='flex flex-row gap-1.5 items-center'>
						<h1>epen flow</h1>
						<span className='block h-2 w-2 rounded-full bg-default-600'></span>
						<Link href={'/social'}>
							<h1 className='text-default-500 text-sm'>follow</h1>
						</Link>
					</div>
					<h1 className='text-xs text-zinc-500'>26 maret 2020</h1>
				</div>
				{/* <span className='absolute right-0 top-0'>
				<h1>share</h1>
			</span> */}
			</div>
			<span className='block w-full h-[1px] bg-default-400' />
		</div>
	);
};

export default Author;
