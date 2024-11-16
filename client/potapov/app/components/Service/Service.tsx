'use client'
import Image from 'next/image'
import HOST_URL from '../../config/configuration'
import './Service.css'
import { useState } from 'react'

const Service = ({
    keyId,
    iconUrl,
    title,
    stack,
    description,
}: {
    keyId: string
    iconUrl: string
    title: string
    stack: string[]
    description: string
}) => {
    const [buttonIconUrl, setButtonIconUrl] = useState('icons/plus.svg')
    const [iconName, setIconName] = useState('Plus')

    const handlerClick = () => {
        const plus: Element | null = document.querySelector(`.t${keyId}`)
        if (iconName === 'Plus') {
            setIconName('Cross')
            setButtonIconUrl('icons/cross.svg')
        } else {
            setIconName('Plus')
            setButtonIconUrl('icons/plus.svg')
        }
        plus?.classList.toggle('serviceTextContainerShow')
    }

    return (
        <div className="service bg-white p-6 rounded-lg w-auto h-96 shadow-inner shadow-shadow overflow-hidden  hover:overflow-scroll">
            <div className="titleContainer">
                <Image
                    className="workIcon"
                    src={HOST_URL + iconUrl}
                    alt={`icône de ${title}`}
                    width={84}
                    height={84}
                />
                <h3 className="text-blue text-lg font-semibold mt-7 mb-2">
                    {title}
                </h3>
                <button className={`buttonIcon `} onClick={handlerClick}>
                    <Image
                        src={buttonIconUrl}
                        alt={`icon de ${iconName}`}
                        width={36}
                        height={36}
                    />
                </button>
            </div>
            <div className={`serviceTextContainer t${keyId}`}>
                <div className="w-full serviceBorderTextContainer"></div>
                <h4 className=" text-base font-medium my-2">
                    {`Stack: ${stack.join(', ')}.`}
                </h4>
                <p className="h-48 ">{description}</p>
            </div>
        </div>
    )
}

export default Service
