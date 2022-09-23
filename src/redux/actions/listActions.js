import {
  LIST_ADD,
  LIST_REMOVE,
  LIST_ADD_DONE,
  LIST_REMOVE_DONE,
  LIST_UPDATE_TODO,
  LIST_DELETE_ALL
} from '../../constants/ListConstants';

export const addList = (name) => async (dispatch, getState) => {
  dispatch({
    type: LIST_ADD,
    payload: {
      name: name,
      complete: false
    }
  })
  // save to local storage as listItems
  localStorage.setItem('listItems', JSON.stringify(getState().todoItems.todoList))
};

export const removeList = (name) => async (dispatch, getState) => {
  dispatch({
    type: LIST_REMOVE,
    payload: name
  })
  localStorage.setItem('listItems', JSON.stringify(getState().todoItems.todoList))
}

export const addDone = (name) => async (dispatch, getState) => {
  dispatch({
    type: LIST_ADD_DONE,
    payload: {
      name: name,
      complete: true
    }
  })
  localStorage.setItem('listItems', JSON.stringify(getState().todoItems.todoList))
}

export const removeDone = (name) => async (dispatch, getState) => {
  dispatch({
    type: LIST_REMOVE_DONE,
    payload: {
      name: name,
      complete: false
    }
  })
  localStorage.setItem('listItems', JSON.stringify(getState().todoItems.todoList))
}
//  add 
export const handleEditSubmit = (name) => async (dispatch, getState) => {
  dispatch({
    type: LIST_UPDATE_TODO,
    payload: {
      name: name,
      complete: false
    }
  })
  localStorage.setItem('listItems', JSON.stringify(getState().todoItems.todoList))
}
export const deleteAll = (name) =>async (dispatch, getState)=>{
  dispatch ({
      type: LIST_DELETE_ALL,
      payload: {
        name: name,
      complete: false
      }
  })
  localStorage.setItem('listItems', JSON.stringify(getState().todoItems.todoList))
}
export const updateTodo = (name) =>async (dispatch, getState)=>{
  dispatch ({
      type: LIST_UPDATE_TODO,
      payload: {
        name: name,
        complete: false
      }
  })
  localStorage.setItem('listItems', JSON.stringify(getState().todoItems.todoList))
}