import { AnimatedShinyTextWithBorder } from './ui/animated-shiny-text';
import { BlurFade } from './ui/blur-fade';
import { SparklesCore } from './ui/sparkles';

export default function HeroHomeV2() {
	return (
		<section className='relative'>
			<div className='bg-homepage-hero px-2 sm:px-5 pt-36 md:pt-40 pb-20 md:pb-32 mx-auto flex flex-col items-center text-center'>
				<BlurFade
					inView
					duration={0.5}
				>
					<AnimatedShinyTextWithBorder text='✨ Grow with Minastik' />
				</BlurFade>

				<BlurFade
					delay={0.25}
					duration={1}
					inView
					className='md:block hidden'
				>
					<h1 className='mt-5 mb-3 animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.blue.200),theme(colors.gray.50),theme(colors.blue.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-4xl font-semibold text-transparent md:text-5xl lg:text-7xl pointer-events-none select-none'>
						Empower business with
					</h1>

					<h1 className='animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.blue.200),theme(colors.gray.50),theme(colors.blue.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-3 font-nacelle text-4xl font-semibold text-transparent md:text-5xl lg:text-7xl pointer-events-none select-none'>
						AI-powered solutions
					</h1>
				</BlurFade>

				<BlurFade
					delay={0.25}
					duration={1}
					inView
					className='md:hidden block'
				>
					<h1 className='mt-5 animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.blue.200),theme(colors.gray.50),theme(colors.blue.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-4xl font-semibold text-transparent md:text-5xl lg:text-7xl pointer-events-none select-none'>
						Empower business with AI solutions
					</h1>
				</BlurFade>

				<div className='mx-auto max-w-3xl'>
					<BlurFade
						inView
						delay={0.5}
						duration={0.5}
					>
						<p className='mt-4 mb-10 md:text-xl text-blue-200/65'>
							Minastik takes the hassle out of running your business.
							<br />
							Let's explore how we can help you succeed!
						</p>
					</BlurFade>
					<div className='mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center'>
						<BlurFade
							inView
							delay={0.75}
							duration={0.5}
						>
							<a
								className='btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-400 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto pointer-events-auto'
								href='#0'
							>
								<span className='relative inline-flex items-center'>
									Explore Now
									{/* <span className='ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5'>
											-&gt;
										</span> */}
								</span>
							</a>
						</BlurFade>
					</div>
				</div>
			</div>

			<div
				className='glass-container mx-6 md:mx-auto w-fit max-w-6xl'
				data-aos='zoom-in-up'
				data-aos-delay={1500}
				data-aos-duration={1000}
			>
				{/* <div className='absolute -inset-3 bg-blue-500/40 blur-2xl filter'></div> */}
				<div className='absolute top-1/2 left-1/2 gradient-blur w-[85%] -translate-x-1/2 h-[85%] -translate-y-1/2 inset-0 blur-[10rem]'></div>
				<video
					autoPlay
					playsInline
					muted
					loop
					className='rounded-lg lg:rounded-lg z-10 relative'
				>
					<source
						src={'videos//ai-chatbot-dribble.mp4'}
						type='video/mp4'
					/>
					Your browser does not support the video tag.
				</video>
			</div>
		</section>
	);
}
