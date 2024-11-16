import Links from '../Links/Links'
import Logo from '../Logo/Logo'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="flex justify-between items-center px-48 py-4 footer">
            <Logo />
            <Links />
        </footer>
    )
}

export default Footer
