import Register from "../../components/register/register.component";
import Header from "../../components/header/header.component";
import Alerts from '../../components/alerts/alerts'

import { RegisterPageContainer } from "./registerpage.styled";

export default function RegisterPage() {
  return (
    <div>
      <Header />
      <RegisterPageContainer>
      <Alerts />
        <Register />
      </RegisterPageContainer>
    </div>
  );
}
