

import React from 'react'

const TodoList = ({ todos }) => {

  var list = []

  if(typeof todos !== 'undefined') {

    list = todos.map(item => <ul>{item}</ul>)

  }

  return (
    <ul>
      {list}
    </ul>
  )
}

export default TodoList;