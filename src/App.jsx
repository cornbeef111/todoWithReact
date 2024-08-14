import React from 'react'
import './App.css'
import { TodoContextProvider } from './contexts/TodoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = React.useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map(eachTodo => (eachTodo.id === todo.id? todo : eachTodo)))
  }

  const deleteTodo = (id) => {
     setTodos(prev => prev.filter(todo => todo.id !== id)) // filter ask the qustion, does todo.id match the id? if no then add to the new array
  }

  const toggleTodo = (id) => {
    setTodos(prev => 
      prev.map(eachTodo => 
        eachTodo.id === id? {...eachTodo, completed: !eachTodo.completed} : eachTodo))
  }

      //  we used this to grab the data in the local Storage just once
  React.useEffect(() =>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0){
      setTodos(todos)
    }
  },[])


      //  used this to update/upoad data to the local storage
  React.useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])

  return (
    <TodoContextProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleTodo}}>
      <div className='bg-[#172842] min-h-screen py-8'>
        <div className='w-full max-w-2xl mx-auto rounded-lg px-4 py-3 text-white '>
            <h1 className='text-2xl font-bold text-center mb-8 mt-2'>Manage your Todos</h1>
          </div>
          <div className='mb-4'>
             <TodoForm />
          </div>
          <div className='flex flex-wrap gap-y-3'>
            {
              todos.map((todo) => (
                <div key={todo.id} className='w-full'>
                  <TodoItem todo={todo} />
                </div>
              ))
            }
          </div>
      </div>
    </TodoContextProvider>
  )
}

export default App
