import React from 'react'


const Form = (props) => {

    const inputTextHandler = (e) => {
        props.setinput(e.target.value)
    };

    const submiTodoHandler = (e) => {
        e.preventDefault();
        props.settodo([
            ...props.todo, 
            {text: props.text, completed: false, id: Math.round(Math.random()*100)}
        ]);
        props.setinput('');
    };

    const statusHandler = (e) => {
        props.setstatus(e.target.value);
    }

    return(
        <form>
            <input value={props.text} 
                onChange={inputTextHandler} 
                type="text" 
                className="todo-input"               
            />
            <button 
                onClick={submiTodoHandler}
                className="todo-button" 
                type="submit">
                    <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;
