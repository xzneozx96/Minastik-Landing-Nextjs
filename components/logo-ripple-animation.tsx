import Image from 'next/image';
import LogoAnimation from '@/public/images/logo-animation.png';

export default function LogoRippleAnimation() {
	return (
		<span>
			<div className='logo-ripple-animation smart-animation smart-animation-visible'>
				<Image
					src={LogoAnimation}
					alt='ripple-animation'
					width={1254}
					height={1729}
					className='lazy-image lazy-image-loaded smart-background object-cover'
				/>

				<div className='lazy-background-image lazy-background-image-maskImage lazy-background-image-loaded smart-line'>
					<div></div>
					<div></div>
				</div>

				<div className='smart-circle smart-circle-1'></div>
				<div className='smart-circle smart-circle-2'></div>
			</div>

			<div className='lazy-video octopus smart-octopus'>
				<img
					src='https://minastik.com/wp-content/themes/hello-theme-child-master/assets/images/minastik-full-ver.png'
					style={{
						width: '100%',
						height: '100%',
					}}
				/>
			</div>
		</span>
	);
}
