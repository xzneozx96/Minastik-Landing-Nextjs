import { cn } from '@/utils/tw-merge';
import { CSSProperties, FC, ReactNode } from 'react';

interface AnimatedShinyTextProps {
	children: ReactNode;
	className?: string;
	shimmerWidth?: number;
}

const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
	children,
	className,
	shimmerWidth = 100,
}) => {
	return (
		<p
			style={
				{
					'--shiny-width': `${shimmerWidth}px`,
				} as CSSProperties
			}
			className={cn(
				'mx-auto max-w-md text-neutral-600/70 dark:text-neutral-400/70',

				// Shine effect
				'animate-shiny-text bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shiny-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]',

				// Shine gradient
				'bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent  dark:via-white/80',

				className
			)}
		>
			{children}
		</p>
	);
};

export function AnimatedShinyTextWithBorder() {
	return (
		<div className='z-10 flex mb-6 items-center justify-center'>
			<div
				className={cn(
					'backdrop-blur-[4px] inline-flex h-9 items-center justify-between rounded-full border border-white/10 text-xs text-white'
				)}
				style={{
					background: `linear-gradient(0deg, rgba(153, 175, 255, 0.04), rgba(153, 175, 255, 0.04)), rgba(255, 255, 255, 0.02)`,
					boxShadow: `inset 0 -6px 12px rgba(255, 255, 255, 0.04)`,
				}}
			>
				<AnimatedShinyText className='inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400'>
					<span>✨ Grow with Minastik</span>
				</AnimatedShinyText>
			</div>
		</div>
	);
}
