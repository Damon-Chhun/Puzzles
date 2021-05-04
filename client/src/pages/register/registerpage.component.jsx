import Register from "../../components/register/register.component";
import Header from "../../components/header/header.component";

import { RegisterPageContainer } from "./registerpage.styled";

export default function RegisterPage() {
  return (
    <div>
      <Header />
      <RegisterPageContainer>
        <Register />
      </RegisterPageContainer>
    </div>
  );
}
