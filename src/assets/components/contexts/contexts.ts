import type { TodoContextType } from "../../types";
import { createContext } from "react";


// export interface TodoContextType {
//     currentTodo : Todo,
//     addToDo: (text: string) => void;
//     toggleTodo: (id: string | number) => void;
//     deleteTodo: (id: string | number) => void;
//     editTodo: (id: string | number, newText: string) => void;
//     clearCompleted: () => void;
// }

export const TodoContext = createContext<TodoContextType>({
addToDo: (text: string) => {},
toggleTodo: (id: number) => {},
deleteTodo: (id: number) => {},
editTodo: (id: number, newText: string) => {},
clearCompleted: () => {}
})