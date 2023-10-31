
const TaskItem = ({task, deleteTask, toggleTask, updateTask}) => {
  

  return (
    <div style={{marginBottom:'12px', border:'1px solid black', borderRadius:'5px', padding:'10px'}}>
        <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
            <input type="checkbox" onChange={() => toggleTask(task.id)}/>
            <h3 style={{wordWrap:'break-word', width:'200px', maxWidth:'200px'}} >{task.name}</h3>
            <button onClick={() => deleteTask(task.id)} style={{padding:'4px 8px', background:'red', color:'white', border:'none'}}> X </button>
            <button onClick={() => updateTask(task)} style={{padding:'4px 8px', background:'dodgerblue', color:'white', border:'none'}}> Update </button>
        </div>
    </div>
  )
}

export default TaskItem