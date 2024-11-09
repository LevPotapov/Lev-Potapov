import Image from 'next/image'
import Button from './Button'

const About = () => {
    return (
        <section
            style={{ backgroundImage: 'url("/photos/background.webp")' }}
            className="bg-cover bg-center bg-no-repeat "
        >
            <div className="w-full h-full bg-gradient-to-r from-light-gray px-48 relative">
                <div className="flex justify-between space-x-40">
                    <div className="mt-36  space-y-6">
                        <h1 className="uppercase font-bold text-5xl">
                            Créer des{' '}
                            <span className="text-blue">
                                solutions modernes et efficaces{' '}
                            </span>
                            pour votre entreprise
                        </h1>
                        <p className="text-lg">
                            Je me spécialise dans le développement de sites web
                            qui aident les entreprises à se développer et à
                            réussir dans le monde numérique.
                        </p>
                        <div className="w-56 h-12">
                            <Button text="Me contacter" />
                        </div>
                    </div>
                    <Image
                        src="/photos/potapov.webp"
                        alt="photo personnelle de Potapov Lev "
                        width={525}
                        height={700}
                    />
                </div>

                <div className="flex justify-between bg-white rounded-xl py-4 absolute -bottom-14 left-48 right-48">
                    <div className="p-6 border-r border-gray grow flex items-center justify-center">
                        <Image
                            src="/icons/HTML5_Badge.svg"
                            alt="photo personnelle de Potapov Lev "
                            width={48}
                            height={48}
                        />
                    </div>
                    <div className="p-6 border-r border-gray grow flex items-center justify-center">
                        <Image
                            src="/icons/Css.svg"
                            alt="photo personnelle de Potapov Lev "
                            width={48}
                            height={48}
                        />
                    </div>
                    <div className="p-6 border-r border-gray grow flex items-center justify-center">
                        <Image
                            src="/icons/Laravel.svg"
                            alt="photo personnelle de Potapov Lev "
                            width={48}
                            height={48}
                        />
                    </div>
                    <div className="p-6 border-r border-gray grow flex items-center justify-center">
                        <Image
                            src="/icons/wordpress.svg"
                            alt="photo personnelle de Potapov Lev "
                            width={48}
                            height={48}
                        />
                    </div>
                    <div className="p-6 border-r border-gray grow flex items-center justify-center">
                        <Image
                            src="/icons/OpenCart.svg"
                            alt="photo personnelle de Potapov Lev "
                            width={48}
                            height={48}
                        />
                    </div>
                    <div className="p-6  grow flex items-center justify-center">
                        <Image
                            src="/icons/image.svg"
                            alt="photo personnelle de Potapov Lev "
                            width={48}
                            height={48}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
