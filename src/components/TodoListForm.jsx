import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addList } from '../redux/actions/listActions';

const TodoListForm = ({editFormVisibility}) => {


  const dispatch = useDispatch();
  const [list, setList] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addList(list));
    setList('');
  };

  return (
    <>
    {editFormVisibility === false ? (
           <Form className='mx-2 my-2' onSubmit={submitHandler}>
           <Form.Group controlId='inputList'>
             <Row>
               <Col md={8}
               >
                 <Form.Control
                   type='text'
                   value={list}
                   onChange={(e) => setList(e.target.value)}
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
      <Form className='mx-2 my-2' onSubmit={submitHandler}>
      <Form.Group controlId='inputList'>
        <Row>
          <Col md={8}
          >
            <Form.Control
              type='text'
              value={list}
              onChange={(e) => setList(e.target.value)}
              placeholder='Enter list'
              required
            />
          </Col>
          <Col md={4}>
            <Button type='submitted'>UPDATE Item</Button>
          </Col>
        </Row>
        </Form.Group>
      </Form>
    )}

    </>

  );
};

export default TodoListForm;
