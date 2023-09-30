import { getAllPortofolio } from "@/collection/portofolioCollection";
import CardProject from "@/components/Card/Project";
import FeatureDetailProject from "@/features/FeatureDetailProject";
import LandingLayout from "@/layouts/LandingLayout";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export async function getServerSideProps() {
    return {
        props: {
            porto: await getAllPortofolio()
        }
    }
}

export default function ProjectPage({ porto }) {

    const [detailProject, setDetailProject] = useState(null)

    function handleDetailProject(item) {
        setDetailProject(item)
    }

    return (
        <LandingLayout>
            <>
                <section className="w-full py-16">
                    <div className="container mx-auto space-y-4 px-8 md:px-16">
                        <div className="space-y-16">
                            <div className="space-y-4">
                                <h2 className="text-2xl md:text-4xl font-semibold">
                                    All Projects
                                </h2>
                                <p className="text-gray-500 text-sm md:text-base">
                                    Things I’ve built so far
                                </p>
                            </div>
                        </div>
                        <div className="w-full flex justify-center font-poppins">
                            <div className="w-full grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-8">
                                {
                                    porto.map((item, i) => (
                                        <CardProject
                                            click={() => handleDetailProject(item)}
                                            title={item.title}
                                            subtitle={item.subtitle}
                                            previewCode={item.previewCode}
                                            livePreview={item.livePreview}
                                            key={i} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </section>
                <AnimatePresence>
                    {
                        detailProject && <FeatureDetailProject close={() => setDetailProject(null)} item={detailProject} />
                    }
                </AnimatePresence>
            </>
        </LandingLayout >
    )
}