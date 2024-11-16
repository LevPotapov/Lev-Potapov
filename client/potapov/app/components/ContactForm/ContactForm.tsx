'use client'
import HOST_URL from '../../config/configuration'
import { FormEvent } from 'react'
import './ContactForm.css'

const ContactForm = () => {
    const handlerSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const form = event.target
        const body: {
            userName: FormDataEntryValue | null
            email: FormDataEntryValue | null
            phone: FormDataEntryValue | null
            text: FormDataEntryValue | null
        } = {
            userName: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            text: formData.get('message'),
        }
        const bodyJSON: string = JSON.stringify(body)
        const response = await fetch(HOST_URL + 'api/messages/demands', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: bodyJSON,
        })

        const inputs: HTMLCollectionOf<HTMLInputElement> =
            document.getElementsByTagName('input')

        const textarea: HTMLTextAreaElement | null =
            document.querySelector('textarea')

        if (response.ok) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            form.reset()
            const addRemoveInputBorder = () => {
                for (let i = 0; i < inputs.length; i++) {
                    inputs.item(i)?.classList.toggle('border-2')
                }
                for (let i = 0; i < inputs.length; i++) {
                    inputs.item(i)?.classList.toggle('border-lime-500')
                }
                textarea?.classList.toggle('border-2')
                textarea?.classList.toggle('border-lime-500')
            }
            addRemoveInputBorder()

            setTimeout(addRemoveInputBorder, 1000)
        }
    }

    return (
        <div id="form" className="px-48 py-40 contactForm">
            <div className="bg-blue text-white rounded-xl py-20">
                <h2 className="text-center text-4xl font-bold mb-8">
                    ME CONTACTER
                </h2>
                <p className="text-center text-lg mb-10">
                    Remplissez le formulaire et je vous contacterai bientôt
                </p>
                <form
                    name="contactForm"
                    className="px-48 "
                    action={HOST_URL + 'api/messages/demands'}
                    method="POST"
                    id="form"
                    onSubmit={handlerSubmit}
                >
                    <div className="mb-3">
                        <label className="block text-sm mb-2" htmlFor="name">
                            Nom Prénom
                        </label>
                        <input
                            required
                            className="rounded-xl w-full p-4 text-black h-12"
                            name="name"
                            id="name"
                            type="text"
                            placeholder="Nom Prénom"
                        />
                    </div>

                    <div className="flex mb-7 telAndMail">
                        <div className="w-full mr-1">
                            <label
                                className="block text-sm mb-2"
                                htmlFor="phone"
                            >
                                Téléphone
                            </label>
                            <input
                                required
                                className="rounded-xl w-full p-4 text-black h-12 "
                                name="phone"
                                id="phone"
                                type="tel"
                                placeholder="06 88 88 88 88"
                            />
                        </div>
                        <div className="w-full ml-1">
                            <label
                                className="block text-sm mb-2"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                required
                                className="rounded-xl w-full p-4 text-black h-12"
                                name="email"
                                id="email"
                                type="email"
                                placeholder="example@gmail.com"
                            />
                        </div>
                    </div>
                    <label className="block text-sm mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        required
                        className="rounded-xl w-full p-4 mb-5 resize-none text-black h-32"
                        id="message"
                        name="message"
                        placeholder="Votre message"
                    ></textarea>
                    <button className="bg-blue_2 block rounded-xl w-full p-4 font-medium h-14 active:scale-95 transition-transform ease-out duration-300">
                        Envoyer
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm
