'use client';

import HeartDecor from '@/public/images/heart-deco.png';
import Image, { StaticImageData } from 'next/image';
import { TestimonialsMarquee } from './testimonials-marquee';
import { SparklesCore } from './ui/sparkles';

export default function Testimonials() {
	return (
		<div className='w-full px-4 sm:px-6'>
			<div className='py-12 md:py-[120px] relative spotlight-background'>
				{/* Section header */}
				<div className='mx-auto max-w-3xl py-20 text-center relative'>
					<div className='inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50'>
						<span className='inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent'>
							Customers love Minastik
						</span>
					</div>

					<h2 className='animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-5xl'>
						We value our customers
					</h2>

					<p className='text-lg text-indigo-200/65'>
						Hear from our satisfied customers! Discover how our solutions have
						transformed businesses and made a lasting impact.
					</p>

					<div className='absolute top-0 bottom-0 z-[-1] w-full pointer-events-none select-none'>
						<SparklesCore
							id='testi-sparkle'
							background='transparent'
							minSize={0.6}
							maxSize={2}
							speed={1.5}
							particleDensity={20}
							className='w-full h-full'
							particleColor='#32A7FF'
						/>
					</div>

					<div className='heart-decor w-[602px] h-[557px] absolute top-0 left-[50%] -translate-x-1/2'>
						<Image
							src={HeartDecor}
							width={602}
							height={557}
							alt='Heart Deco'
							className='w-full h-full object-cover'
						/>

						<div className='decor-animation-left lazy-background-image lazy-background-image-maskImage lazy-background-image-loaded testimonials-heart-animation'>
							<div className='animated-item'></div>
						</div>

						<div className='decor-animation-right lazy-background-image lazy-background-image-maskImage lazy-background-image-loaded testimonials-heart-animation'>
							<div className='animated-item'></div>
						</div>
					</div>
				</div>

				{/* Marquee cards */}
				<TestimonialsMarquee />
			</div>
		</div>
	);
}

export function Testimonial({
	testimonial,
	category,
	children,
}: {
	testimonial: {
		img: StaticImageData;
		clientImg: StaticImageData;
		name: string;
		company: string;
		content: string;
		categories: number[];
	};
	category: number;
	children: React.ReactNode;
}) {
	return (
		<article
			className={`relative rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-sm transition-opacity before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] ${
				!testimonial.categories.includes(category) ? 'opacity-30' : ''
			}`}
		>
			<div className='flex flex-col gap-4'>
				<div>
					<Image
						src={testimonial.clientImg}
						height={36}
						alt='Client logo'
					/>
				</div>
				<p className="text-indigo-200/65 before:content-['“'] after:content-['”']">
					{children}
				</p>
				<div className='flex items-center gap-3'>
					<Image
						className='inline-flex shrink-0 rounded-full'
						src={testimonial.img}
						width={36}
						height={36}
						alt={testimonial.name}
					/>
					<div className='text-sm font-medium text-gray-200'>
						<span>{testimonial.name}</span>
						<span className='text-gray-700'> - </span>
						<a
							className='text-indigo-200/65 transition-colors hover:text-indigo-500'
							href='#0'
						>
							{testimonial.company}
						</a>
					</div>
				</div>
			</div>
		</article>
	);
}
