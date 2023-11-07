import FormInput from "../../../components/input";
import { Form } from "./form.style";
import { style } from "styled-components";
import TDButton from "../../../components/Button";
import useInputs from "../../../hook/useInput";
import formValidate from "../../../helper/form-helper";

const SignUpForm = ({ setSignFormState }) => {
  const [{ email, password, passwordConfirm }, onChangeForm] = useInputs({
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const { disabled, errors } = formValidate({
    email,
    password,
    passwordConfirm,
  });

  const formArray = [
    {
      name: "email",
      label: "이메일",
    },
    {
      name: "password",
      label: "비밀번호",
    },
    {
      name: "passwordConfirm",
      label: "비밀번호 확인",
    },
  ];
  const onClickSignUpBtn = () => {
    alert("welcome");
    setSignFormState("SIGN-IN");
  };

  return (
    <>
      <Form>
        {formArray.map(({ label, name }) => (
          <FormInput
            {...{ name }}
            label={label}
            placeholder={name}
            containerStyle={{
              width: "100%",
            }}
            onChange={onChangeForm}
            error={errors[name]}
          />
        ))}
        <TDButton variant={"primary"} size={"full"} onClick={onClickSignUpBtn}>
          회원가입
        </TDButton>
      </Form>
    </>
  );
};
export default SignUpForm;
