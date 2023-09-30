import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

export default function ModalReguler({ close, children, className }) {

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                close && close()
            }
        };
        window.addEventListener('keydown', handleEsc);
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);

    return (
        <div className="fixed z-20 m-auto inset-0 overflow-hidden h-full w-full flex justify-center items-center">
            <div className="absolute -z-10 w-full h-full backdrop-blur-lg" onClick={close} />
            <motion.div
                key="modal"
                initial={{
                    opacity: 0.2,
                    scale: 0.5
                }}
                transition={{
                    duration: 0.15
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    bottom: 0
                }}
                exit={{
                    opacity: 0,
                    scale: 0.5,
                }}
                className={`shadow-xl flex flex-col rounded-xl mx-4 md:mx-0 bg-white w-[70%] container h-auto max-h-[80vh] mt-[4rem] overflow-hidden ${className}`}>
                <div className="flex items-center px-5 justify-between bg-gradient-to-r from-primary to-secondary w-full py-2">
                    <div className="text-white pl-1 text-lg font-semibold">
                        Project Detail
                    </div>
                    <div onClick={close} className="transition-all h-10 w-10 text-white p-1 hover:rounded-full hover:bg-transparent/20 cursor-pointer">
                        <Image alt="times" src={require("@/assets/icons/times_white.svg")} className="w-full h-full" />
                    </div>
                </div>
                <div className="w-full max-h-[70vh] px-6 py-6 space-y-4 overflow-y-auto scrollbar-thin scrollbar-thumb-info scrollbar-track-secondary">
                    {children}
                </div>
            </motion.div>
        </div>
    )
}