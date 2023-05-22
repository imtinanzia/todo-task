import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Fields } from "../../components/add-todo";

interface Todo {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
  clearedTodos: Todo[];
}

const initialState: TodoState = {
  todos: [
    {
      id: 1,
      title: "quis ut nam facilis et officia qui",
      description:
        "quis ut nam facilis et officia qui quis ut nam facilis et officia qui",
      completed: false,
    },
    {
      id: 2,
      title: "fugiat veniam minus",
      description:
        "quis ut nam facilis et officia qui quis ut nam facilis et officia qui",

      completed: false,
    },
    {
      id: 3,
      title: "et porro tempora",
      description:
        "quis ut nam facilis et officia qui quis ut nam facilis et officia qui",

      completed: true,
    },
  ],
  clearedTodos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Fields>) => {
      const newTodo: Todo = {
        id: state.todos?.length + 1,
        title: action.payload.title,
        description: action.payload.description,
        completed: false,
      };
      state.todos = [newTodo, ...state.todos];
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todoIndex = state.todos.findIndex(
        (todo: Todo) => todo.id === action.payload
      );
      if (todoIndex !== -1) {
        const todo = state.todos[todoIndex];
        todo.completed = !todo.completed;

        // Reorder the todos to move completed todos to the bottom
        const completedTodos = state.todos.filter((todo) => todo.completed);
        const incompleteTodos = state.todos.filter((todo) => !todo.completed);
        state.todos = incompleteTodos.concat(completedTodos);
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    clearCompleted: (state) => {
      state.clearedTodos = state.todos.filter((todo) => todo.completed);
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
    resetTodos: (state) => {
      state.todos = [];
      state.clearedTodos = [];
    },
    getBackClearedTodos: (state) => {
      state.todos.push(...state.clearedTodos);
      state.clearedTodos = [];
    },
  },
});

export const {
  addTodo,
  toggleTodo,
  deleteTodo,
  clearCompleted,
  resetTodos,
  getBackClearedTodos,
} = todoSlice.actions;
export type { Todo };
export default todoSlice.reducer;
