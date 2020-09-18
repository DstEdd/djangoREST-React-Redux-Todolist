import React, {useState} from 'react';

const TodoForm = ({addTodo}) => {
    const [todo, setTodo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(todo);
        setTodo('');
    }
        return(
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Just TODO itttttttt !!!</label>
                    <input name="title" type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
                    <button type="submit">Add Todo</button>  
                </form>  
            </div>
        )
    }

export default TodoForm;