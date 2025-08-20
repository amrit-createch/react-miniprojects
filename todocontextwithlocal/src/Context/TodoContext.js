import { useContext,createContext } from "react";

export const todocontext = createContext({
    todos:[],
    addTodo: (todo)=>{},
    updatetodo: (id,todo) =>{},
    deletetodo: (id) => {},
    togglecomplete: (id) => {},
})

export const usetodo = () => {
    return useContext(todocontext)
}

export const TodoProvider = todocontext.Provider