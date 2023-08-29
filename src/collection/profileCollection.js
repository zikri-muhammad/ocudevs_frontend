import { db } from "@/library/firebase";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";

const profileRef = collection(db, "profile");

async function getFirstProfile() {
    const querySnapshot = await getDocs(profileRef)
    const profile = querySnapshot.docs.map((doc) => doc.data() && ({ id: doc.id, ...doc.data() }))[0]
    return profile
}

async function getAllProfile() {
    const querySnapshot = await getDocs(profileRef)
    const profile = querySnapshot.docs.map((doc) => (doc.data() && ({ id: doc.id, ...doc.data() })))
    return profile
}

async function getDetailProfile(profileId) {
    return new Promise(async (resolve, reject) => {
        const profile = await getDoc(doc(db, "profile", profileId))
        if (profile.exists()) {
            resolve(profile.data())
        } else {
            reject({
                message: "Data tidak ditemukan"
            })
        }
    })
}

async function addProfile(raw) {
    return new Promise((resolve, reject) => {
        addDoc(profileRef, raw).then((data) => {
            resolve(data)
        }).catch((error) => {
            reject(error)
        })
    })
}

async function deleteProfile(id) {
    return new Promise((resolve, reject) => {
        deleteDoc(doc(db, "profile", id)).then((data) => {
            resolve(data)
        }).catch((error) => {
            reject(error)
        })
    })
}

async function updateProfile(id, raw) {
    return new Promise((resolve, reject) => {
        updateDoc(doc(db, "profile", id), raw).then((data) => {
            resolve(data)
        }).catch((error) => {
            reject(error)
        })
    })
}

export {
    getAllProfile,
    getFirstProfile,
    updateProfile,
    addProfile,
    deleteProfile,
    getDetailProfile
}
