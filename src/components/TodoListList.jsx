import {React} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ListGroup, Button, Row, Col } from 'react-bootstrap';
import { removeList, addDone, removeDone,deleteAll } from '../redux/actions/listActions';
import Message from './Message';

const TodoListList = ({handleEditClick, editFormVisibility}) => {


  const data = useSelector((state) => state.todoItems);

  const dispatch = useDispatch();
  const { todoList, repeat } = data;
  // console.log(repeat)
  const handleDelete = (id) => {
    dispatch(removeList(id));
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
          {todoList.map((data,index) => (
            <ListGroup.Item
            className='mb-xxl-1'
              variant={data.complete === true ? 'success' : 'primary'}
              key={data.id}

            >
              <Row >
                  <Col md={9} xs={9} style={{overflow:'hidden'}}>{index + 1} - {data.name} </Col>

                {editFormVisibility === false && (
                  <>
                      <Col md={1} xs={1}
                      style={{display:'flex',justifyContent: 'flex-end'}}>
                    {data.complete === true ? (
                      <Button
                        variant='dark'
                        onClick={() => handleNotComplete(data.name)}
                      >
                        <i className='fas fa-check'></i>
                      </Button>
                    ) : (
                      <Button
                        variant='primary'
                        onClick={() => handleComplete(data.name)}
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
                      onClick={() => handleEditClick(data)}
                    >
                    <i className="fa-regular fa-pen-to-square"></i>
                    </Button>
                  </Col>

                  <Col md={1} xs={1}
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
