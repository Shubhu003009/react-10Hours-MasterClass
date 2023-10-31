import { useState } from 'react'
import AddTaskForm from '../Components/App/AddTaskForm'
import TaskList from '../Components/App/TaskList'
import Header from '../Common/Header'

function App() {

  const [tasks, settasks] = useState([])
  const [editTask, seteditTask] = useState({
    name:''
  })
  const [isEditing, setisEditing] = useState(false)


  function handleUpdateChange(e){
    let value = e.target.value
    seteditTask({name:value})
  }

  function addTask(task){
    if(!isEditing) {settasks(prev => [...prev, task])}
    else{ 
      settasks(task)
    }
  } 

  function deleteTask(taskId){
    let filterdTasks = tasks.filter(t => t.id !== taskId)
    settasks(filterdTasks)
  }
   
  function toggleTask(taskId){
    settasks(prev => prev.map(t => (
      t.id === taskId 
      ? {...t, checked: !t.checked}
      : t
    )))
  }

  function updateTask(task){
    seteditTask({ name: task.name, id: Date.now() }) 
    if(isEditing) seteditTask({name:''})
    setisEditing(!isEditing)
  }
  
  return (
    <>
      <Header/>
      <AddTaskForm 
        addTask={addTask}
        handleUpdateChange={handleUpdateChange}
        editTask={editTask}
        seteditTask={seteditTask}
        updateTask={updateTask}
        isEditing={isEditing}
        setisEditing={setisEditing}
      />
      
      { tasks && <TaskList 
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
        updateTask={updateTask}
      /> }  

    </>
  )
}

export default App
