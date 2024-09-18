import SignIn from "../../components/sign-in-form/sign-in-form";
import SignUp from "../../components/sign-up-form/sign-up-form.component";

import '../../routes/authentication/authentication.styles.scss';

const Auth = () => {
  return (
    <div className="authentication-container">
      {/* <h2>Sign In</h2> */}
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Auth;
