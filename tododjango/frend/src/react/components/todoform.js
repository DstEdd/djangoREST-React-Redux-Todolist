import React, {useState} from 'react';

const TodoForm = ({addTodoRequest}) => {
    const [todo, setTodo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            todo: todo,
            isCompleted: false
        }
        addTodoRequest(data);
        setTodo('');
    }
        return(
            <div className="add-form">
                <h1>Just TODO it !</h1>
                <form onSubmit={handleSubmit}>
                    <input name="title" type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
                    <button type="submit">Add Todo</button>  
                </form>  
            </div>
        )
    }

export default TodoForm;