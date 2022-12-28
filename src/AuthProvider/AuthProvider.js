import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.init";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

const createUser = (email, pass) => {
  return createUserWithEmailAndPassword(auth, email, pass);
};
const signInUser = (email, pass) => {
  return signInWithEmailAndPassword(auth, email, pass);
};
const updateUser = (profile) => {
  return updateProfile(auth.currentUser, profile);
};
const googleSingIn = ()=>{
   return signInWithPopup(auth,googleProvider)
}
const logOut = () => {
  return signOut(auth);
};

export const authFunction = {
  createUser,
  auth,
  onAuthStateChanged,
  logOut,
  updateUser,
  signInUser,
  googleSingIn
};
