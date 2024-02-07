import { useContext, useState } from "react";

import {
  signInWithGooglePopup,
  createUserDocFromAuth,
  SignInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import { UserContext } from "../../context/userContext";

const userFormfieldData = {
  email: "",
  password: "",
};

const SignIn = () => {
  const { setCurrentUser } = useContext(UserContext);

  const [formField, setFormField] = useState(userFormfieldData);
  const { email, password } = formField;

  const clearFormField = () => {
    setFormField(userFormfieldData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  //handle google-popup user Authentication
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    const userDocRef = await createUserDocFromAuth(user);
    console.log(userDocRef);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await SignInUserWithEmailAndPassword(email, password);
      setCurrentUser(user);
    } catch (e) {
      switch (e.code) {
        case "auth/wrong-password":
          alert("Incorrect Password");
          break;
        case "auth/user-not-found":
          alert("User Id does not exit, try Signing Up");
          break;
        default:
          console.log(e);
      }
    }
    clearFormField();
  };

  return (
    <div>
      <h2>Already have an account? Sign In</h2>
      <form>
        <FormInput
          label="Enter Email:"
          type="email"
          required
          value={email}
          onChange={handleChange}
          name="email"
        />
        <FormInput
          label="Enter Password"
          type="password"
          required
          value={password}
          onChange={handleChange}
          name="password"
        />
        <button type="submit" onClick={handleSubmit}>
          SignIn
        </button>
        <button type="button" onClick={logGoogleUser}>
          SignIn with Google
        </button>
      </form>
    </div>
  );
};

export default SignIn;
