import TaskItem from "./TaskItem";

const TaskList = ({ tasks, deleteTask, toggleTask, updateTask }) => {
  return (
    <div style={{marginTop:'20px'}}>
      {tasks.map((task, index) => (
        <TaskItem 
            key={index} 
            task={task}
            index={index}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            updateTask={updateTask}
             />
      ))}
    </div>
  );
};

export default TaskList;
