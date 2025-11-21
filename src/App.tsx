import React from 'react';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="w-1/2 py-4 mx-auto my-auto text-center">
      <h1 className="font-bold mb-10 text-4xl text-white">Todo List</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
