import React from 'react';
import { FaXmark } from 'react-icons/fa6';
import { ITodos } from '../models/ITodos';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from '../store/reducers/todoSlice';

const TodoItem = ({ id, title, completed }: ITodos) => {
  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <li className="py-4 flex justify-between">
      <div>
        <input
          type="checkbox"
          checked={completed}
          className="mr-3 accent-violet-500"
          onChange={handleCompleteClick}
        />
        <span className="text-white text-lg">{title}</span>
      </div>
      <button onClick={handleDeleteClick}>
        <FaXmark color="red" />
      </button>
    </li>
  );
};

export default TodoItem;
