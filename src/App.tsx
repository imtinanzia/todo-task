import React from "react";
import { Todos, AddTodo, Button } from "./components";
import { useDispatch } from "react-redux";
import {
  clearCompleted,
  resetTodos,
  getBackClearedTodos,
} from "./store/slices/todo-slice";

const App = () => {
  const dispatch = useDispatch();

  const onClear = (): void => {
    dispatch(clearCompleted());
  };

  const onReset = (): void => {
    dispatch(resetTodos());
  };
  const getTodosCleared = (): void => {
    dispatch(getBackClearedTodos());
  };

  return (
    <div className="w-full h-screen bg-gray-100 pt-8">
      <div className="bg-white p-3 max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold">ToDo App</h1>
          <AddTodo />
        </div>
        <div className="mt-8">
          <Todos />
        </div>
        <div className="mt-8 flex items-center gap-2">
          <Button
            variant="primary"
            label="Clear Completed Task"
            onClick={onClear}
          />
          <Button
            variant="secondary"
            label="Get Cleared Todos Back"
            onClick={getTodosCleared}
          />

          <Button
            variant="tertiary"
            label="Reset Todo List"
            onClick={onReset}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
