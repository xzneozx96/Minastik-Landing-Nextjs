'use client';
import { ReactLenis } from '@studio-freight/react-lenis';

function SmoothScrolling({ children }: { children: React.ReactNode }) {
	return (
		<ReactLenis
			root
			options={{ lerp: 0.05, duration: 5 }}
		>
			{children}
		</ReactLenis>
	);
}

export default SmoothScrolling;
