import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import axios from 'axios'
const url = '/todos'


const App = () => {

  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')

  useEffect(() => {

      axios.get(url)
        .then(response => {
          
            setTodos(response.data)

      })
  },[])


  const todoinputchanged = (event) => {

    setTodo(event.target.value)

  }


  const addTodo = (event) => {
    event.preventDefault()

    const params = new URLSearchParams();
    params.append('todo', todo);

    axios.post(url, params)
      .then(response => {
        setTodos(response.data)
        setTodo('')

      })

  }


  return (
    <div>
      <h2>TODOS</h2>

      <img src="/image" ></img>

      <TodoForm addtodo={addTodo} todo={todo} todoInputChanged={todoinputchanged} />

      <TodoList todos={todos} />

    </div>
  )

}


ReactDOM.render(<App />, document.getElementById('root'));

