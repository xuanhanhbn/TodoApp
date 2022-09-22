import React from 'react'
import { Card} from 'react-bootstrap'
import TodoListForm from '../components/TodoListForm'
import TodoListList from '../components/TodoListList'

const HomeSceen = () => {
  return (
    <>
      <h1 className='text-info text-center'>To Do App</h1>
      <Card>
        <Card.Header className='text-center'>
          A To Do List 
        </Card.Header>
        <TodoListForm />
      </Card>
      <h1 className='text-info text-center'>List</h1>
      <TodoListList />
    </>
    
  )
}

export default HomeSceen
