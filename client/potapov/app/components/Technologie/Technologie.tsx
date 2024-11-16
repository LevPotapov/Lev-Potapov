import Image from 'next/image'
import './Technologie.css'

const Technologie = ({
    src,
    w,
    h,
    alt,
    borderR = false,
    borderB = false,
}: {
    src: string
    w: number
    h: number
    alt: string
    borderR?: boolean
    borderB?: boolean
}) => {
    return borderR ? (
        <div className=" technologie p-6 border-r border-gray grow flex items-center justify-center">
            <Image src={src} alt={`icon de ${alt}`} width={w} height={h} />
        </div>
    ) : borderB ? (
        <div className=" technologie p-6 border-b border-gray grow flex items-center justify-center">
            <Image src={src} alt={`icon de ${alt}`} width={w} height={h} />
        </div>
    ) : (
        <div className=" technologie p-6 grow flex items-center justify-center">
            <Image src={src} alt={`icon de ${alt}`} width={w} height={h} />
        </div>
    )
}

export default Technologie
