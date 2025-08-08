import { TodoContext } from "../contexts/contexts";
import type { TodoContextType, Todo } from "../../types";
import { useState, type ReactNode } from "react";


// export const TodoContext = createContext<TodoContextType>({
// newTodo: null,
// addToDo: (text: string) => {},
// toggleTodo: (id: string | number) => {},
// deleteTodo: (id: string | number) => {},
// editTodo: (id: string | number, newText: string) => {},
// clearCompleted: () => {}
// })

// export interface Todo {
//     id: string | number,
//     text: string,
//     completed: boolean
// }

interface AppProviderProps {
    children: ReactNode;
}

export default function AppProviders({ children }: AppProviderProps) {
    const [todoList, setTodoList] = useState<Todo[]>([]);

    const addToDo = (text: string) => {
        setTodoList(prev =>
            [...prev, { id: Date.now(), text: text, completed: false }]
        )
    }

    const toggleTodo = (id: number) => {
        setTodoList(prev =>
            prev.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        )
    }

    const deleteTodo = (id: number) => {
        setTodoList(prev => 
            prev.filter(todo => 
                todo.id !== id
            )
        )
    }

    const editTodo = (id: number, text: string) => {
        setTodoList(prev => 
            prev.map(todo =>
                todo.id === id ? {...todo, text: text} : todo
            )
        )
    }

    const clearCompleted = () => {
        setTodoList(prev => 
            prev.filter(todo => todo.completed === false)
        )
    }
}