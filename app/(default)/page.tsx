export const metadata = {
	title: 'Home - Minastik',
	description: 'Page description',
};

import PageIllustration from '@/components/page-illustration';
import Hero from '@/components/hero-home';
import MinastikFeatures from '@/components/minastik-features';
import Testimonials from '@/components/testimonials';
import Cta from '@/components/cta';
import Features from '@/components/features';

export default function Home() {
	return (
		<>
			{/* <PageIllustration /> */}
			<Hero />
			<MinastikFeatures />
			<Features />
			<Testimonials />
			<Cta />
		</>
	);
}
