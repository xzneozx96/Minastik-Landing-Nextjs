/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				inter: ['var(--font-inter)', 'sans-serif'],
				nacelle: ['var(--font-inter)', 'sans-serif'],
			},
			fontSize: {
				xs: ['0.8125rem', { lineHeight: '1.5384' }],
				sm: ['0.875rem', { lineHeight: '1.5715' }],
				base: [
					'0.9375rem',
					{ lineHeight: '1.5333', letterSpacing: '-0.0125em' },
				],
				lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '-0.0125em' }],
				xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.0125em' }],
				'2xl': ['1.5rem', { lineHeight: '1.415', letterSpacing: '-0.0268em' }],
				'3xl': [
					'1.75rem',
					{ lineHeight: '1.3571', letterSpacing: '-0.0268em' },
				],
				'4xl': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.0268em' }],
				'5xl': ['3.5rem', { lineHeight: '1', letterSpacing: '-0.0268em' }],
				'6xl': ['4rem', { lineHeight: '1', letterSpacing: '-0.0268em' }],
				'7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.0268em' }],
			},
			boxShadow: {
				'glass-effect':
					'inset 0 1px 1px 0 rgba(216, 236, 248, 0.2), inset 0 20px 40px 0 rgba(168, 216, 245, 0.06), 0 16px 32px rgba(0, 0, 0, 0.3)',
			},
			animation: {
				shine: 'shine 5s ease-in-out 500ms infinite',
				'shiny-text': 'shiny-text 5s infinite',
				rainbow: 'rainbow 5s linear infinite',
				'border-beam': 'border-beam 8s infinite linear',
			},
			keyframes: {
				shine: {
					'0%': { top: '0', transform: 'scaleY(5)', opacity: '0' },
					'10%': { opacity: '.8' },
					'20%': { top: '100%', transform: 'scaleY(10)', opacity: '0' },
					'100%': { top: '100%', transform: 'scaleY(1)', opacity: '0' },
				},
				gradient: {
					to: { 'background-position': '200% center' },
				},
				'shiny-text': {
					'0%, 90%, 100%': {
						'background-position': 'calc(-100% - 100px) 0',
					},
					'30%, 60%': {
						'background-position': 'calc(100% + 100px) 0',
					},
				},
				rainbow: {
					to: {
						backgroundPosition: '300% 0',
					},
				},
				'border-beam': {
					'100%': {
						'offset-distance': '100%',
					},
				},
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
