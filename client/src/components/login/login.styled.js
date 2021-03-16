import styled from "styled-components";

export const LoginComponentContainer = styled.div`
  height: 650px;
  width: 450px;
  border: 1px solid black;
  border-radius: 12px;
  background: white;
  display: flex;
  flex-wrap: wrap;
  flex-direction column;
  justify-content:flex-start;
  align-items: center;
`;

export const EmailAndPassword = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.h2`
  text-align: center;
  width: 100%;
  height: 5%;
`;

export const InputContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const InputField = styled.input`
  height: 35px;
  border-radius: 12px;
  background: #f0ffeb;
  font-size: 1.2rem;
  color: black;
`;

export const InputName = styled.label`
  color: black;
  text-decoration: bold;
`;

export const SignInInput = styled.input`
  border-radius: 12px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  font-size: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  color: #010606;
  width: 90%;
  margin-left: 15px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: black;
    color: #01bf71;
  }
`;
