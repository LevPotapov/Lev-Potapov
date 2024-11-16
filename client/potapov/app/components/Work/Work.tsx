import Image from 'next/image'
import Link from 'next/link'
import HOST_URL from '../../config/configuration'
import './Work.css'
import Button from '../Button/Button'
import { useState } from 'react'

const Work = ({
    keyId,
    imageUrl,
    title,
    technologies,
    description,
    link,
}: {
    keyId: string
    imageUrl: string
    title: string
    technologies: string[]
    description: string
    link: string
}) => {
    const [buttonText, setButtonText] = useState('Détaillé')
    const handlerClick = () => {
        const hiddenDiv: Element | null = document.querySelector(`.k${keyId}`)
        const button: Element | null = document.querySelector(`.b${keyId}`)
        button?.classList.toggle('btnClose')
        hiddenDiv?.classList.toggle('workDescriptionShow')
        if (buttonText === 'Détaillé') {
            setButtonText('Fermer')
        } else {
            setButtonText('Détaillé')
        }
    }

    return (
        <div className="relative h-full w-full work">
            <Image
                className="shadow-inner shadow-shadow rounded-xl w-full h-full"
                src={HOST_URL + imageUrl}
                alt={`image de projet "${title}"`}
                width={710}
                height={360}
            />
            <Link href={link}>
                <div
                    className={`workDescriptionHidden overflow-hidden hover:overflow-scroll shadow-inner shadow-shadow bg-blue text-white rounded-xl p-6 w-full h-full absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity k${keyId}`}
                >
                    <h3 className="font-bold text-lg mb-4">{title}</h3>
                    <h4 className=" text-base font-semibold my-3">
                        {`Technologies utilisées: ${technologies.join(', ')}.`}
                    </h4>
                    <p className="h-60 ">{description}</p>
                </div>
            </Link>
            <div
                className={`workButton relative h-10 w-1/3 bottom-20 left-1/3 b${keyId}`}
                onClick={handlerClick}
            >
                <Button text={buttonText} />
            </div>
        </div>
    )
}

export default Work
