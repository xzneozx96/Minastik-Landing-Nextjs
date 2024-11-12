import VideoThumb from '@/public/images/hero-image-01.jpg';
import ModalVideo from '@/components/modal-video';
import { AnimatedRainbowTextWithBorder } from './ui/animated-rainbow-text';
import Spline from '@splinetool/react-spline';
import SplineRobot from './ui/spline-3D-robot';
import { SparklesCore } from './ui/sparkles';
import { AnimatedShinyTextWithBorder } from './ui/animated-shiny-text';
import { BorderBeam } from './ui/border-beam';

export default function HeroHome() {
	return (
		<section>
			<div className='relative h-screen'>
				{/* Hero content */}
				{/* <div> */}
				<div className='spotlight-background w-[1200px] px-4 sm:px-6 text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-35%] pointer-events-none select-none'>
					{/* <AnimatedRainbowTextWithBorder /> */}
					<AnimatedShinyTextWithBorder />
					<h1 className='animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.blue.200),theme(colors.gray.50),theme(colors.blue.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl lg:text-8xl pointer-events-none select-none'>
						Transform your business
						<br />
						with the power of AI
					</h1>
					<div className='mx-auto max-w-3xl'>
						<p className='mb-8 text-xl text-blue-200/65'>
							Minastik takes the hassle out of running your business.
							<br />
							Click below to see how we can help you succeed!
						</p>
						<div className='mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center'>
							<div>
								<a
									className='btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-400 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto pointer-events-auto'
									href='#0'
								>
									<span className='relative inline-flex items-center'>
										Explore Now
										<span className='ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5'>
											-&gt;
										</span>
									</span>
								</a>
							</div>
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

				<SplineRobot />

				<div className='absolute top-0 bottom-0 z-[-1] pointer-events-none select-none'>
					<SparklesCore
						id='hero-sparkle'
						background='transparent'
						minSize={0.6}
						maxSize={1.4}
						particleDensity={10}
						className='w-full h-full'
						particleColor='#60a5fa'
					/>
				</div>

				{/* </div> */}
			</div>
		</section>
	);
}
