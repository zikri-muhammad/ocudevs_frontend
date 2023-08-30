import { storage } from "@/library/firebase"
import { getDownloadURL, ref } from "firebase/storage"

async function getImageTechStack(path) {
    const techStackRef = ref(storage, path)
    const url = await getDownloadURL(techStackRef)
    return url
}

export {
    getImageTechStack
}