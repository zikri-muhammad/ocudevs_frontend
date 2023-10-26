import ChipText from "@/components/Chip/Text";
import ModalReguler from "@/components/Modal/Reguler";
import { useEffect } from "react";

export default function FeatureDetailProject({ close, item }) {

    useEffect(() => {
        console.log(item);
    }, [item])

    return (
        <>
            <ModalReguler close={close}>
                <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 overflow-y-scroll font-poppins">
                    <div className="w-full space-y-4">
                        <div className="w-full h-[12rem] md:h-[18rem] bg-gray-50 rounded-lg relative">
                            <div className="absolute right-4 top-4">
                                <ChipText text="Gallery" />
                            </div>
                        </div>
                        <div className="w-full h-[4rem] md:h-[5rem] bg-gray-50 rounded-lg">
                        
                        </div>
                    </div>
                    <div className="w-full h-[30rem] bg-gray-50 rounded-lg">
                        <div className="w-full p-3 md:px-6 md:py-4">
                            <h2 className="text-gray-700 text-lg md:text-2xl">
                                {item?.title}
                            </h2>
                            <p className="text-gray-500 md:pt-4 text-sm md:text-base" dangerouslySetInnerHTML={{ __html: item?.subtitle }} />
                        </div>
                    </div>
                </div>
            </ModalReguler>
        </>
    )
}