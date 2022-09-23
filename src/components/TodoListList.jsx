import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ListGroup, Button, Row, Col } from 'react-bootstrap';
import { removeList, addDone, removeDone,deleteAll,updateTodo } from '../redux/actions/listActions';
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
  const handleDeleteAll = (item) => {
    dispatch(deleteAll(item))
  };
  const updateItem = (item) => {
    dispatch(updateTodo(item))
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
                <Col md={6} xs={6} style={{overflow:'hidden'}}>{list.name} </Col>
                <Col md={2} xs={2}  
                     style={{display:'flex',justifyContent: 'flex-end'}}>
                  {list.complete === true ? (
                    <Button
                      variant='dark'
                      onClick={() => handleNotComplete(list.name)}
                    >
                      <i className='fas fa-check'></i>
                    </Button>
                  ) : (
                    <Button
                      variant='primary'
                      onClick={() => handleComplete(list.name)}
                    >
                      <i className='fas fa-check'></i>
                    </Button>
                  )}
                </Col>
                <Col md={2} xs={2} 
                     style={{display:'flex',justifyContent: 'flex-end'}}>
                  {/* delete item  */}
                  <Button
                    variant='dark'
                    onClick={() => handleDelete(list.name)}
                  >
                    <i className='fas fa-trash'></i>
                  </Button>
                </Col>
                <Col md={2} xs={2} 
                     style={{display:'flex',justifyContent: 'flex-end'}}>
                  {/* update item  */}
                  <Button
                    variant='warning'
                    onClick={() => updateItem(list.name)}
                  >
                   <i class="fa fa-address-card" aria-hidden="true"></i>
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
        {/* deleteAll  */}
        <Button
                    variant='danger'
                    onClick={() => handleDeleteAll()}
                  >
                    <i className='fas fa-trash'></i> Delete all
                  </Button>
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
