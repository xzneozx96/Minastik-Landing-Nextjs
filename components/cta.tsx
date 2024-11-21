import { BorderBeam } from './ui/border-beam';
import SplineCuteRobot from './ui/spline-cute-robot';

export default function Cta() {
	return (
		<section className='relative overflow-hidden  spotlight-background'>
			<div className='mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8'>
				<div className='relative isolate overflow-hidden px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-10 lg:px-24 lg:pt-0 rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-sm transition-opacity before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]'>
					<BorderBeam />

					<div className='mx-auto max-w-lg text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left'>
						<h2 className='text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl'>
							Discover the Future of AI Today!
						</h2>
						<p className='mt-6 text-pretty text-lg/8 text-gray-300'>
							Chat with Alise - our AI agents to experience intelligent
							solutions in action. Ask anything about our business and see how
							we can transform yours.
						</p>
						<div className='mt-10 flex items-center justify-center gap-x-6 lg:justify-start'>
							<div
								data-aos='fade-up'
								data-aos-delay={400}
							>
								<a
									className='btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto'
									href='#0'
								>
									<span className='relative inline-flex items-center'>
										Talk with Alise
										{/* <span className='ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5'>
											-&gt;
										</span> */}
									</span>
								</a>
							</div>
							<div
								data-aos='fade-up'
								data-aos-delay={600}
							>
								<a
									className='btn relative w-full bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:w-auto'
									href='#0'
								>
									Schedule Demo
								</a>
							</div>
						</div>
					</div>
					<div className='relative mt-16 h-80 lg:mt-8'>
						<img
							className='absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10 z-[-1]'
							src='/images/AI-calendar.avif'
							alt='App screenshot'
							width='1824'
							height='1080'
						/>
					</div>
				</div>
			</div>
			{/* <SplineCuteRobot /> */}
		</section>
	);
}
