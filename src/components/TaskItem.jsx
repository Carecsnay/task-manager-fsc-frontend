import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-toastify";

import "./TaskItem.scss";

const TaskItem = ({ task, fetchTasks }) => {
    const handleTaskDeletion = async () => {
        try {
            await axios.delete(`https://task-manager-fsc-backend.onrender.com/tasks/${task._id}`);

            await fetchTasks();

            return toast.success("Tarefa excluída com sucesso!");
        } catch (error) {
            toast.error("Não foi possível excluir a tarefa!");
        }
    };

    return (
        <>
            <div className="task-item-container">
                <div className="task-description">
                    <label className={task.isCompleted ? "checkbox-container-completed" : "checkbox-container"}>
                        {task.description}
                        <input type="checkbox" defaultChecked={task.isCompleted} />
                        <span className={task.isCompleted ? "checkmark completed" : "checkmark"}></span>
                    </label>
                </div>

                <div className="delete">
                    <AiFillDelete size={18} color="#F97474" onClick={handleTaskDeletion} />
                </div>
            </div>
        </>
    );
};
export default TaskItem;
