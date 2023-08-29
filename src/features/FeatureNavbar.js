import BaseNavbar from "@/components/Base/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function FeatureNavbar() {

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
            link: 'https://github.com/caffanap'
        },
        // {
        //     name: 'Linkedin',
        //     icon: 'linkedin.svg',
        //     link: 'https://www.linkedin.com/in/caffanap'
        // }
    ]

    // firebase.collection("sosmed").findId("412321jdsjs-23232j").update({name: "affan"})
    // firebase.collection("sosmed").create({ name: "Github", icon: "github.svg" })
    // firebase.collection("sosmed").findId("4232").delete()
    // firebase.collection("sosmed").all()
    // firebase.collection("sosmed").findId("du12312").get()

    // firebase.collection("sosmed").create({ name: "Github", icon: "github.svg", image: "object baru gambar" })

    return (
        <BaseNavbar>
            <div className="w-full flex justify-between items-center font-poppins">
                <Image src={require("@/assets/icons/logo.svg")} alt="af2.tech" />
                <div className="flex space-x-8 items-center">
                    {
                        menu.map((item, i) => (
                            <Link className="bg-clip-text text-gray-700 bg-gradient-to-r from-primary to-secondary hover:text-transparent transition-all" key={i} href={item.link} >
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
                </div>
            </div>
        </BaseNavbar>
    )
}