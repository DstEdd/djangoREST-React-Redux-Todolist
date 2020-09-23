import React from 'react';

const List = ({todos, deleteTodoRequest, setTodoIsCompletedRequest}) => {

    if(!todos.length ) return <div className="no-todos">No todos yet</div> 

    return(
        <ul className="todo-list">
            {todos.map(todo => {
                return(
                    <li key={todo.id}>
                        <input type="checkbox" checked={todo.isCompleted} onChange={() => setTodoIsCompletedRequest(todo.id, !todo.isCompleted)} />
                        {todo.isCompleted && <s>{todo.todo}</s>}
                        {!todo.isCompleted && <span>{todo.todo}</span>}
                        <button type="button" onClick={() => deleteTodoRequest(todo.id)}>give up on this one</button>
                    </li>
                );
            })}
        </ul>
    )
}

export default List;