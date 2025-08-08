import type { TodoContextType } from "../../types";
import { createContext } from "react";


export const TodoContext = createContext<TodoContextType>({
addToDo: () => {},
toggleTodo: () => {},
deleteTodo: () => {},
editTodo: () => {},
clearCompleted: () => {}
})