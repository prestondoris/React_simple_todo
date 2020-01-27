import React from 'react'
import TodoItem from './TodoItem';

function TodoList(props) {
  const todos = props.todos.map(t => (
    <TodoItem item={t}/>
  ))

  return (
    <ol>
      {todos}
    </ol>
  )
}

export default TodoList;
