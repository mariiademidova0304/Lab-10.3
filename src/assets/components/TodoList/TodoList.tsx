import { useContext } from "react";
import { TodoContext } from "../contexts/contexts";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import type { TodoListProps } from "../../types";
import TodoItem from "../TodoItem/TodoItem";


export default function TodoList({todos} : TodoListProps) {
    const {clearCompleted} = useContext(TodoContext);

    const todosList = todos.map(todo =>
        <ListGroupItem key={todo.id}>
            <TodoItem todo={todo}/>
        </ListGroupItem>
    )

    const completedTodos = todos.filter(todo =>
        todo.completed === true
    )

    const nonCompletedTodos = todos.filter(todo => 
        todo.completed === false
    )

    const handleClear = () => {
        clearCompleted();
    }

    return(
        <ListGroup>
            {todosList}
            <ListGroupItem>
                <span>{nonCompletedTodos.length} items left</span>
                <Button onClick={handleClear}>Clear Completed ({completedTodos.length})</Button>
            </ListGroupItem>
        </ListGroup>
    )

}