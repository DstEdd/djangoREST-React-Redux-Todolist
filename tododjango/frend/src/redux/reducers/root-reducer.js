import * as types from '../actions/action-types';
import generateKey from '../../helpers/generateKey.js';

const initialState = {
  todos: [{todo: "fukkkk", id: 14, isCompleted: false}]
};

const rootReducer = function(state = initialState, action) {
  switch(action.type) {
    case types.GET_TODOS:
      console.log(action);
      return{...state, todos: action.todos}

    case types.ADD_TODO:
      let pre = action.todo.substr(0, 2);
      let todos = state.todos;
      return {...state, todos: [...todos, {todo: action.todo, id: generateKey(pre), isCompleted: false}]};
    
    case types.DELETE_TODO:
      let newTodos = state.todos.filter(todo => todo.id != action.key);
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
