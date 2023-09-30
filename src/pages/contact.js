import { getFirstProfile } from "@/collection/profileCollection";
import LandingLayout from "@/layouts/LandingLayout";

export async function getServerSideProps() {
    return {
        props: {
            about: await getFirstProfile()
        }
    }
}

export default function ContactPage({ about }) {

    return (
        <LandingLayout>
            <section className="w-full py-16">
                <div className="container mx-auto font-poppins px-8 md:px-16">
                    <div className="w-full h-[60vh] md:space-y-4 flex flex-col items-center justify-center">
                        <h2 className="text-2xl text-center md:text-5xl font-bold text-gray-800">For any questions please mail us:</h2>
                        <p className="text-2xl md:text-5xl text-center py-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-semibold">
                            {about?.email}
                        </p>
                    </div>
                </div>
            </section>
        </LandingLayout>
    )
}