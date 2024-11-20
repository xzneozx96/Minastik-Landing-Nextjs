import ClientImg01 from '@/public/images/client-logo-01.svg';
import ClientImg02 from '@/public/images/client-logo-02.svg';
import ClientImg03 from '@/public/images/client-logo-03.svg';
import ClientImg04 from '@/public/images/client-logo-04.svg';
import ClientImg05 from '@/public/images/client-logo-05.svg';
import ClientImg06 from '@/public/images/client-logo-06.svg';
import ClientImg07 from '@/public/images/client-logo-07.svg';
import ClientImg08 from '@/public/images/client-logo-08.svg';
import ClientImg09 from '@/public/images/client-logo-09.svg';
import TestimonialImg01 from '@/public/images/testimonial-01.jpg';
import TestimonialImg02 from '@/public/images/testimonial-02.jpg';
import TestimonialImg03 from '@/public/images/testimonial-03.jpg';
import TestimonialImg04 from '@/public/images/testimonial-04.jpg';
import TestimonialImg05 from '@/public/images/testimonial-05.jpg';
import TestimonialImg06 from '@/public/images/testimonial-06.jpg';
import TestimonialImg07 from '@/public/images/testimonial-07.jpg';
import TestimonialImg08 from '@/public/images/testimonial-08.jpg';
import TestimonialImg09 from '@/public/images/testimonial-09.jpg';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import { Marquee } from './ui/marquee';

const reviews = [
	{
		img: TestimonialImg01,
		clientImg: ClientImg01,
		name: 'MaKayla P.',
		company: 'Disney',
		content:
			'As a content creator, I was always on the lookout for a tool that could help me keep up with the demand. The AI-driven content tool has been a game-changer. It generates high-quality content in a fraction of the time it used to take me.',
		categories: [1, 3, 5],
	},
	{
		img: TestimonialImg02,
		clientImg: ClientImg02,
		name: 'Andrew K.',
		company: 'Samsung',
		content:
			"I've tried several content generation tools, but this AI-driven tool is by far the best. It understands my brand's voice and consistently produces content that resonates with my audience!",
		categories: [1, 2, 4],
	},
	{
		img: TestimonialImg03,
		clientImg: ClientImg03,
		name: 'Lucy D.',
		company: 'Rio',
		content:
			"Content creation used to be a bottleneck in our workflow, but not anymore. This AI tool is intuitive and produces top-notch content every time. It's like having an extra team member who never sleeps! Definitely recommend.",
		categories: [1, 2, 5],
	},
	{
		img: TestimonialImg04,
		clientImg: ClientImg04,
		name: 'Pavel M.',
		company: 'Canon',
		content:
			'The quality of the content generated by this AI tool is outstanding. It has taken our content marketing to new heights, allowing us to publish more frequently without compromising on quality. Highly recommended for anyone.',
		categories: [1, 4],
	},
	{
		img: TestimonialImg05,
		clientImg: ClientImg05,
		name: 'Miriam E.',
		company: 'Cadbury',
		content:
			"The AI-driven content tool has been a lifesaver for my marketing agency. We can now produce high-quality content for multiple clients quickly and efficiently. It's an invaluable asset to our team.",
		categories: [1, 3, 5],
	},
	{
		img: TestimonialImg06,
		clientImg: ClientImg06,
		name: 'Eloise V.',
		company: 'Maffell',
		content:
			"I'm amazed at how well this AI-driven content tool performs. It's incredibly versatile and can generate content for blogs, social media, and even product descriptions effortlessly. It's fantastic!",
		categories: [1, 3],
	},
	{
		img: TestimonialImg07,
		clientImg: ClientImg07,
		name: 'Pierre-Gilles L.',
		company: 'Binance',
		content:
			'I was blown away by how easy it was to create my content using this tool! Within a few hours, I had a professional-looking platform up and running, and my client could not believe it.',
		categories: [1, 2, 5],
	},
	{
		img: TestimonialImg08,
		clientImg: ClientImg08,
		name: 'Danielle K.',
		company: 'Forbes Inc.',
		content:
			"I've never been a fan of complicated website AI tools, which is why Open PRO is perfect for me. Its minimalist design and simple functionality make staying organized feel like second nature.",
		categories: [1, 4],
	},
	{
		img: TestimonialImg09,
		clientImg: ClientImg09,
		name: 'Mary P.',
		company: 'Ray Ban',
		content:
			"I've never been one for coding, so finding an AI tool that doesn't require any technical skills was a dream come true. This tool exceeded my expectations, and I'm proud to show off my new stuff to friends.",
		categories: [1, 2],
	},
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const Testimonial = ({
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
}) => {
	return (
		<article
			className={`relative w-[352px] h-full rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-sm transition-opacity before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] ${
				!testimonial.categories.includes(category) ? 'opacity-30' : ''
			}`}
		>
			<div className='flex flex-col gap-4'>
				{/* <div>
					<Image
						src={testimonial.clientImg}
						height={36}
						alt='Client logo'
					/>
				</div> */}
				<div className='flex flex-row items-center gap-2'>
					<Image
						className='inline-flex shrink-0 rounded-full'
						src={testimonial.img}
						width={36}
						height={36}
						alt={testimonial.name}
					/>
					<div className='flex flex-col'>
						<figcaption className='text-sm font-medium dark:text-white'>
							{testimonial.name}
						</figcaption>
						<p className='text-xs font-medium dark:text-white/40'>
							{testimonial.company}
						</p>
					</div>
				</div>

				<p className="text-indigo-200/65 before:content-['“'] after:content-['”']">
					{children}
				</p>
				{/* <div className='flex items-center gap-3'>
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
				</div> */}
			</div>
		</article>
	);
};

export function TestimonialsMarquee() {
	const [category, setCategory] = useState<number>(1);

	return (
		<div className='relative flex w-full flex-col items-center justify-center overflow-hidden md:shadow-xl marquee-wrap spotlight-background'>
			<Marquee
				pauseOnHover
				className='[--duration:30s]'
			>
				{firstRow.map((review, index) => (
					<div
						key={index}
						className='group'
					>
						<Testimonial
							testimonial={review}
							category={category}
						>
							{review.content}
						</Testimonial>
					</div>
				))}
			</Marquee>
			<Marquee
				reverse
				pauseOnHover
				className='[--duration:30s]'
			>
				{secondRow.map((review, index) => (
					<div
						key={index}
						className='group'
					>
						<Testimonial
							testimonial={review}
							category={category}
						>
							{review.content}
						</Testimonial>
					</div>
				))}
			</Marquee>
		</div>
	);
}