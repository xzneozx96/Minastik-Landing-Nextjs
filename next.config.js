/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'aceternity.com',
				port: '',
				pathname: '/images/products/thumbnails/new/**',
			},
			{
				protocol: 'https',
				hostname: 'minastik.com',
				port: '',
				pathname: '/wp-content/uploads/**',
			},
		],
	},
};

module.exports = nextConfig;
