import * as types from './action-types';

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

export function deleteTodo(id){
  return {
        type: types.DELETE_TODO,
        id
    };
}

export function handleCompleted(id){
  return {
        type: types.SET_TODO_IS_COMPLETED,
        id
    };
}