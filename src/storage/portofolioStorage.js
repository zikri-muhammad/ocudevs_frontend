import { storage } from "@/library/firebase"
import { getDownloadURL, ref } from "firebase/storage"

const portofolioRef = ref(storage, "/images/portofolio")

async function getImageBannerPortofolio(id) {
    const imageBanner = ref(portofolioRef, `${id}/banner.png`)
    const url = await getDownloadURL(imageBanner)
    return url
}

export {
    getImageBannerPortofolio
}