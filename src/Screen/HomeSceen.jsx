import {React, useState} from 'react'
import { Card} from 'react-bootstrap'
import TodoListForm from '../components/TodoListForm'
import TodoListList from '../components/TodoListList'

const HomeSceen = () => {

  const [editFormVisibility, setEditFormVisibility]=useState(false);

  const handleEditClick=()=>{
    setEditFormVisibility(true);
  }

  return (
    <>
      <h1 className='text-info text-center'>To Do App</h1>
      <Card>
        <Card.Header className='text-center'>
           Add your todo-items
        </Card.Header>
        <TodoListForm editFormVisibility={editFormVisibility}/>
      </Card>
      <h1 className='text-info text-center'>A To-Do List to Organize Your Work & Life</h1>
      <TodoListList  handleEditClick={handleEditClick} editFormVisibility={editFormVisibility} />
    </>

  )
}

export default HomeSceen;

// HomeSceen = App.js;
// Form = Form;
// List = List;
