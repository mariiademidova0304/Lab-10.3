import { useState } from 'react'
import './App.css'
import { Button, ButtonGroup, Container, InputGroup, ListGroup } from 'react-bootstrap'

function App() {

  return (
    <Container>
      <h1>Todo App (Context API)</h1>
      <Button>Switch To dark</Button>
      <Container>
        <InputGroup></InputGroup>
        <ButtonGroup></ButtonGroup>
        <ListGroup></ListGroup>
      </Container>
    </Container>

  )
}

export default App
