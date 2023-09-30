import ModalReguler from "@/components/Modal/Reguler";
import { useEffect } from "react";

export default function FeatureDetailProject({ close, item }) {

    useEffect(() => {
        console.log(item);
    }, [item])

    return (
        <>
            <ModalReguler close={close}>
                <div className="w-full h-full grid grid-cols-2 gap-4 overflow-y-scroll font-poppins">
                    <div className="w-full space-y-4">
                        <div className="w-full h-[18rem] bg-gray-50 rounded-lg">

                        </div>
                        <div className="w-full h-[5rem] bg-gray-50 rounded-lg">
                            
                        </div>
                    </div>
                    <div className="w-full h-[30rem] bg-gray-50 rounded-lg">
                        <div className="w-full px-6 py-4">
                            <h2 className="text-gray-700 text-2xl">
                                {item?.title}
                            </h2>
                            <p className="text-gray-500 pt-4" dangerouslySetInnerHTML={{ __html: item?.subtitle }} />
                        </div>
                    </div>
                </div>
            </ModalReguler>
        </>
    )
}