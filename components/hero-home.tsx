import { AnimatedShinyTextWithBorder } from './ui/animated-shiny-text';
import { BlurFade } from './ui/blur-fade';
import { SparklesCore } from './ui/sparkles';
import SplineRobot from './ui/spline-3D-robot';

export default function HeroHomeV1() {
	return (
		<section>
			<div className='relative h-screen'>
				{/* Hero content */}
				{/* <div> */}
				<div className='mx-auto md:w-[1200px] w-full px-4 sm:px-6 text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-35%] pointer-events-none select-none'>
					{/* <AnimatedRainbowTextWithBorder /> */}
					<BlurFade
						inView
						delay={3.75}
						duration={0.5}
					>
						<AnimatedShinyTextWithBorder text='✨ Grow with Minastik' />
					</BlurFade>

					<BlurFade
						delay={4}
						duration={1}
						inView
					>
						<h1 className='animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.blue.200),theme(colors.gray.50),theme(colors.blue.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-3 font-nacelle text-4xl font-semibold text-transparent md:text-5xl lg:text-8xl pointer-events-none select-none'>
							Transform your business with the power of AI
						</h1>
					</BlurFade>

					<div className='mx-auto max-w-3xl'>
						<BlurFade
							inView
							delay={4.5}
							duration={0.5}
						>
							<p className='mb-8 text-lg md:text-xl text-blue-200/65'>
								Minastik takes the hassle out of running your business.
								<br />
								Click below to see how we can help you succeed!
							</p>
						</BlurFade>
						<div className='mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center'>
							<BlurFade
								inView
								delay={4.75}
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

				{/* <ModalVideo
						thumb={VideoThumb}
						thumbWidth={1104}
						thumbHeight={576}
						thumbAlt='Modal video thumbnail'
						video='videos//video.mp4'
						videoWidth={1920}
						videoHeight={1080}
					/> */}

				{/* <SplineRobot /> */}
				<video
					autoPlay
					muted
					loop
					playsInline
					className='h-screen w-screen object-cover mix-blend-lighten'
				>
					<source
						src={'videos//robot-48fps.mp4'}
						type='video/mp4'
					/>
					Your browser does not support the video tag.
				</video>

				<div className='absolute top-0 bottom-0 pointer-events-none select-none'>
					<SparklesCore
						id='hero-sparkle'
						background='transparent'
						minSize={1}
						maxSize={2}
						speed={1.5}
						particleDensity={10}
						className='w-full h-full'
						particleColor='#32A7FF'
					/>
				</div>

				{/* </div> */}
			</div>
		</section>
	);
}
