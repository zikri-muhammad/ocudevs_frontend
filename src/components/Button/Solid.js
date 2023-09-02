export default function ButtonSolid({ text, click, className }) {
    
    return (
        <button onClick={click} type="button" className={`text-white bg-secondary-dark transition-colors duration-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none font-medium rounded-full text-md px-5 py-2.5 text-center mr-2 mb-2 ${className}`}>
            {text}
        </button>
    )
}