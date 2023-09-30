import { getAllTechStack } from "@/collection/techStackCollection";
import FeatureTechStack from "@/features/FeatureTechStack";
import LandingLayout from "@/layouts/LandingLayout";


export async function getServerSideProps() {
    return {
        props: {
            techStack: await getAllTechStack()
        }
    }
}

export default function TechStackPage({ techStack }) {

    return (
        <LandingLayout>
            <section className="w-full py-16">
                <div className="container mx-auto font-poppins px-8 md:px-16">
                    <div className="space-y-16">
                        <div className="space-y-4">
                            <h2 className="text-2xl md:text-4xl font-semibold">
                                My Tech Stack
                            </h2>
                            <p className="text-gray-500 text-sm md:text-base">
                                Technologies I’ve been working with recently
                            </p>
                        </div>
                        <div className="w-full flex justify-start items-start">
                            <div className="w-full grid gap-8 grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
                                {
                                    techStack.length > 0 && techStack.map((item, i) => (
                                        <div key={i} className="w-16 h-16 md:w-28 md:h-28">
                                            <img src={item.source} className="w-full h-full object-contain" alt={item.name} />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </LandingLayout>
    )

}