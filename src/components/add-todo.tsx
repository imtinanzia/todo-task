import React, { useState } from "react";
import Input from "./input";
import Button from "./button";
import Textarea from "./textarea";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/slices/todo-slice";

interface Fields {
  title: string;
  description: string;
}

const AddTodo = (): JSX.Element => {
  const [fields, setFields] = useState<Fields>({
    title: "",
    description: "",
  });
  const dispatch = useDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(addTodo(fields));
    setFields({ title: "", description: "" });
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };

  return (
    <form className="mt-4 flex flex-col gap-4" onSubmit={onSubmit}>
      <div className="flex flex-col w-full gap-4">
        <Input
          className="focus:outline-none  border-b-2 border-gray-500 text-black w-full pb-2"
          type="text"
          placeholder="Enter your task here"
          value={fields.title}
          onChange={onChange}
          name="title"
        />
        <Textarea
          rows={5}
          cols={10}
          placeholder="Enter Description Optional"
          className="focus:outline-none border-b-2 border-gray-500 text-black "
          value={fields.description}
          onChange={onChange}
          name="description"
        />
      </div>

      <Button
        className="flex items-center justify-center"
        variant="secondary"
        label="Add"
        type="submit"
        icon={<PlusCircleIcon className="w-6 h-6" />}
      />
    </form>
  );
};

export type { Fields };
export default AddTodo;
