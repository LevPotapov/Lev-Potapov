import getData from '../actions/getData'
import Service from './Service'
const servises = await getData('http://localhost:4000/api/skills')

const Services = () => {
    return (
        <section className="mt-20 px-48 space-y-6">
            <div className="grid grid-cols-2">
                <h2 className="text-4xl font-bold">Services fournis</h2>
                <p className="font-normal text-base text-grey_dark mb-6">
                    <span className="text-blue">&lt;&#47;</span> Je crée des
                    sites web adaptatifs, sécurisés et rapidement chargés, en
                    tenant compte de toutes les exigences actuelles. Fournir un
                    support technique, corriger les bugs et optimiser les sites
                    pour le référencement{' '}
                    <span className="text-blue">&gt;</span>
                </p>
            </div>
            <div className="grid grid-cols-4 grid-rows-2 gap-4">
                {servises.map((el) => {
                    return (
                        <Service
                            key={el._id}
                            iconUrl={el.iconUrl}
                            title={el.title}
                            description={el.description}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default Services
