export interface Todo {
    id: number,
    text: string,
    completed: boolean
}

export interface TodoContextType {
    addToDo: (text: string) => void;
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
    editTodo: (id: number, newText: string) => void;
    clearCompleted: () => void;
}