import BaseNavbar from "@/components/Base/Navbar";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import FeatureMenuMobile from "./FeatureMenuMobile";

export default function FeatureNavbar() {

    const [toggle, setToggle] = useState(false)

    const menu = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "About",
            link: "/about"
        },
        {
            name: "Tech Stack",
            link: "/tech-stack"
        },
        {
            name: "Projects",
            link: "/project"
        },
        {
            name: "Contact",
            link: "/contact"
        }
    ]

    const sosmed = [ // collection sosmed
        {
            id: '412321jdsjs-23232j',
            name: 'Github',
            icon: 'github.svg',
            link: 'https://github.com/zikri-muhammad'
        }
    ]

    return (
        <BaseNavbar>
            <div className="w-full flex justify-between items-center font-poppins px-8 lg:px-16">
                <Link href="/">
                    <Image src={require("@/assets/icons/logo.svg")} alt="af2.tech" />
                </Link>
                <div className="hidden md:flex space-x-8 items-center">
                    {
                        menu.map((item, i) => (
                            <Link className="bg-clip-text text-gray-600 bg-gradient-to-r from-primary to-secondary hover:text-transparent transition-all" key={i} href={item.link} >
                                {item.name}
                            </Link>
                        ))
                    }
                </div>
                <div className="flex items-center space-x-6">
                    {
                        sosmed.map((item, i) => (
                            <a href={item.link} key={i} target="_blank" className="cursor-pointer">
                                <Image alt="social media" src={require(`@/assets/icons/${item.icon}`)} />
                            </a>
                        ))
                    }
                    <div onClick={() => setToggle(!toggle)} className="md:hidden transition-all cursor-pointer hover:bg-gray-200 rounded-full">
                        {
                            toggle ? (
                                <Image alt="toggle" src={require("@/assets/icons/times.svg")} />
                            ) : (
                                <Image alt="toggle" src={require("@/assets/icons/more.svg")} />
                            )
                        }
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {
                    toggle && <FeatureMenuMobile clicked={() => setToggle(false)} menu={menu} />
                }
            </AnimatePresence>
        </BaseNavbar>
    )
}