import React, { useMemo } from "react";
import type { Todo as TodoTypes } from "../store/slices";
import Button from "./button";
import Input from "./input";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../store/slices/todo-slice";

const Todo = ({
  id,
  title,
  description,
  completed,
}: TodoTypes): JSX.Element => {
  const classes = useMemo(
    () => ({
      list: "p-2 rounded-lg",
      body: "flex items-center flex-row justify-between",
      content: `p-2 ${completed ? "line-through text-gray-400" : "text-black"}`,
    }),
    [completed]
  );

  const dispatch = useDispatch();

  const onMarkComplete = (): void => {
    dispatch(toggleTodo(id));
  };

  const onDelete = (): void => {
    dispatch(deleteTodo(id));
  };

  return (
    <li className={classes.list}>
      <div className={classes.body}>
        <div className="p-2">
          <Input
            type="checkbox"
            className="h-6 w-6 "
            value="true"
            checked={completed}
            onChange={onMarkComplete}
          />
        </div>
        <div className={classes.content}>
          <p className="text-lg">{title}</p>
          <p className="text-base">{description}</p>
        </div>
        <Button
          label="Remove"
          variant="primary"
          icon={<XCircleIcon className="w-6 h-6" />}
          onClick={onDelete}
        />
      </div>
      <hr className="mt-2" />
    </li>
  );
};

export default Todo;
