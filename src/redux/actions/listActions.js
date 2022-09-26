import {
  LIST_ADD,
  LIST_REMOVE,
  LIST_ADD_DONE,
  LIST_REMOVE_DONE,
  LIST_UPDATE_TODO,
  LIST_DELETE_ALL,
  LIST_EDIT_TODO,
  LIST_ALL,
} from '../../constants/ListConstants';

export const addList = (data) => async (dispatch, getState) => {
  console.log("data",data)
  dispatch({
    type: LIST_ADD,
    payload: data
  })
  // save to local storage as listItems
};
export const addAll = (data) => async (dispatch, getState) => {
  dispatch({
    type: LIST_ALL,
    payload: data
  })
};

export const removeList = (id) => async (dispatch, getState) => {
  dispatch({
    type: LIST_REMOVE,
    payload: id
  })
}

export const addDone = (title) => async (dispatch, getState) => {
  dispatch({
    type: LIST_ADD_DONE,
    payload: {
      title: title,
      complete: true
    }
  })
}

export const removeDone = (title) => async (dispatch, getState) => {
  dispatch({
    type: LIST_REMOVE_DONE,
    payload: {
      title: title,
      complete: false
    }
  })
}
//  add
export const handleEditSubmit = (title) => async (dispatch, getState) => {
  dispatch({
    type: LIST_UPDATE_TODO,
    payload: {
      title: title,
      complete: false
    }
  })
}
export const deleteAll = (title) =>async (dispatch, getState)=>{
  dispatch ({
      type: LIST_DELETE_ALL,
      payload: {
        title: title,
      complete: false
      }
  })
}

export const handleUpdateEditSubmit = (data) => async (dispatch, getState)=>{

  dispatch ({
      type: LIST_EDIT_TODO,
      payload: data
  })
}
// export const addText = value => ({
//   type: ADD_TEXT,
//   payload: value,
// })