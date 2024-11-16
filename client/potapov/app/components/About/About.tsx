import Image from 'next/image'
import Button from '../Button/Button'
import Link from 'next/link'
import Technologie from '../Technologie/Technologie'
import './About.css'

const About = () => {
    return (
        <section
            id="about"
            style={{ backgroundImage: 'url("/photos/background.webp")' }}
            className="bg-cover bg-center bg-no-repeat"
        >
            <div className="w-full h-full bg-gradient-to-r from-light-gray px-48  relative about">
                <div className="flex justify-between space-x-40 ">
                    <div className="mt-36  introduction">
                        <h1 className="uppercase font-bold text-5xl">
                            Créer des{' '}
                            <span className="text-blue">
                                solutions modernes et efficaces{' '}
                            </span>
                            pour votre entreprise
                        </h1>
                        <p className="text-lg mt-6">
                            Je me spécialise dans le développement de sites web
                            qui aident les entreprises à se développer et à
                            réussir dans le monde numérique.
                        </p>

                        <div className="aboutButton w-56 h-12 mb-28 mt-6 active:scale-95 hover:scale-105 transition-transform ease-out duration-300">
                            <Link href={'/#form'}>
                                <Button text="Me contacter" />
                            </Link>
                        </div>
                    </div>

                    <Image
                        id="myPhoto"
                        src="/photos/potapov.webp"
                        alt="photo personnelle de Potapov Lev "
                        width={525}
                        height={700}
                    />
                </div>

                <div className="technologies flex justify-between bg-white rounded-xl py-4 absolute -bottom-14 left-48 right-48">
                    <Technologie
                        src="/icons/next.svg"
                        alt="Next.js"
                        borderR={true}
                        w={48}
                        h={48}
                    />
                    <Technologie
                        src="/icons/nest.svg"
                        alt="NestJS"
                        borderR={true}
                        w={48}
                        h={48}
                    />
                    <Technologie
                        src="/icons/typescript.svg"
                        alt="TypeScript"
                        borderR={true}
                        w={48}
                        h={48}
                    />
                    <Technologie
                        src="/icons/mongo.svg"
                        alt="MongoDB"
                        borderR={true}
                        w={48}
                        h={48}
                    />
                    <Technologie
                        src="/icons/scss.svg"
                        alt="Scss"
                        borderR={true}
                        w={48}
                        h={48}
                    />
                    <Technologie
                        src="/icons/docker.svg"
                        alt="Docker"
                        w={48}
                        h={48}
                    />
                </div>
                <div className="technologiesMobile grid grid-cols-2 bg-white rounded-xl p-4 absolute -bottom-80 left-4 right-4">
                    <Technologie
                        src="/icons/next.svg"
                        alt="Next.js"
                        borderB={true}
                        w={48}
                        h={48}
                    />
                    <Technologie
                        src="/icons/nest.svg"
                        alt="NestJS"
                        borderB={true}
                        w={48}
                        h={48}
                    />
                    <Technologie
                        src="/icons/typescript.svg"
                        alt="TypeScript"
                        borderB={true}
                        w={48}
                        h={48}
                    />
                    <Technologie
                        src="/icons/mongo.svg"
                        alt="MongoDB"
                        borderB={true}
                        w={48}
                        h={48}
                    />
                    <Technologie
                        src="/icons/scss.svg"
                        alt="Scss"
                        w={48}
                        h={48}
                    />
                    <Technologie
                        src="/icons/docker.svg"
                        alt="Docker"
                        w={48}
                        h={48}
                    />
                </div>
            </div>
        </section>
    )
}

export default About
