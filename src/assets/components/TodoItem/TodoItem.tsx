import { Button, ButtonGroup, Container, InputGroup, ListGroupItem } from "react-bootstrap";
import type { TodoItemProps, Todo } from "../../types";

export default function TodoItem({todo} : TodoItemProps) {
   
    return(
        <Container>
            <InputGroup.Radio />
            <span>{todo.text}</span>
            <ButtonGroup>
                <Button>✏️</Button>
                <Button>🗑️</Button>
            </ButtonGroup>
        </Container>
    )
}