import styled from "styled-components";

export const PostReviewContainer = styled.div`
  border: solid 3px #ececec;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: space-around;
  flex-wrap: nowrap;
  background-color: white;
  margin-bottom: 20px;

  height: 200px;
  width: 100%;
  padding: 10px;
`;

export const H3Wrapper = styled.div`
  //border: dashed 5px green;
  padding-left: 10px;
`;

export const H3Text = styled.h3`
  font-size: 1.3vh;
  letter-spacing: 0.2rem;
`;

export const FormContainer = styled.form`
  //border: dashed 5px blue;
  height: 65%;
`;

export const TextArea = styled.textarea`
  //border: dashed 3px pink;
  width: 100%;
  height: 100%;
  font-size: 1.3vh;
  overflow-y: scroll;
  padding: 10px;
`;

export const Input = styled.input`
  //border: dashed 5px brown;
  width: 20vw;
  height: 20%;
  letter-spacing: 0.2rem;
  border-radius: 12px;
  border: none;

  background-color: #01bf71;
  color: black;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: black;
    color: #01bf71;
  }
`;
