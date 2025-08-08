import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";
import type { TodoItemProps } from "../../types";
import { useContext } from "react";
import { TodoContext } from "../contexts/contexts";

//element gets a task as a prop from parent - List, and displays it, 
// while also allowing usage of context for editing, deleting and toggling
export default function TodoItem({ todo }: TodoItemProps) {
    const { editTodo, deleteTodo, toggleTodo } = useContext(TodoContext);

    const handleToggle = () => {
        toggleTodo(todo.id);
    }

    const HandleDelete = () => {
        deleteTodo(todo.id);
    }

    //don't really know how to tackle the edit beast for now
    const handleEdit = () => {
        editTodo(todo.id, 'edited To Do');
    }

    return (
        <Container>
            <Row>
                <Col>
                    <input type="radio" checked={todo.completed} onClick={handleToggle} />
                    <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
                </Col>
                <Col>
                    <ButtonGroup>
                        <Button variant="white" onClick={handleEdit}>✏️</Button>
                        <Button variant="white" onClick={HandleDelete}>🗑️</Button>
                    </ButtonGroup>
                </Col>
            </Row>
        </Container>
    )
}