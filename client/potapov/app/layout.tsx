import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Viewport } from 'next'

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    display: 'swap',
    variable: '--font-inter',
    preload: false,
})

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1.0,
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="fr">
            <head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
            </head>
            <body className={inter.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
