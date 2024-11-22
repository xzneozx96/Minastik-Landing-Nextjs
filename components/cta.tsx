import { BorderBeam } from './ui/border-beam';
import SplineCuteRobot from './ui/spline-cute-robot';

export default function Cta() {
	return (
		<section className='relative overflow-hidden'>
			<div className='mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8'>
				<div
					className='relative isolate overflow-hidden px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-10 lg:px-24 lg:pt-0 rounded-2xl'
					data-aos='zoom-in-up'
				>
					<div className='mx-auto max-w-lg text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left z-10'>
						<h2
							className='text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl'
							data-aos='fade-up'
							data-aos-delay={1200}
						>
							Discover the Future of AI Today!
						</h2>
						<p
							className='mt-6 text-pretty text-lg/8 text-gray-300'
							data-aos='fade-up'
							data-aos-delay={1300}
						>
							Chat with Alise - our AI agents to experience intelligent
							solutions in action. Ask anything about our business and see how
							we can transform yours.
						</p>
						<div className='mt-10 flex items-center justify-center gap-x-6 lg:justify-start'>
							<div
								data-aos='fade-up'
								data-aos-delay={1400}
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
								data-aos-delay={1500}
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

					<div className='absolute top-0 left-0 right-0 bottom-0'>
						<video
							src='/videos/glass-animation.mp4'
							autoPlay
							muted
							loop
						></video>
					</div>

					{/* video as hero media */}
					<div className='absolute h-full w-full right-0'>
						<video
							src='/videos/ai-chatbot.mp4'
							autoPlay
							muted
							className='h-full w-full mix-blend-screen'
						></video>
					</div>

					{/* image as hero media */}
					{/* <div className='absolute h-full w-full right-0'>
						<img
							className='absolute right-0 top-0 h-full w-auto backdrop-blur-[10px] rounded-md bg-white/5 ring-1 ring-white/10'
							src='/images/cta-hero-img.png'
							alt='App screenshot'
							width='1824'
							height='1080'
						/>
					</div> */}
				</div>
			</div>
			{/* <SplineCuteRobot /> */}
		</section>
	);
}
