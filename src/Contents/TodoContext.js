import { createContext, useContext } from "react";

export const TodoContext = createContext({
    // properties
    todos:[
        {
            id:1,
            todo:"Todo mssg",
            complete: false,
        }
    ],
    // Write here there functionality without definition
    addTodo: (todo) => {},
    updatedTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = ()=> {
    return useContext(TodoContext);
}

export const Todoprovider = TodoContext.Provider