import About from './components/About/About'
import ContactForm from './components/ContactForm/ContactForm'
import Services from './components/Services/Services'
import Works from './components/Works/Works'

export const metadata = {
    title: 'Potapov',
    description: 'site web du développeur  Lev Potapov',
}

export default function Home() {
    return (
        <>
            <About />
            <div
                style={{ minHeight: '2500px' }}
                className="bg-light-gray contentContainer"
            >
                <Works />
                <Services />
                <ContactForm />
            </div>
        </>
    )
}
