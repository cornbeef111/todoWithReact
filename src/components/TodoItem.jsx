import React from 'react'
import useTodoContext from '../contexts/TodoContext'

function TodoItem({todo}) {
    const [isTodoEditable, setIsTodoEditable] = React.useState(false)
    const [todoMsg , setTodoMsg] = React.useState(todo.todo)

    const {updateTodo, deleteTodo, toggleTodo} = useTodoContext()

    const editTodo = ()=> {
        updateTodo(todo.id,{...todo, todo: todoMsg})
        setIsTodoEditable(false)
    }

    const toggleCompleted = () => {
        toggleTodo(todo.id)
    }
    
  return (
    <div className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 
    shadow-sm shadow-white/50 duration-300 text-black
     ${todo.completed? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}
     >
       <input type='checkbox' 
       className='cursor-pointer'
       checked={todo.completed}
       onChange={toggleCompleted}
       />
       <input type="text"
       className={`border outline-none w-full bg-transparent rounded-lg 
       ${isTodoEditable? "border-black/10 px-2" : "border-transparent"}`}
       value={todoMsg}
       onChange={(e) => setTodoMsg(e.target.value)}
       readOnly={!isTodoEditable}
       />
       <button 
       className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 
       justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50'
       onClick={() =>{
        if(todo.completed) return
        if(isTodoEditable){
          editTodo()
        }else{
          setIsTodoEditable((prev) => !prev)
        }
       }}
       disabled={todo.completed}
       >{isTodoEditable? "Save" : "Edit"}</button>

       <button className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 
       justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50'
       onClick={() => deleteTodo(todo.id)}
       >Delete</button>
    </div>
  )
}

export default TodoItem
