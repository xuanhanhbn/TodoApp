import {React} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ListGroup, Button, Row, Col } from 'react-bootstrap';
import { removeList, addDone, removeDone,deleteAll } from '../redux/actions/listActions';
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


  if (todoList.length > 0) {

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
              <Row >
                <Col md={9} xs={9} style={{overflow:'hidden'}}>{list.name} </Col>
                <Col md={1} xs={1}
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

                <Col md={1} xs={1}
                     style={{display:'flex',justifyContent: 'flex-end'}}>
                  {/* update item  */}
                  <Button
                    variant='warning'
                    // onClick={() => }
                  >
                   <i className="fa-regular fa-pen-to-square"></i>
                  </Button>
                </Col>

                <Col md={1} xs={1}
                     style={{display:'flex',justifyContent: 'flex-end'}}>
                  {/* delete item  */}
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
        {/* deleteAll  */}
        {todoList.length > 1 &&(
          <div>
            <Button
              variant='danger'
              onClick={() => handleDeleteAll()}
            >
              <i className='fas fa-trash'></i> Delete all
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

export default TodoListList;
