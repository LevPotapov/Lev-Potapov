import Link from 'next/link'
import Logo from './Logo'
import Button from './Button'
import Links from './Links'

const Header = () => {
    return (
        <header className="flex justify-between items-center px-48 py-4">
            <Logo />
            <nav className="flex space-x-20 text-base font-medium">
                <Link href="/">À propos</Link>
                <Link href="/">Exemples d&apos;œuvres</Link>
                <Link href="/">Services</Link>
            </nav>
            <div className="flex items-center space-x-8">
                <Links />
                <div className="w-56 h-12">
                    <Button text={'Me contacter'} />
                </div>
            </div>
        </header>
    )
}

export default Header
