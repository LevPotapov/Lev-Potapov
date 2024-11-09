import Image from 'next/image'
import HOST_URL from '../config/configuration'

const Service = ({
    iconUrl,
    title,
    description,
}: {
    iconUrl: string
    title: string
    description: string
}) => {
    return (
        <div className="bg-white p-6 rounded-lg w-auto h-96 shadow-inner shadow-shadow">
            <Image
                src={HOST_URL + iconUrl}
                alt={`icône de ${title}`}
                width={84}
                height={84}
            />
            <h3 className="text-blue text-lg font-semibold mt-7 mb-2">
                {title}
            </h3>
            <p className="h-48 overflow-hidden hover:overflow-scroll">
                {description}
            </p>
        </div>
    )
}

export default Service
