'use client'
import { useEffect, useState } from 'react'
import getData from '../../actions/getData'
import Button from '../Button/Button'
import Work from '../Work/Work'
import HOST_URL from '../../config/configuration'
import './Works.css'

const Works = () => {
    const [works, setWorks] = useState<any[] | undefined>([])
    const [buttonText, setButtonText] = useState('Afficher plus')

    useEffect(() => {
        async function getWorks() {
            const result = await getData(HOST_URL + 'api/projects')
            setWorks(result)
        }
        getWorks()
    }, [])

    const handlerClick = () => {
        const hiddenDiv: Element | null =
            document.querySelector('.expansion-body')
        hiddenDiv?.classList.toggle('expansion-hide')
        if (buttonText !== 'Afficher plus') {
            setButtonText('Afficher plus')
            return
        }
        setButtonText('Cacher')
    }

    return (
        <section className=" px-48 pt-48 pb-20 works">
            <div className="projectsIntroduction grid grid-cols-2 ">
                <h2 id="works" className="text-4xl font-bold">
                    Mes projets
                </h2>
                <p className="font-normal text-base text-grey_dark mb-10">
                    <span className="text-blue">&lt;&#47;</span> Chacun de mes
                    projets est une solution unique conçue pour répondre aux
                    besoins spécifiques des clients. Spécialisé dans le
                    développement de sites Web et d&apos;applications qui aident
                    les entreprises à se développer et à réussir dans le monde
                    numérique. Des sites Web d&apos;entreprise aux boutiques en
                    ligne, nous donnons vie à vos idées en créant des solutions
                    pratiques, belles et fonctionnelles. Je travaille avec des
                    clients de différents secteurs, offrant des solutions
                    personnalisées pour leurs besoins et leurs défis. Découvrez
                    mes cas réussis et inspirez-vous pour créer votre propre
                    projet Web. <span className="text-blue">&gt;</span>
                </p>
            </div>
            <div className="grid grid-cols-2 gap-6 worksContainer">
                {works ? (
                    works.map((el, idx) => {
                        if (idx <= 3) {
                            return (
                                <div key={el._id} className="h-full">
                                    <Work
                                        keyId={el._id}
                                        link={el.link}
                                        description={el.description}
                                        technologies={el.technologies}
                                        imageUrl={el.imageUrl}
                                        title={el.title}
                                    />
                                </div>
                            )
                        }
                    })
                ) : (
                    <div></div>
                )}
                <div className="col-span-2 grid grid-cols-2 gap-6 expansion-body expansion-hide worksContainer">
                    {works ? (
                        works.map((el, idx) => {
                            if (idx > 3) {
                                return (
                                    <div key={el._id} className="h-full ">
                                        <Work
                                            keyId={el._id}
                                            link={el.link}
                                            technologies={el.technologies}
                                            description={el.description}
                                            imageUrl={el.imageUrl}
                                            title={el.title}
                                        />
                                    </div>
                                )
                            }
                        })
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>
            <div
                className="my-10 rounded-lg h-20 buttonAfficher"
                onClick={handlerClick}
            >
                <Button text={buttonText} />
            </div>
        </section>
    )
}

export default Works
