/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'minastik.com',
				port: '',
				pathname: '/wp-content/uploads/**',
			},
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
				port: '',
				pathname: '/dxtyxxn3y/image/upload/**',
			},
		],
	},
};

module.exports = nextConfig;
