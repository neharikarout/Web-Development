import { createSlice, nanoid } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
    todos : [{id:1, text: "hello world"}]
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload.text
            }
            state.todos.push(todo)
        },
        removeTodo: (state , action) => {
            state.todos = state.todos.filter((todo) =>
              id !== action.payload)
        }
    } // properties or function
})


export const {addTodo, removeTodo} = todoSlice.actions // for state management

export default todoSlice.reducer // for store