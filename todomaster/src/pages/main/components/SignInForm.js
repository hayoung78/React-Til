import { Form } from "./form.style";
import FormInput from "../../../components/input";
import TDButton from "../../../components/Button";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const navigate = useNavigate(); //투두리스트 넘기기 선언.

  const formArr = [
    {
      name: "email",
      label: "이메일",
    },
    {
      name: "password",
      label: "비밀번호",
    },
  ];
  const onClickSignUpBtn = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    console.log(e.target);
    console.log(email.value, password.value);
    if (email.value === "test@test.com" && password.value === "test") {
      return navigate("/todo/3");
    }
    alert("이메일 또는 비밀번호를 확인하셈");
    password.value = "";
  };

  return (
    <>
      <Form onSubmit={onClickSignUpBtn}>
        {formArr.map(({ label, name }) => (
          <FormInput
            name={name}
            label={label}
            placeholder={name}
            containerStyle={{
              width: "100%",
            }}
          />
        ))}
        <TDButton variant={"primary"} size={"full"}>
          로그인
        </TDButton>
      </Form>
    </>
  );
};
export default SignInForm;
