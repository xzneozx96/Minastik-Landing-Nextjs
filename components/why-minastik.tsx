import Image from 'next/image';
import Spotlight from './spotlight';
import { BorderBeam } from './ui/border-beam';
import GridBackground from '@/public/images/grid-background.svg';
import SpotlightBackground from '@/public/images/spotlight-background.png';
import DedicatedSupport from '@/public/images/why-minastik/24h-support.webp';
import SecureAndReliable from '@/public/images/why-minastik/secure-reliable-2.webp';
import Scalable from '@/public/images/why-minastik/scalable.webp';
import FlexibleWorkflow from '@/public/images/why-minastik/flexible.webp';
import CostEfficient from '@/public/images/why-minastik/cost-efficient.webp';

function Card({
	badgeText,
	title,
	description,
	imageSrc,
	videoSrc,
	colSpan,
	hasBeam,
}: any) {
	return (
		<div
			className={`group/card relative h-full overflow-hidden rounded-2xl p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/20 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100 grid grid-rows-subgrid ${colSpan}`}
		>
			<div className='relative z-20 h-full overflow-hidden rounded-[inherit] after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50 flex flex-col glassy-card no-bg'>
				<Image
					src={GridBackground}
					alt='spotlight-ray'
					className='absolute h-full w-full top-0 left-0 object-cover'
				/>

				{/* {hasBeam && <BorderBeam />} */}

				<div className='pb-6 flex-1 flex justify-center items-center z-10'>
					<video
						autoPlay
						muted
						loop
						playsInline
						className='rounded-lg'
					>
						<source
							src={videoSrc}
							type='video/mp4'
						/>
						Your browser does not support the video tag.
					</video>
				</div>

				<div className='relative z-10'>
					{/* <div className='mb-5'>
						<span className='title-badge btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60'>
							<span className='bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent'>
								{badgeText}
							</span>
						</span>
					</div> */}
					<h4 className='text-xl md:text-2xl mb-2 text-white'>{title}</h4>
					<p className='text-indigo-200/70 md:text-lg'>{description}</p>
				</div>
			</div>
		</div>
	);
}

export default function WhyMinastik() {
	const cardsData = [
		{
			badgeText: 'AI-powered Support',
			title: '24/7 Dedicated Support',
			description:
				'No matter the time of day, Minastik AI agents are always available to tackle your inquiries and provide swift solutions to ensure your operations run smoothly.',
			imageSrc: DedicatedSupport,
			videoSrc: 'videos//ai-chatbot-support.mp4',
			colSpan: 'md:col-span-3',
			hasBeam: true,
		},
		{
			badgeText: 'Safe & Secure',
			title: 'Secure & Reliable',
			description:
				'Protect your data and operations with our state-of-the-art security measures, giving you peace of mind as you focus on growing your business.',
			imageSrc: SecureAndReliable,
			videoSrc: 'videos//secure-reliable.mp4',
			colSpan: 'md:col-span-3',
			hasBeam: true,
		},
		{
			badgeText: 'Smart System',
			title: 'Scalable for Growth',
			description:
				'Our solutions grow with your business, allowing you to seamlessly expand without disruptions.',
			imageSrc: Scalable,
			videoSrc: 'videos//built-for-growth.mp4',
			colSpan: 'md:col-span-2',
			hasBeam: false,
		},
		{
			badgeText: 'Agile & Scrum',
			title: 'Flexible Workflows',
			description:
				'With AGILE as the backbone, we adapt quickly to changes without compromising quality.',
			imageSrc: FlexibleWorkflow,
			videoSrc: 'videos//flexible-workflow.mp4',
			colSpan: 'md:col-span-2',
			hasBeam: false,
		},
		{
			badgeText: 'High-performance Solutions',
			title: 'Cost Efficient',
			description:
				'Simplify complex processes with intelligent tools designed to save time and improve productivity.',
			imageSrc: CostEfficient,
			videoSrc: 'videos//cost-efficient.mp4',
			colSpan: 'md:col-span-2',
			hasBeam: false,
		},
	];

	return (
		<section className='relative'>
			<div className='cool-animation hidden md:block mix-blend-luminosity'>
				<video
					autoPlay
					muted
					loop
				>
					<source
						src='videos//cool-animation.webm'
						type='video/mp4'
					/>
					Your browser does not support the video tag.
				</video>
			</div>
			<div className='mx-auto max-w-7xl px-4 sm:px-6'>
				<div className='py-20 md:pb-[150px] md:pt-60'>
					<Image
						src={SpotlightBackground}
						alt='spotlight-ray'
						className='absolute h-full w-full top-0 left-0 object-contain'
					/>
					<div className='mx-auto max-w-4xl pb-4 text-center md:pb-12'>
						<div className='inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50'>
							<span className='inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent'>
								Why choose Minastik
							</span>
						</div>
						<h2 className='animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-5xl'>
							Your satisfaction is our top priority
						</h2>
						<p className='text-lg text-indigo-200/65 max-w-2xl mx-auto'>
							We are dedicated to excellence in every product we create,
							striving to deliver an exceptional experience for our customers.
						</p>
					</div>
					<Spotlight className='group mx-auto grid grid-rows-[auto_auto_auto] gap-6 md:grid-cols-6 md:gap-8'>
						{cardsData.map((card, index) => (
							<Card
								key={index}
								{...card}
							/>
						))}
					</Spotlight>
				</div>
			</div>
		</section>
	);
}
