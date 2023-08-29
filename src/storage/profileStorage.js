import { storage } from "@/library/firebase"
import { getDownloadURL, ref } from "firebase/storage"

async function getPhotoProfile() {
    const profileRef = ref(storage, "images/foto.svg")
    const url = await getDownloadURL(profileRef)
    return url
}

export {
    getPhotoProfile
}