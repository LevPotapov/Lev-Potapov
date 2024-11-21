import Link from 'next/link'
import './Logo.css'

/* eslint-disable react/jsx-no-comment-textnodes */
const Logo = () => {
    return (
        <Link href={'/'}>
            <h2 className="logo font-logo text-xl font-bold hover:scale-105 transition-transform ease-out duration-300">
                <span className="text-blue ">//*</span>
                <span className="text-black ">LEV POTAPOV</span>
                <span className="text-blue ">*//</span>
            </h2>
        </Link>
    )
}

export default Logo
