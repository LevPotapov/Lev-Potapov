'use client'
import Link from 'next/link'
import Logo from '../Logo/Logo'
import Button from '../Button/Button'
import Links from '../Links/Links'
import Image from 'next/image'
import './Header.css'

const Header = () => {
    const handlerClick = () => {
        const contentContainer: Element | null =
            document.querySelector('.contentContainer')
        const footer: Element | null = document.querySelector('.footer')
        const body: Element | null = document.querySelector('body')
        const modale: Element | null = document.querySelector('.navModale')
        const header: Element | null = document.querySelector('header')
        const open: Element | null = document.querySelector(
            '.headerMenuButtonOpen'
        )
        const close: Element | null = document.querySelector(
            '.headerMenuButtonClose'
        )
        open?.classList.add('displayNone')
        close?.setAttribute('style', 'opacity: 1;')

        const closeModale = (event: Event) => {
            const targetsArray = event.composedPath()
            try {
                targetsArray.forEach((el) => {
                    if (
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        //@ts-ignore
                        el.tagName === 'A' ||
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        //@ts-ignore
                        el.tagName === 'BUTTON' ||
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        //@ts-ignore
                        el.classList?.contains('modaleBackground')
                    ) {
                        footer?.setAttribute('aria-hidden', 'false')
                        contentContainer?.setAttribute('aria-hidden', 'false')
                        modale?.classList.remove('headerModaleShow')
                        body?.classList.remove('overflow-hidden')
                        open?.classList.remove('displayNone')
                        close?.setAttribute('style', 'opacity: 0;')
                        header?.removeEventListener('click', closeModale)
                        document.removeEventListener(
                            'keydown',
                            closeModaleWithEscape
                        )
                    }
                })
            } catch (error) {
                console.log(error)
            }
        }

        const closeModaleWithEscape = (e: Event) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            if (e.key === 'Escape') {
                footer?.setAttribute('aria-hidden', 'false')
                contentContainer?.setAttribute('aria-hidden', 'false')
                modale?.classList.remove('headerModaleShow')
                body?.classList.remove('overflow-hidden')
                open?.classList.remove('displayNone')
                close?.setAttribute('style', 'opacity: 0;')
                header?.removeEventListener('click', closeModale)
                document.removeEventListener('keydown', closeModaleWithEscape)
            }
        }

        document.addEventListener('keydown', closeModaleWithEscape)
        modale?.classList.add('headerModaleShow')
        body?.classList.add('overflow-hidden')
        header?.addEventListener('click', closeModale)
        contentContainer?.setAttribute('aria-hidden', 'true')
        footer?.setAttribute('aria-hidden', 'true')
    }

    return (
        <header className="relative">
            <div className="flex justify-between items-center px-48 py-4 header">
                <Logo />
                <nav className="nav flex space-x-20 text-base font-medium">
                    <Link
                        href="/#about"
                        className="hover:scale-110 transition-transform ease-out duration-300"
                    >
                        À propos
                    </Link>
                    <Link
                        className="hover:scale-110 transition-transform ease-out duration-300"
                        href="/#works"
                    >
                        Mes projets
                    </Link>
                    <Link
                        className="hover:scale-110 transition-transform ease-out duration-300"
                        href="/#services"
                    >
                        Services
                    </Link>
                </nav>
                <div className="headerContactLinks">
                    <Links />
                </div>
                <div className="flex gap-10 headerButtonsContainer">
                    <Link href={'/#form'}>
                        <div className="headerButton w-56 h-12 active:scale-95 hover:scale-105 transition-transform ease-out duration-300">
                            <Button text={'Me contacter'} />
                        </div>
                    </Link>
                    <div className="w-6 h-6 openCloseContainer">
                        <button className="headerMenuButtonClose">
                            <Image
                                src={'icons/menuClose.svg'}
                                alt={'The icon that closes the navigation menu'}
                                width={22}
                                height={22}
                            />
                        </button>

                        <button
                            className="headerMenuButtonOpen"
                            onClick={handlerClick}
                        >
                            <Image
                                src={'icons/menuOpen.svg'}
                                alt={'The icon that opens the navigation menu'}
                                width={22}
                                height={22}
                            />
                        </button>
                    </div>
                </div>
            </div>
            <div className="navModale absolute">
                <div className="w-full">
                    <nav className="w-full flex flex-col  text-base font-medium my-10 gap-10">
                        <Link
                            href="/#about"
                            className=" navLink text-center hover:scale-110 transition-transform ease-out duration-300"
                        >
                            À propos
                        </Link>

                        <Link
                            className="navLink text-center hover:scale-110 transition-transform ease-out duration-300"
                            href="/#works"
                        >
                            Mes projets
                        </Link>
                        <Link
                            className="navLink text-center hover:scale-110 transition-transform ease-out duration-300"
                            href="/#services"
                        >
                            Services
                        </Link>
                    </nav>
                    <div className="flex justify-center my-10">
                        <Links />
                    </div>
                </div>
                <div className="modaleBackground"></div>
            </div>
        </header>
    )
}

export default Header
