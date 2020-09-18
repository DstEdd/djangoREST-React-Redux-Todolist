import axios from 'axios';
import * as types from './action-types';

export const getTodoRequest = () => dispatch =>{
  axios.get('http://localhost:8000/api/todos')
    .then(res =>{
      dispatch(getTodos(res.data));
    })
}

export function getTodos(todos){
  return {
        type: types.GET_TODOS,
        todos
    };
}

export function addTodo(todo){
  return {
        type: types.ADD_TODO,
        todo
    };
}

export function deleteTodo(key){
  return {
        type: types.DELETE_TODO,
        key
    };
}

export function handleCompleted(id){
  return {
        type: types.SET_TODO_IS_COMPLETED,
        id
    };
}