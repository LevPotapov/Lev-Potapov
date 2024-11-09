import Image from 'next/image'

const Links = () => {
    return (
        <div className="flex space-x-2">
            <div className="w-12 h-12 border-2 border-blue rounded-full p-3 ">
                <Image
                    src="/icons/github.svg"
                    alt="icône de github"
                    width={20}
                    height={20}
                />
            </div>
            <div className="w-12 h-12 border-2 border-blue rounded-full p-3 ">
                <Image
                    src="/icons/linkedIn.svg"
                    alt="icône de linkedIn"
                    width={20}
                    height={20}
                />
            </div>
            <div className="w-12 h-12 border-2 border-blue rounded-full   p-3 ">
                <Image
                    src="/icons/telegram.svg"
                    alt="icône de telegram"
                    width={20}
                    height={20}
                />
            </div>
        </div>
    )
}

export default Links
