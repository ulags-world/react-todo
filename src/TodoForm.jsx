import React from 'react'
import './TodoForm.css'
import useInputState from './hooks/useInputState'
export default function TodoForm({addTodo}) {
    const [data , setData , reset] = useInputState("")
    return (
        <div className='TodoForm'>
            <form onSubmit={e =>{
                e.preventDefault()
                addTodo(data)
                reset();
            }}>
                <input 
                    type='text'
                    value={data}
                    onChange={setData}
                    
                />
            </form>
        </div>
  )
}
