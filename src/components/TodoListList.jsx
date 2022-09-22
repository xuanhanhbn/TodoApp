import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ListGroup, Button, Row, Col } from 'react-bootstrap';
import { removeList, addDone, removeDone } from '../redux/actions/listActions';
import Message from './Message';

const TodoListList = () => {
  const data = useSelector((state) => state.todoItems);
  // console.log(data)
  const dispatch = useDispatch();
  const { todoList, repeat } = data;
  // console.log(repeat)
  const handleDelete = (item) => {
    dispatch(removeList(item));
  };

  const handleComplete = (item) => {
    dispatch(addDone(item));
  };

  const handleNotComplete = (item) => {
    dispatch(removeDone(item))
  };

  if (todoList.length > 0) {
    console.log(todoList)
    return (
      <>
        {repeat && <Message variant="danger">This note is already added</Message>}
        <ListGroup >
          {todoList.map((list) => (
            <ListGroup.Item
            className='mb-xxl-1'
              variant={list.complete === true ? 'success' : 'primary'}
              key={list.name}
            >
              <Row>
                <Col md={8} xs={8}>{list.name}</Col>
                <Col md={2} xs={2}>
                  {list.complete === true ? (
                    <Button
                      variant='success'
                      onClick={() => handleNotComplete(list.name)}
                    >
                      <i className='fas fa-check'></i>
                    </Button>
                  ) : (
                    <Button
                      variant='warning'
                      onClick={() => handleComplete(list.name)}
                    >
                      <i className='fas fa-eraser'></i>
                    </Button>
                  )}
                </Col>
                <Col md={2} xs={2}>
                  <Button
                    variant='dark'
                    onClick={() => handleDelete(list.name)}
                  >
                    <i className='fas fa-trash'></i>
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </>
    );
  } else {
    return (
      <ListGroup>
        <ListGroup.Item className='text-center'>
          Nothing
        </ListGroup.Item>
      </ListGroup>
    );
  }
};

export default TodoListList;
