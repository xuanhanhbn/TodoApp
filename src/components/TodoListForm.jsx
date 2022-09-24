import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addList, handleUpdateEditSubmit } from '../redux/actions/listActions';

const TodoListForm = ({editFormVisibility, editTodo, cancelUpdate}) => {


  const dispatch = useDispatch();
  const [list, setList] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addList(list));
    setList('');
  };

  const [editValue, setEditValue] = useState('');
  useEffect(()=> {
    setEditValue(editTodo.name);
  },[editTodo])

  const editSubmit = (e )=> {
    e.preventDefault();
    dispatch(handleUpdateEditSubmit(list));
    setEditValue('')
  }

  return (
    <>
    {editFormVisibility === false ? (
           <Form className='mx-2 my-2' onSubmit={submitHandler}>
           <Form.Group controlId='inputList'>
             <Row>
             <div className='text-center' >
               Add your todo-items
            </div>
               <Col md={8}
               >
                 <Form.Control
                   type='text'
                   value={editValue}
                   onChange={(e) => setEditValue(e.target.value)}
                   placeholder='Enter list'
                   required
                 />
               </Col>
               <Col md={4}>
                 <Button type='submitted'>Add Item</Button>
               </Col>
             </Row>
             </Form.Group>
           </Form>

    ):(
      <Form className='mx-2 my-2' onSubmit={editSubmit}>
      <Form.Group controlId='inputList'>
        <Row>
          <div className='text-center'>
               Edit your todo-items
          </div>
          <Col md={8}
          >
            <Form.Control
              type='text'
              value={editValue||""}
              onChange={(e) => setEditValue(e.target.value)}
              placeholder='Enter list'
              required
            />
          </Col>
          <Col md={2}>
            <Button type='submitted'>UPDATE</Button>
          </Col>
          <Col md={2}>
            <Button type='button' variant='success' onClick={cancelUpdate} >CANCEL</Button>
          </Col>

        </Row>
        </Form.Group>
      </Form>
    )}

    </>

  );
};

export default TodoListForm;
