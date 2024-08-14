import React from "react";

export const todoContext = React.createContext({
    todos: [
        {
          id: 1,
          todo: 'Todo Message',
          completed: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleTodo: (id) => {},
})

export const TodoContextProvider = todoContext.Provider

export default function useTodoContext() {
    return React.useContext(todoContext)
}