import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import type { Todo as TodoType } from "../store/slices";
import Todo from "./todo";

const Todos = (): JSX.Element => {
  const todos: TodoType[] = useSelector(
    (state: RootState) => state.todos.todos
  );
  const list: JSX.Element[] = todos?.map((todo: TodoType) => (
    <Todo key={todo.id} {...todo} />
  ));
  return <ul>{list}</ul>;
};

export default Todos;
