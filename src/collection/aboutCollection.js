import { db } from "@/library/firebase"
import { collection, getDocs } from "firebase/firestore"

const aboutRef = collection(db, "about")

async function getAllAbout() {
    const querySnapshot = await getDocs(aboutRef)
    const about = querySnapshot.docs.map((doc) => (doc.data() && ({ id: doc.id, ...doc.data() })))
    return about
}

async function getFirstAbout() {
    const querySnapshot = await getDocs(aboutRef)
    const about = querySnapshot.docs.map((doc) => doc.data() && ({ id: doc.id, ...doc.data() }))[0]
    return about
}

async function addAbout(raw) {
    return new Promise((resolve, reject) => {
        addDoc(aboutRef, raw).then((data) => {
            resolve(data)
        }).catch((error) => {
            reject(error)
        })
    })
}

export {
    addAbout,
    getAllAbout,
    getFirstAbout
}