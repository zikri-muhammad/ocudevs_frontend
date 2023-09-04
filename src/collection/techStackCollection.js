import { db } from "@/library/firebase"
import { getImageTechStack } from "@/storage/techStackStorage"
import { collection, getDocs } from "firebase/firestore"

const techStackRef = collection(db, "tech-stack")

async function getAllTechStack() {
    const querySnapshot = await getDocs(techStackRef)
    
    const techStack = querySnapshot.docs.map((doc) => {
        return doc.data() && ({
            id: doc.id,
            ...doc.data()
        })
    })

    const withImage = techStack.map(async (item) => {
        const image = await getImageTechStack(item.image)
        if (!image) return {
            ...item
        }

        return {
            ...item,
            source: image,
        }
    })

    const data = Promise.all(withImage)
    return data
}


export {
    getAllTechStack
}