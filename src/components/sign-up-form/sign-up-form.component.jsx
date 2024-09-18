import {  useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";


const userFormfieldData = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formField, setFormField] = useState(userFormfieldData);
  const { displayName, email, password, confirmPassword } = formField;


  const clearFormField = () => {
    setFormField(userFormfieldData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password doesn't match!");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      createUserDocFromAuth(user, { displayName });
    } catch (e) {
      console.log("Error Message:", e);
    }
    clearFormField();
  };

  return (
    <div className="sign-in-container">
      <h2>Don't have an account? Sign Up</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Enter Name:"
          type="text"
          required
          value={displayName}
          onChange={handleChange}
          name="displayName"
        />
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
        <FormInput
          label="Confirm Password"
          type="password"
          required
          value={confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
        />
        <Button buttonType="inverted" type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUp;
