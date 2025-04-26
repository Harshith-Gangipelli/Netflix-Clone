// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc } from "firebase/firestore";
import { signInWithEmailAndPassword ,signOut} from "firebase/auth";
import { toast } from "react-toastify";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWPYBiBAWW4TUnYlBGnIIU87hgbOJxB6o",
  authDomain: "netflix-clone-22d40.firebaseapp.com",
  projectId: "netflix-clone-22d40",
  storageBucket: "netflix-clone-22d40.firebasestorage.app",
  messagingSenderId: "653377303961",
  appId: "1:653377303961:web:95ab1bf59597d976088f08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);
const db=getFirestore(app);

const signup=async(name,email,password)=>{
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: name,
        authProvider: "local",
        email: email,
        });
    } catch (error) {
        console.error("Error signing up:", error);
        toast.error(error.code.split("/")[1].split("-").join(" "));
    }

}

const login= async(email,password)=>{
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log("Error logging in:", error);
        toast.error(error.code.split("/")[1].split("-").join(" "));
    }
}
const logout=()=>{
    signOut(auth);
}
export {auth,db,signup,login,logout};