import { useContext, useState } from 'react'
import './App.css'
import { Button, ButtonGroup, Container, InputGroup, ListGroup } from 'react-bootstrap'
import TodoList from './assets/components/TodoList/TodoList'
import type { Todo } from './assets/types'
import TodoInput from './assets/components/TodoInput/TodoInput'
import { TodoContext } from './assets/components/contexts/contexts'

function App() {
  //i haven't had todolist in context before and here I've figured out I won't be able to access it otherwise
  //so added it to context
  const {todoList} = useContext(TodoContext);

  return (
    <Container>
      <h1>Todo App (Context API)</h1>
      <Button>Switch To dark</Button>
      <Container>
        <TodoInput />
        <ButtonGroup></ButtonGroup>
        <TodoList todos = {todoList} />
      </Container>
    </Container>

  )
}

export default App
