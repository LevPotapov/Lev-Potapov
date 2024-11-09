const Button = ({ text }: { text: string }) => {
    return (
        <button className="text-center text-white align-middle bg-blue w-full h-full text-base font-medium rounded">
            {text}
        </button>
    )
}

export default Button
