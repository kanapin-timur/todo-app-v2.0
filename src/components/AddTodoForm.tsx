import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/reducers/todoSlice';

const AddTodoForm = () => {
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addTodo(text));
    setText('');
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex justify-center mb-10">
      <input
        type="text"
        placeholder="Add new todo"
        className="w-1/2 p-2 mr-3 rounded-md outline-none"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button
        type="submit"
        className="bg-violet-500 text-white font-bold px-4 py-2 rounded-md transition duration-300 hover:bg-violet-700"
      >
        Submit
      </button>
    </form>
  );
};

export default AddTodoForm;
