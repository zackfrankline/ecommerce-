import { initializeApp } from "firebase/app";
import {
  getAuth,
  // signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithRedirect
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIRBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//setting up google auth provider class to use googlePopUp Sign in
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

//exporting getAuth instance
export const auth = getAuth();

//export signInWithGooglePopUp function
export const signInWithGooglePopup = async () =>
  await signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = async() => await signInWithRedirect(auth,googleProvider) 

//export SignUp with Email and Password
export const createAuthUserWithEmailAndPassword = async (email, password) =>
  await createUserWithEmailAndPassword(auth, email, password);

//export SignIn with Email and Password
export const SignInUserWithEmailAndPassword = async (email, password) => await signInWithEmailAndPassword(auth,email,password);

//export Sign Out 
export const signOutUser = async() => await signOut(auth);

//export firestore db instance
export const db = getFirestore();

//
export const createUserDocFromAuth = async (userAuth,defaultData={}) => {
  if (!userAuth) return;
  //Referencing to a Doc in DB which is not initialised
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...defaultData,
      });
    } catch (err) {
      console.log("error message:" + err);
    }
  }
  return userDocRef;
};

//Authentication Observer
export const onAuthUserStateChanged = (callback) => onAuthStateChanged(auth, callback);
