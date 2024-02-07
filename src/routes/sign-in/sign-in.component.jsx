import {
  signInWithGooglePopup,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    const userDocRef = await createUserDocFromAuth(user);
  };

  return (
    <div>
      SignIn <button onClick={logGoogleUser}>Click to SignIn</button>
    </div>
  );
};

export default SignIn;
