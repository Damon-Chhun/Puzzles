import Login from "../../components/login/login.component";
import Header from "../../components/header/header.component";

import { SignInPageContainer } from "./signin.styled";

export default function SignInPage() {
  return (
    <div>
      <Header />
      <SignInPageContainer>
        <Login />
      </SignInPageContainer>
    </div>
  );
}
