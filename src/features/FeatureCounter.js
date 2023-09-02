import ButtonSolid from "@/components/Button/Solid"
import { useState } from "react"

export default function FeatureCounter() {

    const [nomor, setNomor] = useState(0)

    function handleCounter() {
        setNomor((nomor+1))
    }

    return (
        <div className="min-h-screen bg-gray-300 w-full flex flex-col justify-center items-center">
            <div className="container mx-auto py-16 space-y-4 ">
                <div className="text-center text-3xl text-primary">
                    Jumlah Angka {nomor}
                </div>
                <div className="flex justify-center">
                    <ButtonSolid text="Counter" click={handleCounter} />
                </div>
            </div>
        </div>
    )
}