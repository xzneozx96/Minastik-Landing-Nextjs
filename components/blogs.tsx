import Image from 'next/image';
import TestimonialImg01 from '@/public/images/testimonial-01.jpg';
import { AnimatedShinyTextWithBorder } from './ui/animated-shiny-text';
import { AnimatedRainbowTextWithBorder } from './ui/animated-rainbow-text';
import { SparklesCore } from './ui/sparkles';

export default function Blogs() {
	return (
		<section className='relative'>
			<div className='pb-16 spotlight-background'>
				<div className='relative mx-auto max-w-6xl px-4 sm:px-6 pt-[150px]'>
					<div className='text-center relative mb-10 mx-auto max-w-3xl'>
						<div className='inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50'>
							<span className='inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent'>
								AI-powered Blogs
							</span>
						</div>

						<h2 className='animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-5xl'>
							Technology News
						</h2>

						<p className='text-lg text-indigo-200/70'>
							Discover the power of AI-driven insights with our blog, where
							every post is crafted by advanced AI to bring you the latest in
							technology world
						</p>

						<div className='absolute top-0 bottom-0 z-[-1] w-full pointer-events-none select-none'>
							<SparklesCore
								id='blog-sparkle'
								background='transparent'
								minSize={0.6}
								maxSize={2}
								speed={1.5}
								particleDensity={20}
								className='w-full h-full'
								particleColor='#32A7FF'
							/>
						</div>
					</div>
				</div>

				<div className='max-w-7xl mx-auto'>
					<div className='flex flex-wrap justify-between gap-4 pt-5 mb-10 md:mb-16 md:gap-8 md:flex-nowrap md:pt-0'>
						<div className='w-full space-y-2 md:space-y-4 md:w-1/2'>
							<a
								href='/blog/looksmaxxing-blake-anderson/'
								className='block'
							>
								<Image
									src='https://minastik.com/wp-content/uploads/2023/12/BAT-MI-CACH-TOI-UU-HOA-HINH-ANH-GIUP-WEBSITE-VAN-HANH-MUOT-MA-HON.png'
									width={1200}
									height={400}
									alt='Featured Blog Image'
									className='w-full h-[400px] object-cover'
								/>
							</a>
							<div className='pt-2 text-sm font-semibold md:pt-3 text-w-blue'>
								<span className='btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60'>
									<span className='bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent'>
										Frontend Frameworks
									</span>
								</span>
							</div>
							<h2 className='text-2xl font-bold md:text-3xl text-w-block'>
								<a href='/blog/looksmaxxing-blake-anderson/'>
									Meet Blake: here’s how he turned looksmaxxing into $10M with
									ChatGPT
								</a>
							</h2>
							<p className='text-base md:text-[17px] text-indigo-200/70 leading-[28px] line-clamp-3 md:line-clamp-none'>
								Building apps with AI and no coding knowledge made Blake
								Anderson millions of dollars. Read his story and learn how you
								could do this too.
							</p>
							<div className='flex items-center gap-3 mt-5'>
								<Image
									className='inline-flex shrink-0 rounded-full'
									src={TestimonialImg01}
									width={36}
									height={36}
									alt='Post 3'
								/>

								<div className='text-sm flex flex-col font-medium text-gray-200'>
									<span>Admin</span>
									<a
										className='text-indigo-200/70 transition-colors hover:text-indigo-500'
										href='#0'
									>
										01/11/2024
									</a>
								</div>
							</div>
						</div>

						<div className='w-full space-y-6 md:w-1/2'>
							<div className='flex post-card md:items-center md:gap-6'>
								<a
									href='/blog/make-money-with-your-phone/'
									className='mr-3 md:mr-0 shrink-0'
								>
									<Image
										className='inline-flex relative z-10 h-[140px] object-cover'
										src='https://minastik.com/wp-content/uploads/2024/09/Responsive-Design-5.png'
										width={250}
										height={288}
										alt='Workflow 01'
									/>
								</a>
								<div className=''>
									<div className='hidden mb-2 text-sm font-semibold md:block text-w-blue'>
										<span className='btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60'>
											<span className='bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent'>
												Finance
											</span>
										</span>
									</div>

									<h3 className='mb-2'>
										<a
											href='/blog/make-money-with-your-phone/'
											className='text-base font-medium leading-tight line-clamp-3 md:line-clamp-none md:text-lg hover:underline hover:underline-offset-1'
										>
											How to make money with your phone: 25 passive and active
											income ideas
										</a>
									</h3>

									<div className='flex text-sm text-indigo-200/70'>
										<div>
											by <a>Alexios Georgakopoulos</a>
										</div>
										<span className='px-2 text-gray-300 dark:text-[#555555]'>
											•
										</span>
										<time dateTime='2024-11-13'>13/11/2024</time>
									</div>
								</div>
							</div>
							<div className='flex post-card md:items-center md:gap-6'>
								<a
									href='/blog/dropshipping-vs-ecommerce/'
									className='mr-3 md:mr-0 shrink-0'
								>
									<Image
										className='inline-flex relative z-10 h-[140px] object-cover'
										src='https://minastik.com/wp-content/uploads/2023/12/BAT-MI-SU-KHAC-BIET-GIUA-WEBSITE-DONG-VA-TINH-NEN-LUA-CHON-LOAI-HINH-NAO.png'
										width={250}
										height={288}
										alt='Workflow 01'
									/>
								</a>
								<div className=''>
									<div className='hidden mb-2 text-sm font-semibold md:block text-w-blue'>
										<span className='btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60'>
											<span className='bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent'>
												Frontend Frameworks
											</span>
										</span>
									</div>

									<h3 className='mb-2'>
										<a
											href='/blog/dropshipping-vs-ecommerce/'
											className='text-base font-medium leading-tight line-clamp-3 md:line-clamp-none md:text-lg hover:underline hover:underline-offset-1'
										>
											Dropshipping vs ecommerce: what's the difference?
										</a>
									</h3>

									<div className='flex text-sm text-indigo-200/70'>
										<div>
											by <a>Nicole Braganza</a>
										</div>
										<span className='px-2 text-gray-300 dark:text-[#555555]'>
											•
										</span>
										<time dateTime='2024-11-13'>13/11/2024</time>
									</div>
								</div>
							</div>
							<div className='flex post-card md:items-center md:gap-6'>
								<a
									href='/blog/round-robin-bet/'
									className='mr-3 md:mr-0 shrink-0'
								>
									<Image
										className='inline-flex relative z-10 h-[140px] object-cover'
										src='https://minastik.com/wp-content/uploads/2024/07/Su-co-Man-hinh-xanh-1.png'
										width={250}
										height={288}
										alt='Workflow 01'
									/>
								</a>
								<div className=''>
									<div className='hidden mb-2 text-sm font-semibold md:block text-w-blue'>
										<span className='btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60'>
											<span className='bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent'>
												Artificial Intelligence
											</span>
										</span>
									</div>

									<h3 className='mb-2'>
										<a
											href='/blog/round-robin-bet/'
											className='text-base font-medium leading-tight line-clamp-3 md:line-clamp-none md:text-lg hover:underline hover:underline-offset-1'
										>
											What is a round robin bet? Here’s what sports fans need to
											know
										</a>
									</h3>

									<div className='flex text-sm text-indigo-200/70'>
										<div>
											by <a>Frank Monkhouse</a>
										</div>
										<span className='px-2 text-gray-300 dark:text-[#555555]'>
											•
										</span>
										<time dateTime='2024-11-13'>13/11/2024</time>
									</div>
								</div>
							</div>
							<div className='flex post-card md:items-center md:gap-6'>
								<a
									href='/blog/community-website-platforms/'
									className='mr-3 md:mr-0 shrink-0'
								>
									<Image
										className='inline-flex relative z-10 h-[140px] object-cover'
										src='https://minastik.com/wp-content/uploads/2023/12/BAT-MI-SU-KHAC-BIET-GIUA-WEBSITE-DONG-VA-TINH-NEN-LUA-CHON-LOAI-HINH-NAO.png'
										width={250}
										height={288}
										alt='Workflow 01'
									/>
								</a>
								<div className=''>
									<div className='hidden mb-2 text-sm font-semibold md:block text-w-blue'>
										<span className='btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60'>
											<span className='bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent'>
												UI/UX Design
											</span>
										</span>
									</div>

									<h3 className='mb-2'>
										<a
											href='/blog/community-website-platforms/'
											className='text-base font-medium leading-tight line-clamp-3 md:line-clamp-none md:text-lg hover:underline hover:underline-offset-1'
										>
											Community website platforms: 15 examples to grow and
											monetize your brand in 2025
										</a>
									</h3>

									<div className='flex text-sm text-indigo-200/70'>
										<div>
											by <a>Rob Truslove</a>
										</div>
										<span className='px-2 text-gray-300 dark:text-[#555555]'>
											•
										</span>
										<time dateTime='2024-11-13'>13/11/2024</time>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
