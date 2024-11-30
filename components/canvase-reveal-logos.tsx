'use client';
import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { CanvasRevealEffect } from '@/components/ui/canvas-reveal-effect';
import Image from 'next/image';

export function CanvasRevealEffectLogos() {
	const logos = [
		{ name: 'NIC', logo: '/images/partner-logo/NIC.png' },
		{ name: 'SHS', logo: '/images/partner-logo/SHS.png' },
		{ name: 'WAP', logo: '/images/partner-logo/WapLogo.png' },
		{ name: 'GPay', logo: '/images/partner-logo/Gpay.png' },
		{
			name: 'Kết nối năng động Việt',
			logo: '/images/partner-logo/Kết-nối-năng-động-việt.png',
		},
		{ name: 'Eschool', logo: '/images/partner-logo/eschool.png' },
		{
			name: 'Trường Ngôi Sao Hà Nội',
			logo: '/images/partner-logo/Trường ngôi sao HN.png',
		},
		{ name: 'Tuệ Đức', logo: '/images/partner-logo/TueDuc.png' },
		{ name: 'DHA', logo: '/images/partner-logo/DHA.png' },
		{ name: 'Cenland', logo: '/images/partner-logo/logo-cenland.png' },
		{ name: 'Laoscitec', logo: '/images/partner-logo/Laoscitec.png' },
		{ name: 'Great Pharmed', logo: '/images/partner-logo/Great-Pharmed.png' },
		{ name: 'Tima', logo: '/images/partner-logo/Tima.png' },
		{ name: 'JoyTube', logo: '/images/partner-logo/JoyTube.png' },
		{ name: 'Elmich', logo: '/images/partner-logo/Elmich.png' },
		{ name: 'Siemens', logo: '/images/partner-logo/Siemens.png' },
		{ name: 'Sisu', logo: '/images/partner-logo/Sisu.png' },
		{ name: 'Avaiga', logo: '/images/partner-logo/Avaiga.png' },
		{ name: 'EVN Hà Nội', logo: '/images/partner-logo/evnhn.png' },
		{ name: 'IMIP', logo: '/images/partner-logo/IMIP.png' },
		{ name: 'Ivy Moda', logo: '/images/partner-logo/Ivymoda.png' },
		{ name: '3SI', logo: '/images/partner-logo/3S.png' },
		{ name: 'MK Smart', logo: '/images/partner-logo/MKSmart.png' },
		{ name: 'GMO', logo: '/images/partner-logo/Logo-GMO.png' },
		{ name: 'VCCI', logo: '/images/partner-logo/VCCI.png' },
		{ name: 'Thiện Giác Chay', logo: '/images/partner-logo/Thiengiacchay.png' },
		{ name: 'Vinadrip', logo: '/images/partner-logo/Vinadrip (USA).png' },
		{ name: 'Petit Souris', logo: '/images/partner-logo/PetitSouris.png' },
	];

	const quarterLength = logos.length / 4;

	const rows = [
		logos.slice(0, quarterLength),
		logos.slice(quarterLength, quarterLength * 2),
		logos.slice(quarterLength * 2, quarterLength * 3),
		logos.slice(quarterLength * 3),
	];

	return (
		<>
			<div className='grid grid-cols-2 gap-8 sm:grid-cols-4'>
				{rows.flat().map((logo, index) => (
					<Card logo={logo}>
						<CanvasRevealEffect
							animationSpeed={3}
							containerClassName='bg-black'
							colors={[[59, 130, 246]]}
							dotSize={3}
						/>
						{/* Radial gradient for the cute fade */}
						<div className='absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-[#0B0C14]/50 dark:bg-[#0B0C14]/90' />
					</Card>
				))}
			</div>
		</>
	);
}

const Card = ({
	logo,
	children,
}: {
	logo: { name: string; logo: string };
	children?: React.ReactNode;
}) => {
	const [hovered, setHovered] = React.useState(false);
	return (
		<div
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			className='group/canvas-card flex items-center justify-center max-w-sm w-full mx-auto relative rounded-lg p-6 h-[200px]'
			style={{
				background: 'hsla(0,0%,100%,.03)',
			}}
		>
			<AnimatePresence>
				{hovered && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className='h-full w-full absolute inset-0 rounded-lg'
					>
						{children}
					</motion.div>
				)}
			</AnimatePresence>

			<div className='relative z-20 text-center h-full'>
				<div className='group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full h-full mx-auto flex items-center justify-center'>
					{/* {icon} */}
					<Image
						src={logo.logo}
						alt={logo.name}
						width={100}
						height={60}
						className='relative h-[150px] w-[120px] object-contain mix-blend-normal'
						style={{
							filter: 'contrast(0%) brightness(2)',
						}}
					/>
				</div>
				<h2 className='dark:text-white text-lg opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-20 transition duration-200'>
					{logo.name}
				</h2>
			</div>
		</div>
	);
};

const AceternityIcon = () => {
	return (
		<svg
			width='66'
			height='65'
			viewBox='0 0 66 65'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className='h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white '
		>
			<path
				d='M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696'
				stroke='currentColor'
				strokeWidth='15'
				strokeMiterlimit='3.86874'
				strokeLinecap='round'
				style={{ mixBlendMode: 'darken' }}
			/>
		</svg>
	);
};

export const Icon = ({ className, ...rest }: any) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth='1.5'
			stroke='currentColor'
			className={className}
			{...rest}
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M12 6v12m6-6H6'
			/>
		</svg>
	);
};
