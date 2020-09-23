import React, {useEffect} from 'react';
import TodoForm from './components/todoform.js';
import List from './components/list.js'
import { connect } from "react-redux";
import { deleteTodoRequest, getTodoRequest, addTodoRequest, setTodoIsCompletedRequest } from "../redux/requests/todo-requests";


const App = (props) => {
    useEffect(() => { 
        props.getTodoRequest();
    },[]);

        return(
            <div className="main-container">
                    <TodoForm addTodoRequest={props.addTodoRequest}/>
                    <List todos={props.todos} deleteTodoRequest={props.deleteTodoRequest} setTodoIsCompletedRequest={props.setTodoIsCompletedRequest} />
            </div> 
        )
    }

export default connect(
    state => ({
        todos: state.todos
    }), 
    dispatch => ({
    getTodoRequest: () => dispatch(getTodoRequest()),
    deleteTodoRequest: (id) => dispatch(deleteTodoRequest(id)),
    addTodoRequest: (todo) => dispatch(addTodoRequest(todo)),
    setTodoIsCompletedRequest: (id, isCompleted) => dispatch(setTodoIsCompletedRequest(id, isCompleted))
    })
)(App);