import FeatureFooter from "@/features/FeatureFooter";
import FeatureNavbar from "@/features/FeatureNavbar";
import Head from "next/head";

export default function LandingLayout({ children }) {

    return (
        <>
            <Head>
                <title>Muhammad Zikri - Portofolio</title>
                <meta name="description" content="Muhammad zikri, Portofolio - Fullstack Programmer from Indonesia" />
            </Head>
            <FeatureNavbar />
            <main className="min-h-screen bg-white text-gray-800 w-full">
                {children}
            </main>
            <FeatureFooter />
        </>
    )
}