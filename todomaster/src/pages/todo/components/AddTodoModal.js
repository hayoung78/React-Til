import { styled } from "styled-components";
import { flexAlignCenter, flexCenter } from "../../../styles/common";
import TDButton from "../../../components/Button";

const AddTodoModal = ({ onClose, handleAddTodo }) => {
  const onAddTodo = (e) => {
    e.preventDefault();
    handleAddTodo(e.target.title.value, e.target.content.value);
    onClose();
  };
  return (
    <>
      <Styled.Modal>
        <Styled.Form onSubmit={onAddTodo}>
          <Styled.Title>
            <h1>ADD TODO List</h1>
            <button type="button" onClick={onClose}>
              응 닫을꺼야
            </button>
          </Styled.Title>
          <Styled.Content>
            <input placeholder="제목을 입력하라." name="title" />
            <textarea placeholder="할 일을 입력하라." name="content" />
          </Styled.Content>
          <TDButton varient={"primary"} shape={"shape"} size={"small"}>
            추 가 염
          </TDButton>
        </Styled.Form>
      </Styled.Modal>
    </>
  );
};
export default AddTodoModal;

const Modal = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

const Form = styled.form`
  width: 480px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  padding: 32px;
`;

const Title = styled.div`
  font-size: 24px;
  ${flexAlignCenter};
  justify-content: space-between;

  & > button {
    border: none;
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

const Content = styled.div`
  ${flexCenter};
  margin-top: 16px;
  flex-direction: column;

  & > input {
    width: 100%;
    height: 40px;
    border: none;
    outline: none;
    border-radius: 8px;
    padding: 0 16px;
    margin-bottom: 16px;
  }

  & > textarea {
    width: 100%;
    height: 200px;
    border: none;
    outline: none;
    border-radius: 8px;
    padding: 16px;
  }
`;

const Styled = {
  Modal,
  Form,
  Content,
  Title,
};
