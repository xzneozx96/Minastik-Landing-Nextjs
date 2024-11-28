import { AnimatedShinyTextWithBorder } from './ui/animated-shiny-text';
import { BlurFade } from './ui/blur-fade';
import { SparklesCore } from './ui/sparkles';

export default function HeroHomeV2() {
	return (
		<section className='relative'>
			<div className='bg-homepage-hero px-2 sm:px-5 pt-36 md:pt-40 pb-44 md:pb-52 mx-auto flex flex-col items-center text-center'>
				<BlurFade
					inView
					delay={1}
					duration={0.5}
				>
					<AnimatedShinyTextWithBorder text='✨ Grow with Minastik' />
				</BlurFade>

				<BlurFade
					delay={1.25}
					duration={1}
					inView
				>
					<h1 className='mt-5 mb-3 animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.blue.200),theme(colors.gray.50),theme(colors.blue.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-4xl font-semibold text-transparent md:text-5xl lg:text-7xl pointer-events-none select-none'>
						Empower your business
					</h1>

					<h1 className='animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.blue.200),theme(colors.gray.50),theme(colors.blue.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-3 font-nacelle text-4xl font-semibold text-transparent md:text-5xl lg:text-7xl pointer-events-none select-none'>
						with AI-driven solutions
					</h1>
				</BlurFade>

				<div className='mx-auto max-w-3xl'>
					<BlurFade
						inView
						delay={1.5}
						duration={0.5}
					>
						<p className='mt-4 mb-10 text-lg md:text-xl text-blue-200/65'>
							Minastik takes the hassle out of running your business.
							<br />
							Let's explore how we can help you succeed!
						</p>
					</BlurFade>
					<div className='mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center'>
						<BlurFade
							inView
							delay={1.75}
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

			<video
				autoPlay
				playsInline
				muted
				loop
				className='block mx-auto rounded-3xl'
			>
				<source
					src={'videos//ai-chatbot-dribble.mp4'}
					type='video/mp4'
				/>
				Your browser does not support the video tag.
			</video>
		</section>
	);
}
