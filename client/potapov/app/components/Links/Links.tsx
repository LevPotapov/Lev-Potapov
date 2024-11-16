import Image from 'next/image'
import Link from 'next/link'
import './Links.css'

const Links = () => {
    return (
        <div className="flex space-x-2 links">
            <Link href={'https://github.com/LevPotapov'}>
                <div className="w-12 h-12 border-2 border-blue rounded-full p-3 hover:scale-110 transition-transform ease-out duration-300">
                    <Image
                        src="/icons/github.svg"
                        alt="icône de github"
                        width={20}
                        height={20}
                    />
                </div>
            </Link>
            <Link href={'https://www.linkedin.com/in/lev-potapov-65a2b42ab/'}>
                <div className="w-12 h-12 border-2 border-blue rounded-full p-3 hover:scale-110 transition-transform ease-out duration-300">
                    <Image
                        src="/icons/linkedIn.svg"
                        alt="icône de linkedIn"
                        width={20}
                        height={20}
                    />
                </div>
            </Link>
            <Link href={'https://t.me/LevPotapov'}>
                <div className="w-12 h-12 border-2 border-blue rounded-full p-3 hover:scale-110 transition-transform ease-out duration-300">
                    <Image
                        src="/icons/telegram.svg"
                        alt="icône de telegram"
                        width={20}
                        height={20}
                    />
                </div>
            </Link>
        </div>
    )
}

export default Links
