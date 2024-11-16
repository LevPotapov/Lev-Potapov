import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        fontFamily: {
            logo: ['EuropeExt'],
        },
        extend: {
            colors: {
                grey_dark: '#575860',
                shadow: '#0A1F4412',
                black: '#010815',
                blue_2: '#1B5ED2',
                gray: '#CACBD2',
                'light-gray': '#F3F7FA',
                blue: '#0B4FC4',
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
            spacing: {
                desktop: '525px',
                '192': '710px',
                '999': '999999px',
            },
            height: {
                '90': '360px',
                '60': '268',
            },
        },
    },
    plugins: [],
}
export default config
