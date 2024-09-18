import { useState } from "react";

import {
  signInWithGooglePopup,
  createUserDocFromAuth,
  SignInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import "../sign-in-form/sign-in-form.styles.scss";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const userFormfieldData = {
  email: "",
  password: "",
};

const SignIn = () => {
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
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await SignInUserWithEmailAndPassword(email, password);
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
    <div className="sign-in-container">
      <h2>Already have an account? Sign In</h2>
      <span>Sign In with your email and password</span>
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
        <div className="buttons-container">
          <Button type="submit" onClick={handleSubmit}>
            SignIn
          </Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google SignIn
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
