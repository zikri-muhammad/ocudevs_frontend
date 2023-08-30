export default function ButtonSolid({ text, click, className }) {
    
    return (
        <button onClick={click} type="button" className={`text-white bg-gradient-to-r from-primary transition-colors duration-300 via-blue-600 to-secondary hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-md px-5 py-2.5 text-center mr-2 mb-2 ${className}`}>
            {text}
        </button>
    )
}