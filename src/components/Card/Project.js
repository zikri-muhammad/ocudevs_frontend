import Image from "next/image";

export default function CardProject({ title, subtitle, livePreview, previewCode }) {

    function goToLivePreview() {
        if (!livePreview) return
        window.open(livePreview, "_blank")
    }

    function goToPreviewCode() {
        if (!previewCode) return
        window.open(previewCode, "_blank")
    }

    return (
        <div className="bg-white transition-all hover:opacity-70 cursor-pointer overflow-hidden rounded-xl drop-shadow-2xl h-[26rem] w-full">
            <div className="w-full bg-gray-100 h-[12rem]"></div>
            <div className="w-full p-4 space-y-3">
                <div className="w-full text-xl h-[3.5rem] font-semibold line-clamp-2">
                    {title}
                </div>
                <div className="text-gray-600 h-[5.2rem] text-sm font-poppins-light line-clamp-4">
                    {subtitle}
                </div>
                <div className="flex justify-between items-center">
                    <div onClick={goToLivePreview} className="flex space-x-1 cursor-pointer items-center">
                        <div className="h-4 w-4">
                            <Image alt="link" className="w-full h-full object-contain" src={require("@/assets/icons/link-chain.svg")} />
                        </div>
                        <div className="text-xs underline">
                            Live Preview
                        </div>
                    </div>
                    <div onClick={goToPreviewCode} className="flex space-x-1 cursor-pointer items-center">
                        <div className="h-4 w-4">
                            <Image alt="link" className="w-full h-full object-contain" src={require("@/assets/icons/small-github.svg")} />
                        </div>
                        <div className="text-xs underline">
                            View Code
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}