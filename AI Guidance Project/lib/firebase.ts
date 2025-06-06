import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB93H867c2UmsPww-5TGNwM3aBIC-tK2ig",
  authDomain: "ai-guidance-builder.firebaseapp.com",
  projectId: "ai-guidance-builder",
  storageBucket: "ai-guidance-builder.appspot.com",
  messagingSenderId: "239415320692",
  appId: "1:239415320692:web:1971dfbde720cfd2e7b121",
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
