import TestimonialImg01 from '@/public/images/testimonial-01.jpg';
import Image from 'next/image';

export default function Blogs() {
	return (
		<section className='relative'>
			<div className='pb-16'>
				<div className='relative mx-auto max-w-6xl px-4 sm:px-6 py-10 lg:py-20'>
					<div className='text-center mx-auto max-w-3xl'>
						<div className='inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50'>
							<span className='inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent'>
								AI-powered Blogs
							</span>
						</div>

						<h2 className='animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-5xl'>
							Technology News
						</h2>

						<p className='text-base sm:text-lg text-indigo-200/70'>
							Discover the power of AI-driven insights with our blog, where
							every post is crafted by advanced AI to bring you the latest in
							technology.
						</p>
					</div>
				</div>

				<div className='max-w-7xl mx-auto px-4 sm:px-6'>
					<div className='flex flex-wrap gap-6 md:gap-8 md:flex-nowrap'>
						<div className='w-full space-y-4 md:space-y-6 md:w-1/2'>
							<a
								href='/blog/looksmaxxing-blake-anderson/'
								className='block'
							>
								<Image
									src='https://minastik.com/wp-content/uploads/2023/12/BAT-MI-CACH-TOI-UU-HOA-HINH-ANH-GIUP-WEBSITE-VAN-HANH-MUOT-MA-HON.png'
									width={1200}
									height={400}
									alt='Featured Blog Image'
									className='w-full h-[400px] rounded-lg object-cover'
								/>
							</a>
							<div className='pt-2 text-sm font-semibold text-w-blue'>
								<span className='title-badge btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60'>
									<span className='bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent'>
										Frontend Frameworks
									</span>
								</span>
							</div>
							<h2 className='text-xl font-bold md:text-2xl text-w-block'>
								<a href='/blog/looksmaxxing-blake-anderson/'>
									Meet Blake: Here’s how he turned looksmaxxing into $10M with
									ChatGPT
								</a>
							</h2>
							<p className='text-sm sm:text-base text-indigo-200/70 leading-relaxed line-clamp-3'>
								Building apps with AI and no coding knowledge made Blake
								Anderson millions of dollars. Read his story and learn how you
								could do this too.
							</p>
							<div className='flex items-center gap-3 mt-4'>
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
							{[
								{
									href: '/blog/make-money-with-your-phone/',
									src: 'https://minastik.com/wp-content/uploads/2024/09/Responsive-Design-5.png',
									alt: 'Workflow 01',
									title:
										'How to make money with your phone: 25 passive and active income ideas',
									category: 'Finance',
									author: 'Alexios Georgakopoulos',
									date: '13/11/2024',
								},
								{
									href: '/blog/dropshipping-vs-ecommerce/',
									src: 'https://minastik.com/wp-content/uploads/2023/12/BAT-MI-SU-KHAC-BIET-GIUA-WEBSITE-DONG-VA-TINH-NEN-LUA-CHON-LOAI-HINH-NAO.png',
									alt: 'Workflow 02',
									title: 'Dropshipping vs ecommerce: what’s the difference?',
									category: 'Frontend Frameworks',
									author: 'Nicole Braganza',
									date: '13/11/2024',
								},
								{
									href: '/blog/round-robin-bet/',
									src: 'https://minastik.com/wp-content/uploads/2024/07/Su-co-Man-hinh-xanh-1.png',
									alt: 'Workflow 03',
									title:
										'What is a round robin bet? Here’s what sports fans need to know',
									category: 'Artificial Intelligence',
									author: 'Frank Monkhouse',
									date: '14/11/2024',
								},
								{
									href: '/blog/community-website-platforms/',
									src: 'https://minastik.com/wp-content/uploads/2023/12/BAT-MI-SU-KHAC-BIET-GIUA-WEBSITE-DONG-VA-TINH-NEN-LUA-CHON-LOAI-HINH-NAO.png',
									alt: 'Workflow 03',
									title:
										'Community website platforms: 15 examples to grow and monetize your brand in 2025',
									category: 'UI/UX Design',
									author: 'Rob Truslove',
									date: '13/11/2024',
								},
							].map(
								({ href, src, alt, title, category, author, date }, idx) => (
									<div
										className='flex items-center gap-4 md:gap-6'
										key={idx}
									>
										<a
											href={href}
											className='shrink-0'
										>
											<Image
												src={src}
												width={250}
												height={288}
												alt={alt}
												className='h-[140px] w-auto rounded-lg object-cover aspect-[4/3]'
											/>
										</a>
										<div>
											<div className='hidden mb-2 text-sm font-semibold md:block text-w-blue'>
												<span className='title-badge btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60'>
													<span className='bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent'>
														{category}
													</span>
												</span>
											</div>
											<h3 className='text-base md:text-lg font-medium hover:underline hover:underline-offset-1'>
												<a href={href}>{title}</a>
											</h3>
											<div className='text-sm text-indigo-200/70 flex items-center'>
												<span>by {author}</span>
												<span className='mx-2 text-gray-300'>•</span>
												<time dateTime={date}>{date}</time>
											</div>
										</div>
									</div>
								)
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
