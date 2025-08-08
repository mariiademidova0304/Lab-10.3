export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export interface TodoContextType {
    todoList: Todo[];
    addToDo: (text: string) => void;
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
    editTodo: (id: number, newText: string) => void;
    clearCompleted: () => void;
}

export interface TodoItemProps {
    todo : Todo;
}

export interface TodoListProps {
    todos : Todo[];
}

