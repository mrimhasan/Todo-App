import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react'
import { useTodo } from '../Contents'
function Form() {

  
  const [todo, setTodo] = useState("")
  const {addTodo} = useTodo()

  const add = (e)=> {
    e.preventDefault()

    if(!todo) return
    addTodo({todo, completed: false}) // we use todo == todo:todo
    setTodo("")
  }

  const notify = () => {
    if(!todo) return
    toast.success("Todo Item Create 📁", {
   
  })}

  return (
    <form onSubmit={add} className="flex"> 
        <input
            type="text"
            placeholder="Write Todo..."
            className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            value={todo}
            onChange = {(e)=>setTodo(e.target.value)}
        />
        <button onClick={notify} type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
            Add
        </button>
        <ToastContainer draggable position="top-center"/>
    </form>
);
}

export default Form
