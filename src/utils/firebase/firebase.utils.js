import { initializeApp } from "firebase/app";
import {
  getAuth,
  // signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTL-DswQiAbAm7dhK8VVEE-oGKAqE2ivk",
  authDomain: "ecommerce-webapp-7ba06.firebaseapp.com",
  projectId: "ecommerce-webapp-7ba06",
  storageBucket: "ecommerce-webapp-7ba06.appspot.com",
  messagingSenderId: "603111643624",
  appId: "1:603111643624:web:ad4cbf2f985ab87e8e2c5d",
  measurementId: "G-72TE3K1W2M",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//setting up google auth provider class to use googlePopUp Sign in
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

//exporting getAuth instance
export const auth = getAuth();

//export signInWithGooglePopUp function
export const signInWithGooglePopup = async () =>
  await signInWithPopup(auth, provider);

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
