import Login from "../../components/login/login.component";
import Header from "../../components/header/header.component";

import { SignInPageContainer } from "./signin.styled";
import Alerts from '../../components/alerts/alerts';

export default function SignInPage() {
  return (
    <div>
      <Header />
      <SignInPageContainer>
      <Alerts />
        <Login />
      </SignInPageContainer>
    </div>
  );
}
