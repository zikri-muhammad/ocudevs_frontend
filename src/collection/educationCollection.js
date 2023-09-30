import { db } from "@/library/firebase"
import { collection, getDocs } from "firebase/firestore"

const educationRef = collection(db, "education")

async function getAllEducation() {
    const querySnapshot = await getDocs(educationRef)
    const education = querySnapshot.docs.map((doc) => (doc.data() && ({ id: doc.id, ...doc.data() })))
    return education
}

async function getFirstEducation() {
    const querySnapshot = await getDocs(educationRef)
    const education = querySnapshot.docs.map((doc) => doc.data() && ({ id: doc.id, ...doc.data() }))[0]
    return education
}

async function addEducation(raw) {
    return new Promise((resolve, reject) => {
        addDoc(educationRef, raw).then((data) => {
            resolve(data)
        }).catch((error) => {
            reject(error)
        })
    })
}

export {
    addEducation,
    getAllEducation,
    getFirstEducation
}