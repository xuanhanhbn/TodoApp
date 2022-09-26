import {React, useState} from 'react'
import { Card} from 'react-bootstrap'
import TodoListForm from '../components/TodoListForm'
import TodoListList from '../components/TodoListList'

const HomeScreen = () => {

  const [editFormVisibility, setEditFormVisibility]=useState(false);

  const [editTodo, setEditTodo] = useState();

  const handleEditClick=(data)=>{
    setEditFormVisibility(true);
    setEditTodo(data);
  }


  const cancelUpdate = () => {
    setEditFormVisibility(false);
  }

  return (
    <>
      <h1 className='text-info text-center'>Todo App</h1>
      <Card>
        <TodoListForm setEditFormVisibility = {setEditFormVisibility} editFormVisibility={editFormVisibility} editTodo = {editTodo} cancelUpdate = {cancelUpdate} />
      </Card>
      <h1 style={{
        padding:'20px 0'
      }} className='text-info text-center'>A Todo List to Organize Your Work &amp; Life</h1>
      <TodoListList  handleEditClick={handleEditClick} editFormVisibility={editFormVisibility} />
    </>

  )
}

export default HomeScreen;

// HomeSceen = App.js;
// Form = Form;
// todo = List;
