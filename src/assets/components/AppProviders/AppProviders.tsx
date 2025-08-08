import { TodoContext } from "../contexts/contexts";
import type { Todo } from "../../types";
import { useMemo, useState, type ReactNode } from "react";


interface AppProviderProps {
    children: ReactNode;
}

//creating providers for children, initially had newTodo in the context, but decided to let it be local to
//my todoItem (especially since the instructions say this is what needs to be context)
// mostly copying code from lesson 6
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

    const todoListValue = useMemo(() => ({ addToDo, toggleTodo, deleteTodo, editTodo, clearCompleted}), [todoList])

    return(
        <TodoContext.Provider value={todoListValue}>
            {children}
        </TodoContext.Provider>
    )
}