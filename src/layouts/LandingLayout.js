import FeatureNavbar from "@/features/FeatureNavbar";

export default function LandingLayout({ children }) {

    return (
        <>
            <FeatureNavbar />
            <main className="min-h-screen bg-white text-gray-800 w-full">
                {children}
            </main>
        </>
    )
}