import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addTodoAPI, deleteTodoAPI, getTodosAPI, updateTodoAPI } from "./todosAPI";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
    return await getTodosAPI()
})

export const addTodo = createAsyncThunk("todos/addTodo", async (todo) => {
    return await addTodoAPI(todo)
})

export const updateTodo = createAsyncThunk("todos/updateTodo", async (todo) => {
    return await updateTodoAPI(todo)
})

export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
    return await deleteTodoAPI(id)
})

const todosSlice = createSlice({
    name: "todos",
    initialState:{
        items:[]
    },
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(fetchTodos.fulfilled, (state, action) => {
            state.items = action.payload
        })
        .addCase(addTodo.fulfilled, (state, action) => {
            state.items.unshift(action.payload)
        })
        .addCase(updateTodo.fulfilled, (state, action) => {
            const updated = action.payload
            const index = state.items.findIndex((item) => item.id == updated.id)
            if (index !== -1){
                state.items[index] = updated
            }
        })
        .addCase(deleteTodo.fulfilled, (state, action) => {
            state.items = state.items.filter((item) => item.id != action.payload)
        })
    },
})

export default todosSlice.reducer