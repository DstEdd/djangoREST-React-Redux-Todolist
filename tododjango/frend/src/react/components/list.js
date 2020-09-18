import React from 'react';

const List = ({todos, deleteTodo, handleCompleted}) => {

    return(
        <ul className="todo-list">
            {todos.map(todo => {
                return(
                    <li key={todo.id}>
                        <input type="checkbox" checked={todo.isCompleted} onChange={() => handleCompleted(todo.id)} />
                        {todo.isCompleted && <s>{todo.todo}</s>}
                        {!todo.isCompleted && <span>{todo.todo}</span>}
                        <button type="button" onClick={() => deleteTodo(todo.id)}>give up on this one</button>
                    </li>
                );
            })}
        </ul>
    )
}

export default List;