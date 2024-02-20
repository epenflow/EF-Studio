import Navigation from '@/components/Navigation/Navigation';
import Author from '@/components/Projects/Author';
import Mapping from '@/utils/Mapping';
import cn from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Page() {
	return (
		<Navigation>
			<main className='flex flex-col justify-center'>
				<Mapping
					of={Array.from({ length: 21 })}
					render={(_, index) => (
						<article
							key={index}
							className='relative flex flex-row'>
							<div
								className={cn(
									'w-screen h-screen  bg-opacity-25 -z-10 absolute lg:relative',
									index % 2 === 0
										? 'bg-default-500'
										: 'bg-pink-600'
								)}
								style={{
									backgroundImage:
										index % 2 === 0
											? `url('/cover-sample.jpg')`
											: `url('/cover-sample-two.jpg')`,
									backgroundSize: 'cover',
									backgroundPosition: 'center',
									backgroundRepeat: 'no-repeat',
									backgroundBlendMode: 'overlay',
								}}></div>
							<div className='relative text-default-200 lg:text-black p-5 h-screen lg:w-1/2 flex flex-col gap-5'>
								<h1 className='text-4xl font-medium lg:text-2xl line-clamp-5'>
									Lorem ipsum dolor sit, amet consectetur
									adipisicing elit. Hic accusantium, laborum
									asperiores officia illum ab ex temporibus
									neque inventore quasi ullam voluptatum
									alias! Ipsa fugiat sunt perspiciatis omnis
									inventore non.
								</h1>
								<Author className='lg:flex flex-col gap-5 hidden' />
								<p className='font-medium line-clamp-5'>
									Lorem ipsum dolor, sit amet consectetur
									adipisicing elit. Omnis assumenda labore
									consequatur et modi eos beatae illum amet
									perferendis qui, accusantium inventore
									molestias eum dicta? Obcaecati similique
									dolore nesciunt tempore.
								</p>
							</div>
							<Link
								href={'/projects/slug'}
								className='absolute right-2 lg:bottom-10 bottom-6 text-3xl  rounded-lg capitalize text-default-200 lg:text-black hover:underline'>
								read more
							</Link>
						</article>
					)}
				/>
			</main>
		</Navigation>
	);
}
