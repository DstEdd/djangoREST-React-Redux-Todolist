import axios from 'axios';
import { getTodos, addTodo, deleteTodo, handleCompleted } from "../actions/todo-actions";

export const getTodoRequest = () => dispatch =>{
    axios.get('http://localhost:8000/api/todos')
      .then(res =>{
        dispatch(getTodos(res.data));
      })
  }
  
  export const deleteTodoRequest = (id) => dispatch =>{
    axios.delete(`http://localhost:8000/api/todos/${id}/`)
    .then(res =>{
      dispatch(deleteTodo(id));
    })
  }
  
  export const addTodoRequest = (todo) => dispatch =>{
    axios.post(`http://localhost:8000/api/todos/`, todo)
    .then(res =>{
      dispatch(addTodo(res.data));
    })
  }
  
  export const setTodoIsCompletedRequest = (id, isCompleted) => dispatch =>{
    axios.patch(`http://localhost:8000/api/todos/${id}/`, { isCompleted: isCompleted })
    .then(res =>{
      dispatch(handleCompleted(id));
    })
  }