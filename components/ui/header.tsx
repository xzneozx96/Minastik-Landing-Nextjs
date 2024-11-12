'use client';

import Link from 'next/link';
import Logo from './logo';

export default function Header() {
	return (
		<header className='z-30 w-full fixed top-0 py-4 backdrop-blur-[12px]'>
			<div className='mx-auto max-w-6xl px-4 sm:px-6'>
				<div className='relative flex h-14 items-center justify-between gap-3 rounded-2xl'>
					{/* tailwind css for round & border: bg-gray-900/90 px-3
					before:pointer-events-none before:absolute before:inset-0
					before:rounded-[inherit] before:border before:border-transparent
					before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box]
					before:[mask-composite:exclude_!important]
					before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]
					after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm */}

					{/* Site branding */}
					<div className='flex flex-1 items-center'>
						<Logo />
					</div>
					{/* Site navigation */}
					<ul className='flex gap-20'>
						<li className='text-blue-200/65'>About Us</li>
						<li className='text-blue-200/65'>Projects</li>
						<li className='text-blue-200/65'>Blogs</li>
						<li className='text-blue-200/65'>Profile</li>
					</ul>
					{/* Desktop sign in links */}
					<ul className='flex flex-1 items-center justify-end gap-3'>
						<li>
							<Link
								href='/signup'
								className='btn-sm bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]'
							>
								Contact Us
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
}
