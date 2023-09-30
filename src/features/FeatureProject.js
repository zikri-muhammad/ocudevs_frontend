import { getAllPortofolio } from "@/collection/portofolioCollection";
import ButtonSolid from "@/components/Button/Solid";
import CardProject from "@/components/Card/Project";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import FeatureDetailProject from "./FeatureDetailProject";

export default function FeatureProject() {

    const [detailProject, setDetailProject] = useState(null)
    const [porto, setPorto] = useState([])
    const router = useRouter()

    useEffect(() => {
        getPorto()
    }, [])

    async function getPorto() {
        const getData = await getAllPortofolio()
        setPorto(getData)
    }

    function handleNavigate() {
        router.push("/projects")
    }

    function handleDetailProject(item) {
        setDetailProject(item)
    }

    return (
        <>
            <section className="w-full bg-white py-16">
                <div className="container mx-auto space-y-4 px-8 md:px-16">
                    <div className="text-3xl md:text-5xl font-poppins-semi-bold text-gray-600 text-center">
                        Projects
                    </div>
                    <div className="text-gray-600 md:text-2xl font-poppins-light md:font-poppins-extra-light text-center">
                        Things I’ve built so far
                    </div>
                    <div className="my-24 w-full flex justify-center font-poppins">
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
                    <div className="flex justify-center">
                        <ButtonSolid className="!px-8" click={handleNavigate} text="See More" />
                    </div>
                </div>
            </section>
            <AnimatePresence>
                {
                    detailProject && <FeatureDetailProject close={() => setDetailProject(null)} item={detailProject} />
                }
            </AnimatePresence>
        </>

    )
}