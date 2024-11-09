import getData from '../actions/getData'
import Work from './Work'

const works = await getData('http://localhost:4000/api/projects')

const Works = () => {
    return (
        <section className="px-48 pt-48 pb-20">
            <div className="grid grid-cols-2 ">
                <h2 className="text-4xl font-bold">Exemples de mon travail</h2>
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
            <div className="grid grid-cols-2 gap-6">
                {works.map((el) => {
                    return (
                        <Work
                            key={el._id}
                            link={el.link}
                            description={el.description}
                            imageUrl={el.imageUrl}
                            title={el.title}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default Works
