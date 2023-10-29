import Image from "next/image"
import Link from "next/link"

export default function FeatureFooter() {

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
        },
        {
            id: '412321jdsjs-23232j',
            name: 'Gitlab',
            icon: 'gitlab.svg',
            link: 'https://gitlab.com/zikri-muhammad'
        },
        {
            name: 'Linkedin',
            icon: 'linkedin.svg',
            link: 'https://www.linkedin.com/in/muhammad-zikri17'
        },
        {
            name: 'Facebook',
            icon: 'facebook.svg',
            link: 'https://www.facebook.com/muhammad-zikri17'
        }
    ]

    function year() {
        return new Date().getFullYear()
    }

    return (
        <footer className="w-full bg-gray-100 font-poppins">
            <div className="container mx-auto space-y-2 py-6 px-8 md:px-16">
                <div className="w-full flex justify-between items-center">
                    <div className="w-full text-sm">
                        🅒 {year()} All right reserved.
                    </div>
                    <div className="flex items-center space-x-3">
                        {
                            sosmed.map((item, i) => (
                                <a href={item.link} key={i} target="_blank" className="cursor-pointer w-5 h-5">
                                    <Image alt="social media" src={require(`@/assets/icons/${item.icon}`)} className="w-full h-full object-contain" />
                                </a>
                            ))
                        }
                    </div>
                </div>
                <div className="pt-2 border-t border-gray-800 w-full flex flex-col space-y-2 md:space-y-0 md:flex-row md:justify-between">
                    <div className="flex w-full md:w-auto justify-between md:justify-start text-sm md:space-x-4 items-center">
                        {
                            menu.map((item, i) => (
                                <Link className="bg-clip-text text-gray-600 bg-gradient-to-r from-primary to-secondary hover:text-transparent transition-all" href={item.link} key={i}>{item.name}</Link>
                            ))
                        }
                    </div>
                    <div className="text-gray-600 text-sm">
                        Designed and built by Choirul Affan with Hot Tea & Fried Tempe 🤤
                    </div>
                </div>
            </div>
        </footer>
    )
}