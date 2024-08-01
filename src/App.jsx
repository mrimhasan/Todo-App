import { useEffect, useState } from 'react'
import { Todoprovider } from './Contents'
import TodoItem from './Components/Todoitem'
import Form from './Components/Form'

function App() {
  const [todos, setTodos] = useState([])

    /************* FUNCTIONALITY ************/
  const addTodo = (todo) => {
    setTodos((prev)=>[{id:Date.now(), ...todo}, ...prev])
  }

  const updatedTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo)=> prevTodo.id === id ? todo : prevTodo))
  }

  const deleteTodo = (id) => {
    // we can use map also but it is not good approach
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed}: prevTodo))
  }

  /************** BROWSER LOCAL STORAGE HANDLING (We have to focus  In localStorage when we setItem the value then it keeps in string format so when we getItem we have to convert it into JSON fromat)***************/

  // This call when we reload or open todo
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0){
      setTodos(todos)
    }
  }, [])

  // add todos
  useEffect(()=> {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <Todoprovider value={{todos, addTodo, updatedTodo, deleteTodo, toggleComplete}}>
 <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <Form/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key = {todo.id}
                          className='w-full'>
                            <TodoItem todo = {todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </Todoprovider>
  )
}

export default App
