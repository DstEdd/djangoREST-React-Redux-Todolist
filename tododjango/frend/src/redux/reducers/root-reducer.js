import * as types from '../actions/action-types';
import generateKey from '../../helpers/generateKey.js';

const initialState = {
  todos: []
};

const rootReducer = function(state = initialState, action) {
  switch(action.type) {
    case types.GET_TODOS:
      return{...state, todos: action.todos}

    case types.ADD_TODO:
      return {...state, todos: [...state.todos, action.todo]};
    
    case types.DELETE_TODO:
      let newTodos = state.todos.filter(todo => todo.id != action.id);
      return {...state,  todos: newTodos };
    
    case types.SET_TODO_IS_COMPLETED:
      let newTodoz = state.todos.map((todo) => {
        if (todo.id === action.id) return { ...todo, isCompleted: !todo.isCompleted}
        return todo;
      })
      return {...state,  todos: newTodoz };
  }

  return state;
}

export default rootReducer;
