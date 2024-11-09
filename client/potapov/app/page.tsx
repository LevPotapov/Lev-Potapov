import About from './components/About'
import ContactForm from './components/ContactForm'
import Services from './components/Services'
import Works from './components/Works'

export default function Home() {
    return (
        <>
            <About />
            <div className="bg-light-gray">
                <Works />
                <Services />
                <ContactForm />
            </div>
        </>
    )
}
