import { WhyMinastikAnimation } from './why-minastik-animation';
import Spotlight from './spotlight';
import Image from 'next/image';

export default function WhyMinastik() {
	return (
		<section className='relative'>
			<div className='cool-animation'>
				<video
					autoPlay
					muted
					loop
				>
					<source
						src={'videos//cool-animation.webm'}
						type='video/mp4'
					/>
					Your browser does not support the video tag.
				</video>
			</div>

			<div className='mx-auto max-w-7xl px-4 sm:px-6'>
				<div className='py-12 md:pb-[150px] pt-60'>
					{/* Section header */}
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

					{/* Spotlight items */}
					<Spotlight className='group mx-auto grid grid-rows-[auto_auto_auto] gap-6 md:grid-cols-6 md:gap-8 spotlight-background'>
						{/* Card 1 */}
						<a
							className='group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100 grid grid-rows-subgrid md:col-span-3'
							href='#0'
						>
							<div className='relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50 flex flex-col'>
								{/* Content */}
								<div className='p-6 relative z-10'>
									<div className='mb-5'>
										<span className='btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60'>
											<span className='bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent'>
												AI-powered Support
											</span>
										</span>
									</div>

									<h4 className='text-2xl mb-2 bg-gradient-to-r from-[#d8ecf8] to-[#98c0ef] bg-clip-text'>
										24/7 Dedicated Support
									</h4>
									<p className='text-indigo-200/70'>
										No matter the time of day, Minastik AI agents are always
										available to tackle your inquiries and provide swift
										solutions to ensure your operations run smoothly.
									</p>
								</div>

								{/* Image */}
								<div className='p-6 flex-1 flex justify-center items-center'>
									<Image
										className='d-block mx-auto object-cover w-full'
										src='/images/why-minastik/24h-support.webp'
										width={460}
										height={340}
										alt='Workflow 03'
									/>
								</div>
							</div>
						</a>

						{/* Card 2 */}
						<a
							className='group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100 grid grid-rows-subgrid md:col-span-3'
							href='#0'
						>
							<div className='relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50 flex flex-col'>
								{/* Content */}
								<div className='p-6 relative z-10'>
									<div className='mb-5'>
										<span className='btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60'>
											<span className='bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent'>
												Safe & Secure
											</span>
										</span>
									</div>

									<h4 className='text-2xl mb-2 bg-gradient-to-r from-[#d8ecf8] to-[#98c0ef] bg-clip-text'>
										Secure & Reliable
									</h4>

									<p className='text-indigo-200/70'>
										Protect your data and operations with our state-of-the-art
										security measures, giving you peace of mind as you focus on
										growing your business.
									</p>
								</div>

								{/* Image */}
								<div className='p-6 flex-1 flex justify-center items-center'>
									<Image
										className='d-block mx-auto object-cover'
										src='/images/why-minastik/secure-reliable-2.webp'
										width={460}
										height={340}
										alt='Workflow 03'
									/>
								</div>
							</div>
						</a>

						{/* Card 3 */}
						<a
							className='group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100 grid grid-rows-subgrid md:col-span-2'
							href='#0'
						>
							<div className='relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50 flex flex-col'>
								{/* Content */}
								<div className='p-6 relative z-10'>
									<div className='mb-5'>
										<span className='btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60'>
											<span className='bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent'>
												Smart System
											</span>
										</span>
									</div>

									<h4 className='text-2xl mb-2 bg-gradient-to-r from-[#d8ecf8] to-[#98c0ef] bg-clip-text'>
										Scalable for Growth
									</h4>

									<p className='text-indigo-200/70'>
										Our solutions grow with your business, allowing you to
										seamlessly expand and handle increased demand without
										disruptions.
									</p>
								</div>

								{/* Image */}
								<div className='p-6 flex-1 flex justify-center items-center'>
									<Image
										className='d-block mx-auto object-cover rounded-xl'
										src='/images/why-minastik/scalable.webp'
										width={460}
										height={340}
										alt='Workflow 03'
									/>
								</div>
							</div>
						</a>

						{/* Card 4 */}
						<a
							className='group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100 grid grid-rows-subgrid md:col-span-2'
							href='#0'
						>
							<div className='relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50 flex flex-col'>
								{/* Content */}
								<div className='p-6 relative z-10'>
									<div className='mb-5'>
										<span className='btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60'>
											<span className='bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent'>
												Agile & Scrum
											</span>
										</span>
									</div>

									<h4 className='text-2xl mb-2 bg-gradient-to-r from-[#d8ecf8] to-[#98c0ef] bg-clip-text'>
										Flexible Workflows
									</h4>

									<p className='text-indigo-200/70'>
										With AGILE as the backbone of our approach, we adapt quickly
										to sudden changes, ensuring your evolving needs are met
										without compromising quality.
									</p>
								</div>

								{/* Image */}
								<div className='p-6 flex-1 flex justify-center items-center'>
									<Image
										className='d-block mx-auto object-cover rounded-xl'
										src='/images/why-minastik/flexible.webp'
										width={460}
										height={340}
										alt='Workflow 03'
									/>
								</div>
							</div>
						</a>

						{/* Card 4 */}
						<a
							className='group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100 grid grid-rows-subgrid md:col-span-2'
							href='#0'
						>
							<div className='relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50 flex flex-col'>
								{/* Content */}
								<div className='p-6 relative z-10'>
									<div className='mb-5'>
										<span className='btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60'>
											<span className='bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent'>
												High-performance Solutions
											</span>
										</span>
									</div>

									<h4 className='text-2xl mb-2 bg-gradient-to-r from-[#d8ecf8] to-[#98c0ef] bg-clip-text'>
										Cost-Efficient Strategies
									</h4>

									<p className='text-indigo-200/70'>
										Simplify complex processes with intelligent tools designed
										to save time, reduce effort, and improve productivity.
									</p>
								</div>

								{/* Image */}
								<div className='p-6 flex-1 flex justify-center items-center'>
									<Image
										className='d-block mx-auto object-contain'
										src='/images/why-minastik/cost-efficient.webp'
										width={460}
										height={340}
										alt='Workflow 03'
									/>
								</div>
							</div>
						</a>
					</Spotlight>
				</div>
			</div>
		</section>
	);
}
