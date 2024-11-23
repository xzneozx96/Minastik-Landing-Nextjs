import Spotlight from '@/components/spotlight';
import Image from 'next/image';
import { BorderBeam } from './ui/border-beam';

export default function MinastikFeatures() {
	return (
		<section>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 pt-[150px] spotlight-background'>
				<div className='pb-12 md:pb-20 relative'>
					<Image
						src='/images/spotlight-background.png'
						width={1440}
						height={1908}
						alt='spotlight-ray'
						className='absolute h-full w-full top-0 left-0 object-cover'
					/>

					{/* Section header */}
					<div className='mx-auto max-w-3xl pb-12 text-center md:pb-20'>
						<div className='inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50'>
							<span className='inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent'>
								Minastik Services
							</span>
						</div>
						<h2 className='animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-5xl'>
							Streamline your business <br /> with AI-powered solutions
						</h2>
						<p className='text-lg text-indigo-200/70'>
							Simple and elegant interface to start collaborating with your team
							in minutes. It seamlessly integrates with your code and your
							favorite programming languages.
						</p>
					</div>

					{/* Spotlight items */}
					<Spotlight className='group mx-auto grid grid-rows-[auto_auto_auto] gap-6 md:grid-cols-5 md:gap-8'>
						{/* Card 1 */}
						<a
							className='group/card relative h-full overflow-hidden rounded-2xl p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/20 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100 grid grid-rows-subgrid md:col-span-3'
							href='#0'
						>
							<div className='relative z-20 h-full overflow-hidden rounded-[inherit] after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50 glassy-card'>
								<Image
									src='/images/spotlight-ray.png'
									width={996}
									height={448}
									alt='spotlight-ray'
									className='absolute h-full w-full top-0 left-0 object-cover'
								/>

								<BorderBeam />

								{/* Content */}
								<div className='relative z-10'>
									<div className='mb-5'>
										<span className='btn-sm relative title-badge rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60'>
											<span className='bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent'>
												Management System
											</span>
										</span>
									</div>
									<h4 className='text-xl md:text-3xl mb-2 bg-gradient-to-r from-[#d8ecf8] to-[#98c0ef] bg-clip-text'>
										Tailor-made Management System
									</h4>
									<p className='text-indigo-200/70 md:text-lg'>
										Streamline repetitive tasks, allowing your team to focus on
										high-value work while Minastik manages routine inquiries.
									</p>
								</div>

								<div className='pt-6'>
									<video
										autoPlay
										muted
										loop
										className='mix-blend-plus-lighter rounded-lg'
									>
										<source
											src={'videos//iot-solutions.mp4'}
											type='video/mp4'
										/>
										Your browser does not support the video tag.
									</video>
								</div>
							</div>
						</a>

						{/* Card 2 */}
						<a
							className='group/card relative h-full overflow-hidden rounded-2xl p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/20 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100 grid grid-rows-subgrid md:col-span-2'
							href='#0'
						>
							<div className='relative z-20 h-full overflow-hidden rounded-[inherit] after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50 glassy-card'>
								<Image
									src='/images/spotlight-ray.png'
									width={996}
									height={448}
									alt='spotlight-ray'
									className='absolute h-full w-full top-0 left-0 object-cover'
								/>

								<div className='pb-6'>
									<video
										autoPlay
										muted
										loop
										className='mix-blend-plus-lighter rounded-lg'
									>
										<source
											src={'videos//web-design.mp4'}
											type='video/mp4'
										/>
										Your browser does not support the video tag.
									</video>
								</div>

								{/* Content */}
								<div className='relative z-10'>
									<div className='mb-5'>
										<span className='btn-sm relative title-badge rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60'>
											<span className='bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent'>
												Interactive Design
											</span>
										</span>
									</div>

									<h4 className='text-xl md:text-3xl mb-2 bg-gradient-to-r from-[#d8ecf8] to-[#98c0ef] bg-clip-text'>
										Modern Web Design
									</h4>

									<p className='text-indigo-200/70 md:text-lg'>
										Design and publish modern websites at any scale, fully
										customized on your own with the latest technologies.
									</p>
								</div>
							</div>
						</a>

						{/* Card 3 */}
						<a
							className='group/card relative h-full overflow-hidden rounded-2xl p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/20 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100 grid grid-rows-subgrid md:col-span-2'
							href='#0'
						>
							<div className='relative z-20 h-full overflow-hidden rounded-[inherit] after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50 glassy-card'>
								<Image
									src='/images/spotlight-ray.png'
									width={996}
									height={448}
									alt='spotlight-ray'
									className='absolute h-full w-full top-0 left-0 object-cover'
								/>

								<div className='pb-6 relative'>
									<video
										autoPlay
										muted
										loop
										className='mix-blend-plus-lighter rounded-lg'
									>
										<source
											src={'videos//management-system.mp4'}
											type='video/mp4'
										/>
										Your browser does not support the video tag.
									</video>
								</div>

								{/* Content */}
								<div className='relative z-10'>
									<div className='mb-5'>
										<span className='btn-sm relative title-badge rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60'>
											<span className='bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent'>
												Smart System
											</span>
										</span>
									</div>

									<h4 className='text-xl md:text-3xl mb-2 bg-gradient-to-r from-[#d8ecf8] to-[#98c0ef] bg-clip-text'>
										IoT Solutions
									</h4>

									<p className='text-indigo-200/70 md:text-lg'>
										We provide innovative IoT solutions that connect devices,
										streamline data, and empower smarter decision-making
									</p>
								</div>
							</div>
						</a>

						{/* Card 4 */}
						<a
							className='group/card relative h-full overflow-hidden rounded-2xl p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/20 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100 grid grid-rows-subgrid md:col-span-3'
							href='#0'
						>
							<div className='relative z-20 h-full overflow-hidden rounded-[inherit] after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50 glassy-card'>
								<Image
									src='/images/spotlight-ray.png'
									width={996}
									height={448}
									alt='spotlight-ray'
									className='absolute h-full w-full top-0 left-0 object-cover'
								/>

								<BorderBeam />

								{/* Content */}
								<div className='relative z-10'>
									<div className='mb-5'>
										<span className='btn-sm relative title-badge rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60'>
											<span className='bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent'>
												Artificial Intelligence
											</span>
										</span>
									</div>

									<h4 className='text-xl md:text-3xl mb-2 bg-gradient-to-r from-[#d8ecf8] to-[#98c0ef] bg-clip-text'>
										AI Assistant
									</h4>

									<p className='text-indigo-200/70 md:text-lg'>
										Unlock your full potential with AI-powered solutions that
										automate operations, enhance customer experiences, and drive
										smarter, faster decisions for your business
									</p>
								</div>

								<div className='pt-6'>
									<video
										autoPlay
										muted
										loop
										className='mix-blend-plus-lighter rounded-lg'
										style={{
											height: '340px',
											width: '100%',
											objectFit: 'cover',
											objectPosition: '50% 64%',
										}}
									>
										<source
											src={'videos//ai-assistant.mp4'}
											type='video/mp4'
										/>
										Your browser does not support the video tag.
									</video>
								</div>
							</div>
						</a>
					</Spotlight>
				</div>
			</div>
		</section>
	);
}
