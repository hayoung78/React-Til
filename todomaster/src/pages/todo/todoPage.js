import { useState } from "react";
import { styled } from "styled-components";
import { flexCenter, flexAlignCenter } from "../../styles/common";
import TDButton from "../../components/Button";
import TodoList from "./components/TodoList";
import AddTodoModal from "./components/AddTodoModal";

const TodoPage = () => {
  const [isOpenAddTodoModal, setIsOpenTodoModal] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "example-1",
      content: "example-1",
      state: true,
    },
    {
      id: 2,
      title: "example-2",
      content: "example-2",
      state: true,
    },
    {
      id: 3,
      title: "example-3",
      content: "example-3",
      state: false,
    },
  ]);

  const onClickOpenAddTodoModal = () => {
    setIsOpenTodoModal(true);
  };

  const onClickCloseAddTodoModal = () => {
    setIsOpenTodoModal(false);
  };

  const handleAddTodo = (title, content) => {
    const newTodo = {
      id: Math.floor(Math.random() * 100000000000000),
      title,
      content,
      state: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };
  //handleDeleteTodo =>삭제시 삭제한 아이디가 맞는걸 찾을때
  const handleDeleteTodo = (id) => {
    const deleteTodos = todos.filter((todo) => todo.id !== id);
    setTodos(deleteTodos);
  };
  //수정버튼
  const handleEditTodo = (id, todo) => {
    const _todos = [...todos]; // 할일들을 복사

    let selectedTodoIndex = _todos.findIndex((todo) => todo.id === id);

    _todos[selectedTodoIndex] = { ...todos[selectedTodoIndex], ...todo };
    setTodos(_todos);
  };

  return (
    <>
      {isOpenAddTodoModal && (
        <AddTodoModal
          onClose={onClickCloseAddTodoModal}
          {...{ handleAddTodo }}
        />
      )}
      <Styled.Wrapper>
        <Styled.Container>
          <Styled.Title>TODOLIST</Styled.Title>
          <TodoList todos={todos} {...{ handleDeleteTodo, handleEditTodo }} />

          <TDButton
            size={"medium"}
            variant={"primary"}
            onClick={onClickOpenAddTodoModal}
          >
            추가
          </TDButton>
        </Styled.Container>
      </Styled.Wrapper>
    </>
  );
};
export default TodoPage;

const Wrapper = styled.div`
  height: 100vh;
  ${flexCenter};
`;

const Container = styled.div`
  width: 420px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Title = styled.h1`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text.white};
  padding-left: 32px;
  height: 32px;
  ${flexAlignCenter};
`;

const Styled = {
  Wrapper,
  Container,
  Title,
};
