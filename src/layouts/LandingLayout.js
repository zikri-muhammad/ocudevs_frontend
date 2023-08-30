import FeatureFooter from "@/features/FeatureFooter";
import FeatureNavbar from "@/features/FeatureNavbar";
import Head from "next/head";

export default function LandingLayout({ children }) {

    return (
        <>
            <Head>
                <title>Choirul Affan - Portofolio</title>
                <meta name="description" content="Choirul Affan, Portofolio - Fullstack Programmer from Indonesia" />
            </Head>
            <FeatureNavbar />
            <main className="min-h-screen bg-white text-gray-800 w-full">
                {children}
            </main>
            <FeatureFooter />
        </>
    )
}