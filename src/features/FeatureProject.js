import ButtonSolid from "@/components/Button/Solid";
import CardProject from "@/components/Card/Project";
import { useRouter } from "next/router";

export default function FeatureProject() {

    const router = useRouter()

    function handleNavigate() {
        router.push("/projects")
    }

    return (
        <section className="w-full bg-white py-16">
            <div className="container mx-auto space-y-4">
                <div className="text-5xl font-poppins-semi-bold text-gray-600 text-center">
                    Projects
                </div>
                <div className="text-gray-600 text-2xl font-poppins-extra-light text-center">
                    Things I’ve built so far
                </div>
                <div className="my-24 w-full px-8 md:px-16 flex justify-center font-poppins">
                    <div className="w-full grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-8">
                        <CardProject />
                        <CardProject />
                        <CardProject />
                        <CardProject />
                        <CardProject />
                        <CardProject />
                    </div>
                </div>
                <div className="flex justify-center">
                    <ButtonSolid className="!px-8" click={handleNavigate} text="See More" />
                </div>
            </div>
        </section>
    )
}