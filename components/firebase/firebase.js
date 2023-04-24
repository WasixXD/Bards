
import { initializeApp } from "firebase/app"
import config from "./config.json"
import { getFirestore }  from "firebase/firestore"



const app = initializeApp(config)
const db = getFirestore(app)



export { db }