
import React from 'react'

const TodoForm = ({ addtodo, todo, todoInputChanged }) => {

  return (

    <div>
      <form onSubmit={addtodo}>

        <div>
          <input value={todo} onChange={todoInputChanged} />
        </div>

        <div>
          <button type="submit">add</button>
        </div>

      </form>
    </div>

  )
}

export default TodoForm;