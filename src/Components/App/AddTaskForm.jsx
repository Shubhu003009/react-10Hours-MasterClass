
const AddTaskForm = ({addTask, updateTask, editTask, seteditTask, handleUpdateChange, setisEditing, isEditing}) => {


    function handleFormSumbit(e){
        e.preventDefault()
        let value = e.target.task.value
        let taskItem = {
            name: value,
            id: Date.now(),
            checked: false
        }
        if(value) addTask(taskItem);
        seteditTask({name:''})
        if(isEditing) setisEditing(!isEditing)
    }

    return (
        <div style={{textAlign:'center', marginTop:'20px'}}>
            <form onSubmit={handleFormSumbit}>
                <input value={editTask.name} onChange={handleUpdateChange}  name="task" type="text" />
                <button type="submit">{isEditing ? 'Update' : 'Save' }</button>
            </form>
        </div>
    )
}

export default AddTaskForm