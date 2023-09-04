import { db } from "@/library/firebase"
import { collection, getDocs } from "firebase/firestore"

const portofolioRef = collection(db, "portofolio")

async function getAllPortofolio() {
    const querySnapshot = await getDocs(portofolioRef)
    const portofolio = querySnapshot.docs.map((doc) => (doc.data() && ({ id: doc.id, ...doc.data() })))
    return portofolio
}

export {
    getAllPortofolio
}