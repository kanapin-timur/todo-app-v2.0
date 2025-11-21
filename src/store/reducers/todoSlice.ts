import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITodos } from '../../models/ITodos';

const initialState: ITodos[] = [];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload,
        completed: false,
      };

      state.push(newTodo);
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    deleteAllTodos: () => {
      return [];
    },
    deleteCompletedTodos: (state) => {
      return state.filter((todo) => todo.completed === false);
    },
    toggleComplete: (
      state,
      action: PayloadAction<{ id: number; completed: boolean }>
    ) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
  },
});

export const {
  addTodo,
  toggleComplete,
  deleteTodo,
  deleteAllTodos,
  deleteCompletedTodos,
} = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
