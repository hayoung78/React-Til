//할일들 목록=> todolist 에 보여지는곳
import { styled } from "styled-components";
import { flexAlignCenter } from "../../../styles/common";
import { useState, useRef } from "react";

const OneTodo = ({ todo, handleDeleteTodo, handleEditTodo }) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const editTextArea = useRef(null);
  //null 넣은 이유: 빈공간을 만들어줌
  const onDeleteTodo = () => {
    if (window.confirm("정말 삭제하실?")) {
      handleDeleteTodo(todo.id);
    }
  };

  const onEditTodo = () => {
    if (!isEditMode) return setIsEditMode(true);
    handleEditTodo(todo.id, { content: editTextArea.current.value });
    setIsEditMode(false);
  };

  const onEditState = () => {
    handleEditTodo(todo.id, { state: !todo.state });
  };
  return (
    <>
      <Styled.Wrapper>
        <Styled.Header>
          <div>
            <button onClick={onEditState}>
              {todo.state ? "완료" : "미완료"}
            </button>
            {todo.title}
          </div>
          <div>
            <button onClick={onEditTodo}>{isEditMode ? "완료" : "수정"}</button>
            <button onClick={onDeleteTodo}>삭제</button>
          </div>
        </Styled.Header>
        <Styled.Content $state={todo.state}>
          {isEditMode ? (
            <textarea defaultValue={todo.content} ref={editTextArea}></textarea>
          ) : (
            todo.content
          )}
        </Styled.Content>
      </Styled.Wrapper>
    </>
  );
};
export default OneTodo;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid #999;
  margin: 16px 0;
  border-radius: 8px;
  background-color: ${({ $state, theme }) =>
    $state ? theme.colors.gray[100] : theme.colors.white};
`;

const Header = styled.div`
  border-bottom: 1px dotted #999;
  ${flexAlignCenter};
  justify-content: space-between;
  padding: 8px 16px;
  height: 48px;
`;

const Content = styled.div`
  padding: 16px;
  text-decoration: ${({ $state }) => ($state ? "line-through" : "none")};
`;

const Styled = {
  Wrapper,
  Header,
  Content,
};
