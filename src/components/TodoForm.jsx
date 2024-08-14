import React from 'react'
import useTodoContext from '../contexts/TodoContext'


function TodoForm() {

    const [todo, setTodo] = React.useState("")

    const {addTodo} = useTodoContext()

    const add = (e) => {
        e.preventDefault()
        if(!todo) return
        addTodo({todo, completed: false})
        setTodo("")
    }

  return (
   <form onSubmit={add} className='flex max-w-4xl mx-auto'>
    <input 
    type='text'
    placeholder='Write Todo...'
    value={todo}
    onChange={(e) => setTodo(e.target.value)}
    className='w-full border border-black/10
     rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5'
    />
    <button type="submit" className='bg-green-700 text-white p-3 rounded-r-md'>Add</button>
   </form>
  )
}

export default TodoForm
