import { useContext } from "react";
import { TodoContext } from "../contexts/contexts";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import type { TodoListProps } from "../../types";
import TodoItem from "../TodoItem/TodoItem";

//todoList item that just renders a list of todos and does nothing with them, but has a button that clear
//completed todos using context
export default function TodoList({todos} : TodoListProps) {
    const {clearCompleted} = useContext(TodoContext);

    const todosList = todos.map(todo =>
        <ListGroupItem key={todo.id}>
            <TodoItem todo={todo}/>
        </ListGroupItem>
    )
    //making variables to count completed and not completed todo for display
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
            <ListGroupItem className="d-flex align-items-center justify-content-between">
                <span>{nonCompletedTodos.length} items left</span>
                <button style={{color:'blue', background: 'white'}} onClick={handleClear}>Clear Completed ({completedTodos.length})</button>
            </ListGroupItem>
        </ListGroup>
    )

}