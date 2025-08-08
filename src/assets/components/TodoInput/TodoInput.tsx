import { useContext, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { TodoContext } from "../contexts/contexts";

//input component that handles adding todos from context
export default function TodoInput() {
    const {addToDo} = useContext(TodoContext);
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }
    
    const handleAdd = () => {
        if (inputValue.trim() !== '') {
            addToDo(inputValue);
            setInputValue('');
        } else {
            setInputValue('');
        }
    }

    return(
        <Container>
        <input value={inputValue} placeholder="What needs to be done?" onChange={handleChange}/>
        <Button onClick={handleAdd}>Add Todo</Button>
        </Container>
    )
}