import { CanvasRevealEffectLogos } from './canvase-reveal-logos';
import LogoRippleAnimation from './logo-ripple-animation';

export default function Partners() {
	return (
		<section className='relative'>
			<LogoRippleAnimation />

			<div className='pb-20 pt-80'>
				<div className='relative mx-auto max-w-6xl px-4 sm:px-6'>
					<div className='text-center relative mx-auto max-w-3xl'>
						<div className='inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50'>
							<span className='inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent'>
								Minastik Partners
							</span>
						</div>

						<h2 className='animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-5xl'>
							Trusted by Big Companies
						</h2>

						<p className='text-lg text-indigo-200/70'>
							We proudly collaborate with industry-leading partners who trust us
							to deliver innovative solutions and drive mutual success
						</p>
					</div>
				</div>

				<div className='relative mx-auto max-w-6xl px-4 sm:px-6 py-20'>
					<CanvasRevealEffectLogos />
				</div>
			</div>
		</section>
	);
}
