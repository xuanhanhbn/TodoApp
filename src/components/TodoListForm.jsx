import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addList, handleUpdateEditSubmit } from '../redux/actions/listActions';

const TodoListForm = ({ setEditFormVisibility, editFormVisibility, editTodo, cancelUpdate }) => {
    const dispatch = useDispatch();
    // const [list, setList] = useState();
    const [item, setItem] = useState();

    const submitHandler = (e) => {
        const todoListValue = {
            id: Math.floor(Math.random() * 10000000001),
            title: item,
            complete: false,
        };
        e.preventDefault();
        dispatch(addList(todoListValue));
        setItem('');
    };

    const [editValue, setEditValue] = useState();

    useEffect(() => {
        if (!editTodo) {
            return;
        }
        setEditValue(editTodo.title);
    }, [editTodo]);

    const editSubmit = (e) => {
        setEditFormVisibility(false);
        e.preventDefault();
        const todoListValue = {
            ...editTodo,
            title: editValue,
        };
        dispatch(handleUpdateEditSubmit(todoListValue));
        // setEditValue('')
    };

    return (
        <>
        {editFormVisibility === false ? (
           <Form  className='mx-2 my-2' onSubmit={submitHandler}>
           <Form.Group controlId='inputList'>
             <Row >
             <div style={{paddingBottom: '16px'}} className='text-center' >
               Add your todo-items
            </div>
               <Col md={8}
               >
                 <Form.Control
                   type='text'
                   value={item}
                   onChange={(e) => setItem(e.target.value)}
                   placeholder='Enter list'
                   required
                 />
               </Col>
               <Col className='d-grid gap-2' md={4}>
                 <Button type='submitted'>Add Item</Button>
               </Col>
             </Row>
             </Form.Group>
           </Form>

    ):(
      <Form className='mx-2 my-2' onSubmit={editSubmit}>
      <Form.Group controlId='inputList'>
        <Row>
          <div style={{paddingBottom: '16px'}} className='text-center'>
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
          <Col className='d-grid gap-2' md={2}>
            <Button type='submitted'>UPDATE</Button>
          </Col>
          <Col md={2}>
            <Button className='d-grid gap-2' type='button' variant='success' onClick={cancelUpdate} >CANCEL</Button>
          </Col>

        </Row>
        </Form.Group>
      </Form>
    )}

        </>
    );
};

export default TodoListForm;
