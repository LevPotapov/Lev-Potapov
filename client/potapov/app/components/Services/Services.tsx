import getData from '../../actions/getData'
import Service from '../Service/Service'
import HOST_URL from '../../config/configuration'
import './Services.css'

const Services = async () => {
    const servises = await getData(HOST_URL + 'api/skills')

    return (
        <section className="mt-20 px-48 space-y-6 services">
            <div className="servicesIntroduction grid grid-cols-2">
                <h2 id="services" className="text-4xl font-bold">
                    Services fournis
                </h2>
                <p className="font-normal text-base text-grey_dark mb-6 servicesText">
                    <span className="text-blue">&lt;&#47;</span> Je crée des
                    sites web adaptatifs, sécurisés et rapidement chargés, en
                    tenant compte de toutes les exigences actuelles. Fournir un
                    support technique, corriger les bugs et optimiser les sites
                    pour le référencement{' '}
                    <span className="text-blue">&gt;</span>
                </p>
            </div>
            <div className="grid grid-cols-4 grid-rows-2 gap-4 servicesContainer">
                {Array.isArray(servises)
                    ? servises.map((el) => {
                          return (
                              <Service
                                  key={el._id}
                                  keyId={el._id}
                                  iconUrl={el.iconUrl}
                                  title={el.title}
                                  stack={el.stack}
                                  description={el.description}
                              />
                          )
                      })
                    : undefined}
            </div>
        </section>
    )
}

export default Services
