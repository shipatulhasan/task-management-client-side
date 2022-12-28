import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.init";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

const createUser = (email, pass) => {
  return createUserWithEmailAndPassword(auth, email, pass);
};
const singupUser = (email, pass) => {
  return signInWithEmailAndPassword(auth, email, pass);
};
const updateUser = (profile) => {
  return updateProfile(auth.currentUser, profile);
};
const googleSingIn = ()=>{
   return signInWithPopup(auth,googleProvider)
}
const logOut = () => {
  return updateProfile(auth);
};

export const authFunction = {
  createUser,
  auth,
  onAuthStateChanged,
  logOut,
  updateUser,
  singupUser,
  googleSingIn
};
