import { styled } from "styled-components";
import { flexCenter } from "../../styles/common";
import { useState } from "react";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";

const MainPage = () => {
  const [signFormState, setSignFormState] = useState("SIGN-IN");

  const tabArr = [
    {
      title: "SIGN-IN",
      isSelected: signFormState === "SIGN-IN",
    },
    {
      title: "SIGN-UP",
      isSelected: signFormState === "SIGN-UP",
    },
  ];

  const onClickTap = (title) => {
    setSignFormState(title);
  };

  return (
    <>
      <Styled.Wrapper>
        <Styled.Container>
          <Styled.Header>
            {tabArr.map(({ isSelected, title }) => (
              <Styled.Tab
                $isSelected={isSelected}
                onClick={() => onClickTap(title)}
              >
                {title}
              </Styled.Tab>
            ))}
          </Styled.Header>
          {signFormState === "SIGN-IN" ? <SignInForm /> : <SignUpForm />}
        </Styled.Container>
      </Styled.Wrapper>
    </>
  );
};
export default MainPage;

const Wrapper = styled.div`
  height: calc(100vh - 60px);
  padding-bottom: 60px;
  ${flexCenter}
  flex-direction: column;
`;

const Container = styled.h1`
  width: 360px;
  border: 1px solid #ccc;
`;

const Header = styled.header`
  background-color: #00c7ae;
  display: flex;
`;

const Tab = styled.div`
  width: 50%;
  cursor: pointer;
  // 자바스크립트 변수 사용을 위해 $를 감싸고 내부에 콜백함수
  // 스타일드 컴포넌트의 콜백함수에는 스타일드 컴포넌트에 전달된 값을 인자로 받아올 수 있다.
  background-color: ${({ $isSelected }) => $isSelected && "#e0e0e0"};
  ${flexCenter};
  &:hover {
    background-color: #e0e0e0;
  }
`;

const Styled = {
  Wrapper,
  Container,
  Header,
  Tab,
};
