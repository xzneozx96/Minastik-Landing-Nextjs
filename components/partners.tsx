import Image from 'next/image';
import { SparklesCore } from './ui/sparkles';
import { BlurFade } from './ui/blur-fade';
import LogoRippleAnimation from './logo-ripple-animation';

export default function Partners() {
	const logos = [
		{
			name: 'NIC',
			logo: '/images/partner-logo/NIC.png',
		},
		{
			name: 'SHS',
			logo: '/images/partner-logo/SHS.png',
		},
		{
			name: 'WAP',
			logo: '/images/partner-logo/WapLogo.png',
		},
		{
			name: 'GPay',
			logo: '/images/partner-logo/Gpay.png',
		},
		{
			name: 'Kết nối năng động Việt',
			logo: '/images/partner-logo/Kết-nối-năng-động-việt.png',
		},
		{
			name: 'Eschool',
			logo: '/images/partner-logo/eschool.png',
		},
		{
			name: 'Trường Ngôi Sao Hà Nội',
			logo: '/images/partner-logo/Trường ngôi sao HN.png',
		},
		{
			name: 'Tuệ Đức',
			logo: '/images/partner-logo/TueDuc.png',
		},
		{
			name: 'DHA',
			logo: '/images/partner-logo/DHA.png',
		},
		{
			name: 'Cenland',
			logo: '/images/partner-logo/logo-cenland.png',
		},
		{
			name: 'Laoscitec',
			logo: '/images/partner-logo/Laoscitec.jpg',
		},
		{
			name: 'GMO',
			logo: '/images/partner-logo/Logo-GMO.jpg',
		},
		{
			name: 'Tima',
			logo: '/images/partner-logo/Tima.png',
		},
		{
			name: 'JoyTube',
			logo: '/images/partner-logo/JoyTube.png',
		},
		{
			name: 'Elmich',
			logo: '/images/partner-logo/Elmich.png',
		},
		{
			name: 'Siemens',
			logo: '/images/partner-logo/Siemens.png',
		},
		{
			name: 'Sisu',
			logo: '/images/partner-logo/Sisu.png',
		},
		{
			name: 'Avaiga',
			logo: '/images/partner-logo/Avaiga.png',
		},
		{
			name: 'EVN Hà Nội',
			logo: '/images/partner-logo/evnhn.png',
		},
		{
			name: 'IMIP',
			logo: '/images/partner-logo/IMIP.png',
		},
		{
			name: 'Ivy Moda',
			logo: '/images/partner-logo/Ivymoda.png',
		},
		{
			name: '3SI',
			logo: '/images/partner-logo/3S.png',
		},
		{
			name: 'MK Smart',
			logo: '/images/partner-logo/MKSmart.png',
		},
		{
			name: 'Mama Sữa non',
			logo: '/images/partner-logo/TNHH-MamaSuanon.png',
		},
		{
			name: 'VCCI',
			logo: '/images/partner-logo/VCCI.webp',
		},
		{
			name: 'Thiện Giác Chay',
			logo: '/images/partner-logo/Thiengiacchay.png',
		},
		{
			name: 'Vinadrip',
			logo: '/images/partner-logo/Vinadrip (USA).png',
		},
		{
			name: 'Petit Souris',
			logo: '/images/partner-logo/petitsouris.png',
		},
	];

	return (
		<section className='relative'>
			<LogoRippleAnimation />

			<div className='pb-20 pt-80'>
				<div className='relative mx-auto max-w-6xl px-4 sm:px-6'>
					{/* heading */}
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

					{/* particles */}
					{/* <div className='absolute top-0 bottom-0 z-[-1] w-full pointer-events-none select-none'>
						<SparklesCore
							id='partners-sparkle'
							background='transparent'
							minSize={0.6}
							maxSize={2}
							speed={1.5}
							particleDensity={20}
							className='w-full h-full'
							particleColor='#32A7FF'
						/>
					</div> */}
				</div>

				<div className='relative mx-auto max-w-6xl px-4 sm:px-6 py-20'>
					{/* logos */}
					<div className='grid grid-cols-2 gap-8 sm:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]'>
						{logos.map((logo, index) => (
							<BlurFade
								key={index}
								delay={0.1 + index * 0.05}
								inView
							>
								<div
									className='relative flex justify-center items-center bg-white rounded-lg p-6'
									key={index}
								>
									<Image
										src={logo.logo}
										alt={logo.name}
										width={150}
										height={150}
										className='relative h-[100px] w-[150px] object-contain mix-blend-normal'
										// style={{ filter: 'grayscale(1)' }}
									/>
								</div>
							</BlurFade>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}