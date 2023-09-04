import { useEffect, useState } from "react"

export default function BaseNavbar({ children }) {

    const [scrollPosition, setPosition] = useState({ scrollX: 0, scrollY: 0 })

    useEffect(() => {
        function updatePosition() {
            setPosition({ scrollX: window.scrollX, scrollY: window.scrollY })
        }

        window.addEventListener('scroll', updatePosition)
        updatePosition()

        return () => window.removeEventListener('scroll', updatePosition)
    }, [])
    
    return (
        <nav className={`${scrollPosition.scrollY > 0 ? 'bg-white backdrop-filter backdrop-blur-2xl bg-opacity-10' : 'bg-white'} z-30 transition-all w-full sticky top-0 py-6 text-gray-600`}>
            <div className="container mx-auto px-8 lg:px-16">
                {children}
            </div>
        </nav>
    )
}