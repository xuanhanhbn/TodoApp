
import { LIST_REMOVE, LIST_ADD, LIST_ADD_DONE, LIST_REMOVE_DONE ,LIST_DELETE_ALL,LIST_EDIT_TODO} from '../../constants/ListConstants';

export const listReducer = (state = { todoList: [], repeat: false }, action) => {
  switch (action.type) {
    case LIST_ADD:
      const newList = action.payload;
      const checkName = state.todoList.find(x => x.name === action.payload.name)
      if(!checkName) {
        return {
          ...state,
          repeat: false,
          todoList: [...state.todoList, newList],
        };
      } else {
        return {
          ...state,
          repeat: true
        }
      }

    case LIST_REMOVE:
      return {
        ...state,
        todoList: state.todoList.filter((x) => x.id !== action.payload), //remove that one from the list
      };

    case LIST_ADD_DONE:
      const existNote = state.todoList.find(x => x.name === action.payload.name)
      return {
        ...state,
        todoList: state.todoList.map((x) => x.name === existNote.name ? action.payload : x) //replace that todoList.complete to true
      }

    case LIST_REMOVE_DONE:
      const unCompleteNote = state.todoList.find(x => x.name === action.payload.name)
      return {
        ...state,
        todoList: state.todoList.map((x) => x.name === unCompleteNote.name ? action.payload : x) //replace that todoList.complete to true
      }
    case LIST_DELETE_ALL:
      return {
        ...state,
        todoList:[]
      };

    case LIST_EDIT_TODO: {
      const checkNameEdit = state.todoList.find((x) => x.name === action.payload.name);
      if(checkNameEdit) {
        return {
          ...state,
          repeat: true,
        }
     } else {
      const newTodoList = state.todoList.map((data) => {
        if(data.id === action.payload.id) {
          return action.payload;
        }
        return data;
      })
      return {
        ...state,
        todoList:newTodoList,
      }
    }
  }

    default:
      return state;
  }
};
