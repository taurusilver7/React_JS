import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {
  const [text, setText] = useState('');
  const [todo, setTodo] = useState([]);
  const [status, setStatus] = useState('all');
  const [filterTodo, setFilterTodo] = useState([]);
  // filter out the todos based on status to not lose the rem todos other than filter cndtn

  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveTodos();
  }, [todo, status]) 
  // filterhandler works for any todo, status updates. blank results in calling filterHandler once.

  const filterHandler = () => {
    switch(status) {
      case 'completed' :
        setFilterTodo(todo.filter(item => item.completed === true));
        break;
      case 'uncompleted':
        setFilterTodo(todo.filter(item => item.completed === false));
        break;
      default:
        setFilterTodo(todo);
        break;
    }
  };

  // save data to local storage.
  const saveTodos = () => {
    localStorage.setItem('todo', JSON.stringify(todo));
  }
  // get data from local storage.
  const getTodos = () => {
    if(localStorage.getItem('todo') === null) {
      localStorage.setItem('todo', JSON.stringify([]));
    } else {
      let localTodo = JSON.parse(localStorage.getItem('todo', JSON.stringify(todo)));
      setTodo(localTodo);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>My ToDo List</h1>
      </header>
      <Form 
        text={text} 
        todo={todo} 
        settodo={setTodo} 
        setinput={setText}
        setstatus={setStatus}
      />
      <TodoList 
        settodos={setTodo} 
        todos={todo} 
        filtertodo={filterTodo}
      />     
    </div>
  );
}

export default App;
