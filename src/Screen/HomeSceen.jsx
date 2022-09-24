import {React, useState} from 'react'
import { Card} from 'react-bootstrap'
import TodoListForm from '../components/TodoListForm'
import TodoListList from '../components/TodoListList'

const HomeSceen = () => {

  const [editFormVisibility, setEditFormVisibility]=useState(false);

  const [editTodo, setEditTodo] = useState('');

  const handleEditClick=(list)=>{
    setEditFormVisibility(true);
    setEditTodo(list);
  }
  const cancelUpdate = () => {
    setEditFormVisibility(false);
  }

  return (
    <>
      <h1 className='text-info text-center'>To Do App</h1>
      <Card>
        <TodoListForm editFormVisibility={editFormVisibility} editTodo = {editTodo} cancelUpdate = {cancelUpdate} />
      </Card>

      <h1 className='text-info text-center'>A To-Do List to Organize Your Work &amp;	 Life</h1>
      <TodoListList  handleEditClick={handleEditClick} editFormVisibility={editFormVisibility} />
    </>

  )
}

export default HomeSceen;

// HomeSceen = App.js;
// Form = Form;
// todo = List;
