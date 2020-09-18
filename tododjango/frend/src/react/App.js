import React, {useEffect} from 'react';
import TodoForm from './components/todoform.js';
import List from './components/list.js'
import { connect } from "react-redux";
import { getTodoRequest, addTodo, deleteTodo, handleCompleted } from "../redux/actions/todo-actions";


const App = (props) => {
    useEffect(() => { 
        props.getTodoRequest();
    },[]);

        return(
            <div className="main-container">
                    <TodoForm addTodo={props.addTodo}/>
                    <List todos={props.todos} deleteTodo={props.deleteTodo} handleCompleted={props.handleCompleted} />
            </div> 
        )
    }

export default connect(
    state => ({
        todos: state.todos
    }), 
    dispatch => ({
    getTodoRequest: () => dispatch(getTodoRequest()),
    addTodo: (todo) => dispatch(addTodo(todo)),
    deleteTodo: (key) => dispatch(deleteTodo(key)),
    handleCompleted: (id) => dispatch(handleCompleted(id))
    })
)(App);