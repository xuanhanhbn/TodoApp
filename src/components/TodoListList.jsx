import { React, useEffect } from 'react';
import { Button, Col, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addAll, addDone, deleteAll, removeDone, removeList } from '../redux/actions/listActions';
import Message from './Message';

const TodoList = ({ handleEditClick, editFormVisibility }) => {
    const data = useSelector((state) => state.todoItems);

    const dispatch = useDispatch();
    const { todoList, repeat } = data;
    console.log(todoList);
    const handleDelete = (id) => {
        dispatch(removeList(id));
    };

    const handleComplete = (item) => {
        dispatch(addDone(item));
    };

    const handleNotComplete = (item) => {
        dispatch(removeDone(item));
    };
    const handleDeleteAll = (item) => {
        dispatch(deleteAll(item));
    };
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((res) => res.json())
            .then((result) => {
                dispatch(addAll(result));
            });
    }, [dispatch]);
  if (todoList.length > 0) {

    return (
      <>

        {repeat && <Message variant="danger">This note is already added</Message>}
        <ListGroup >
          {todoList.map((data,index) => (
            <ListGroup.Item
            className='mb-xxl-1'
              variant={data.complete === true ? 'success' : 'primary'}
              key={data.id}

            >
              <Row >
                  <Col lg={9} md={6} xs={6} style={{overflow:'hidden'}}> {index + 1} - {data.title} </Col>

                {editFormVisibility === false && (
                  <>
                  <Col lg={1} md={2} xs={2}
                      style={{display:'flex',justifyContent: 'flex-end'}}>
                    {data.complete === true ? (
                      <Button
                        variant='dark'
                        onClick={() => handleNotComplete(data.title)}
                      >
                       <i className="fa-solid fa-check"></i>
                      </Button>
                    ) : (
                      <Button
                        variant='primary'
                        onClick={() => handleComplete(data.title)}
                      >
                        <i className="fa-solid fa-xmark"></i>
                      </Button>
                    )}
                  </Col>

                  <Col lg={1} md={2} xs={2}
                      style={{display:'flex',justifyContent: 'flex-end'}}>
                    {/* update item  */}
                    <Button
                      variant='warning'
                      onClick={() => handleEditClick(data)}
                    >
                    <i className="fa-regular fa-pen-to-square"></i>
                    </Button>
                  </Col>

                  <Col lg={1} md={2} xs={2}
                     style={{display:'flex',justifyContent: 'flex-end'}}>
                  {/* delete item  */}
                  <Button
                    variant='dark'
                    onClick={() => handleDelete(data.id)}
                  >
                    <i className='fas fa-trash'></i>
                  </Button>
                  </Col></>
                )}
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
        {/* deleteAll  */}
        {todoList.length > 1 &&(
          <div className='d-grid gap-2'>
            <Button
            style={{marginTop:'20px'}}
              className='btn btn-primary'
              variant='danger'
              onClick={() => handleDeleteAll()}
            >
              <i style={{paddingRight:'8px'}} className='fas fa-trash'></i>
               Delete all
          </Button>
          </div>
        )}
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

export default TodoList;
