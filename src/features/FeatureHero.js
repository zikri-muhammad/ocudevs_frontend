import { addProfile, deleteProfile, getDetailProfile, updateProfile } from "@/collection/profileCollection";
import { getPhotoProfile } from "@/storage/profileStorage";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function FeatureHero({ profile, images }) {
    const text = [
        "web",
        "apps"
    ]
    const [renderText, setRenderText] = useState(true)
    const [currentPointer, setCurrentPointer] = useState(0)
    // const [profile, setProfile] = useState(null)

    useEffect(() => {
        const interval = setInterval(() => {
            setRenderText(false)
            setCurrentPointer((item) => item + 1)
        }, 3000);

        return () => clearInterval(interval);
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setRenderText(true)
        }, 500);
        currentPointer == text.length && setCurrentPointer(0)
    }, [currentPointer])

    useEffect(() => {
        getPhotoProfile()
    }, [])

    return (
        <section className="container mx-auto px-16 md:px-8">
            <div className="w-full flex items-center h-[calc(100vh-6rem)]">
                <div className="flex justify-around w-full space-x-8">
                    <div className="flex flex-col justify-center px-8 font-poppins">
                        <div className="text-6xl flex flex-col space-y-2 font-poppins-bold max-w-2xl">
                            <div>Hi 👋 </div>
                            <div>My name is</div>
                            <div className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                                {profile?.name}
                            </div>
                            <div className="flex space-x-4 whitespace-nowrap max-w-xl">
                                <span>I build things for</span>
                                <span className="w-36">
                                    <AnimatePresence>
                                        {
                                            renderText && (
                                                <motion.div
                                                    initial={{
                                                        opacity: 0,
                                                    }}
                                                    transition={{
                                                        duration: 0.5
                                                    }}
                                                    animate={{
                                                        opacity: 1
                                                    }}
                                                    exit={{
                                                        opacity: 0,
                                                    }}
                                                >
                                                    <span key="modal" className={`text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary`}>
                                                        {text[currentPointer]}
                                                    </span>
                                                </motion.div>
                                            )
                                        }
                                    </AnimatePresence>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="p-16">
                        <img alt="Choirul Affan Adi Putra" src={images} className="aspect-square w-[24rem] object-contain" />
                    </div>
                </div>
            </div>
        </section>
    )
}