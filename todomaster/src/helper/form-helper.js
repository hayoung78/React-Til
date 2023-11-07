const formValidate = ({ email, password, passwordConfirm }) => {
  let disabled =
    !email.includes("@") || password.length < 8 || password !== passwordConfirm;

  let errors = {
    email: !email.includes("@") && "이메일 양식을 확인해주세요",
    password: password.length < 8 && "비밀번호는 8자리 이상이어야합니다",
    passwordConfirm: password !== passwordConfirm && "비밀번호를 확인해주세요",
  };
  return { disabled, errors };
};

export default formValidate;
