import { getAllTechStack } from "@/collection/techStackCollection"
import { useEffect, useState } from "react"

export default function FeatureTechStack() {

    const [techStack, setTechStack] = useState([])

    useEffect(() => {
        getTechStack()
    }, [])
    
    async function getTechStack() {
        const getData = await getAllTechStack()
        setTechStack(getData)
    }

    return (
        <section className="min-h-screen w-full bg-gray-50 py-16">
            <div className="container mx-auto space-y-4">
                <div className="text-5xl font-poppins-semi-bold text-gray-700 text-center">
                    My Tech Stack
                </div>
                <div className="text-gray-700 text-2xl font-poppins-extra-light text-center">
                    Technologies I’ve been working with recently
                </div>
                <div className="my-24 w-full md:px-16 flex justify-center">
                    <div className="w-full py-14 justify-items-center grid gap-8 grid-cols-2 md:grid-cols-4 xl:grid-cols-6">
                        {
                            techStack.length > 0 && techStack.map((item, i) => (
                                <div key={i} className="w-28 h-28">
                                    <img src={item.source} className="w-full h-full object-contain" alt={item.name} />
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </section>
    )
}