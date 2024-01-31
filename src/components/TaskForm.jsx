import { useContext, useState } from "react"
import { TaskContext } from "../context/TaskContext"

export function TaskForm() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const {createTask} = useContext(TaskContext)

    const handleSubmit = (e) =>{
        // cancelar comportamiento por defecto
        e.preventDefault()
        createTask({title, description})

        // vaciar formulario despues de enviarlo
        setTitle("")
        setDescription("")
    }

    return (
        <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">

                <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
                <input placeholder="Escribe tu tarea"
                onChange={function evento(e) {setTitle(e.target.value)}} 
                value={title}
                className="bg-slate-300 p-3 w-full mb-2"
                autoFocus/>

                <textarea name="description" id="" cols="30" rows="2" placeholder="Escribe la descripción"
                onChange={(e) => setDescription(e.target.value)} 
                value={description}
                className="bg-slate-300 p-3 w-full mb-2"></textarea>

                <button
                    className="bg-indigo-500 px-3 py-1 text-white rounded-md"
                >Guardar</button>
            </form>
        </div>
    )
}