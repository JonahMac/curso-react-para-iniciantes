import "./TaskList.css";
import Proptypes from "prop-types";
import TaskItem from "../Taskitem/Taskitem";
import plusicon from "../../img/plusicon.svg"

export default function TaskList({
  title,
  taskState,
  onAddTask,
  tasks,
  onTaskUpdate,
  onDeleteTask
}) {
  const addTask = () => {
    onAddTask("Nova Tarefa", taskState);
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              taskState={task.state}
              onTaskUpdate={onTaskUpdate}
              onDeleteTask={onDeleteTask}
            />
          );
        })}
        {tasks.length === 0 && <div className="empty-list">Lista Vazia</div>}
         <button className="btn" onClick={addTask}>
        <img src={plusicon} alt="plus"/> 
        Adicionar Tarefa
        </button>
      </div>
     
    </div>
  );
}

TaskList.propTypes = {
  title: Proptypes.string.isRequired,
  onAddTask: Proptypes.func.isRequired,
  tasks: Proptypes.array.isRequired
};
