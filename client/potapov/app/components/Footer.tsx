import Links from './Links'
import Logo from './Logo'

const Footer = () => {
    return (
        <footer className="flex justify-between items-center px-48 py-4">
            <Logo />
            <Links />
        </footer>
    )
}

export default Footer
