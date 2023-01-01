import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos", //redux devtoolsta görünen slice adı..
  initialState: [
    { id: 1, title: "todo1", completed: false },
    { id: 2, title: "todo2", completed: false },
    { id: 3, title: "todo3", completed: true },
    { id: 4, title: "todo4", completed: false },
    { id: 5, title: "todo5", completed: false },
  ],
  reducers: {
    addTodo: (state, action) => {
      const yeniIs = {
        id: new Date(),
        title: action.payload.title,
        completed: false,
      };
      state.push(yeniIs);
    },
    tamamlamaDurumuDegistir: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    isSil: (state, action) => {
      return state.filter((is) => action.payload.id !== is.id);
    },
  },
});

export const { addTodo, tamamlamaDurumuDegistir, isSil } = todoSlice.actions;

export default todoSlice.reducer;
