import React from 'react'
import './TodoList.css'
function TodoList(props) {
  return (
    <div className='TodoListDiv'>
      <ul className='TodoList'>
      {
        props.data.map(e => (
            <li className='Todos'>{e.task}</li>
        ))
      }
      </ul>
    </div>
  )
}
export default TodoList
