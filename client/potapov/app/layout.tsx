import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="fr">
            <body className={inter.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
