export const metadata = {
	title: 'Home - Minastik',
	description: 'Page description',
};

import Blogs from '@/components/blogs';
import Cta from '@/components/cta';
import Hero from '@/components/hero-home';
import MinastikFeatures from '@/components/minastik-features';
import Partners from '@/components/partners';
import { ProjectsShowcase } from '@/components/projects-showcase';
import Testimonials from '@/components/testimonials';
import WhyMinastik from '@/components/why-minastik';

export default function Home() {
	return (
		<>
			{/* <PageIllustration /> */}
			<Hero />
			<MinastikFeatures />
			<ProjectsShowcase />
			<WhyMinastik />
			<Partners />
			<Testimonials />
			<Blogs />
			<Cta />
		</>
	);
}
