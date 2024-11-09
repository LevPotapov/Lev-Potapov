import Image from 'next/image'
import Link from 'next/link'
import HOST_URL from '../config/configuration'

const Work = ({
    imageUrl,
    title,
    description,
    link,
}: {
    imageUrl: string
    title: string
    description: string
    link: string
}) => {
    return (
        <Link href={link}>
            <div className="relative">
                <Image
                    className="shadow-inner shadow-shadow rounded-xl w-full h-full"
                    src={HOST_URL + imageUrl}
                    alt={`image de projet "${title}"`}
                    width={710}
                    height={360}
                />

                <div className="shadow-inner shadow-shadow bg-blue text-white rounded-xl p-6 w-full h-full absolute top-0 left-0 opacity-0 hover:opacity-100">
                    <h3 className="font-bold text-lg mb-4">{title}</h3>
                    <p className="h-60 overflow-hidden hover:overflow-scroll">
                        {description}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default Work
