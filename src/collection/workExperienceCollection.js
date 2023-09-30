import { db } from "@/library/firebase"
import { collection, getDocs } from "firebase/firestore"

const workExperiencesRef = collection(db, "work-experiences")

async function getAllWorkExperiences() {
    const querySnapshot = await getDocs(workExperiencesRef)
    const workExperiences = querySnapshot.docs.map((doc) => (doc.data() && ({ id: doc.id, ...doc.data() })))
    return workExperiences
}

async function getFirstWorkExperiences() {
    const querySnapshot = await getDocs(workExperiencesRef)
    const workExperiences = querySnapshot.docs.map((doc) => doc.data() && ({ id: doc.id, ...doc.data() }))[0]
    return workExperiences
}

async function addWorkExperiences(raw) {
    return new Promise((resolve, reject) => {
        addDoc(workExperiencesRef, raw).then((data) => {
            resolve(data)
        }).catch((error) => {
            reject(error)
        })
    })
}

export {
    addWorkExperiences,
    getAllWorkExperiences,
    getFirstWorkExperiences
}