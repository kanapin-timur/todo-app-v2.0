import React from 'react';
import TodoItem from './TodoItem';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import {
  deleteAllTodos,
  deleteCompletedTodos,
} from '../store/reducers/todoSlice';

const TodoList = () => {
  const { todos } = useTypedSelector((state) => state);

  const dispatch = useDispatch();

  const handleDeleteAllClick = () => {
    dispatch(deleteAllTodos());
  };

  const handleDeleteCompletedTodos = () => {
    dispatch(deleteCompletedTodos());
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <ul className="w-[60%] mb-4">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
            />
          ))}
        </ul>
        {todos.length > 0 && (
          <>
            <div className="w-[60%] text-left flex gap-3 mb-4">
              <button
                className="bg-violet-500 text-white font-bold px-4 py-2 rounded-md transition duration-300 hover:bg-violet-700"
                onClick={handleDeleteAllClick}
              >
                Clear all
              </button>
              <button
                className="bg-violet-500 text-white font-bold px-4 py-2 rounded-md transition duration-300 hover:bg-violet-700"
                onClick={handleDeleteCompletedTodos}
              >
                Clear completed
              </button>
            </div>
            <div className="w-[60%] text-left">
              <p className="text-white text-2xl font-bold">{`Total todos completed: ${
                todos.filter((todo) => todo.completed === true).length
              }`}</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default TodoList;
