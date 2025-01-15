import { AiFillDelete } from 'react-icons/ai'
import axios from 'axios'
import { toast } from 'react-toastify'

import './TaskItem.scss'

const TaskItem = ({ task, fetchTasks }) => {
  const handleTaskDeletion = async () => {
    try {
      await axios.delete(`${process.env.API_REMOTE_URL}/tasks/${task._id}`)

      await fetchTasks()

      return toast.success('Tarefa excluída com sucesso!')
    } catch (_error) {
      toast.error('Não foi possível excluir a tarefa!')
    }
  }

  const handleTaskCompletionTask = async (e) => {
    try {
      await axios.patch(`${process.env.API_REMOTE_URL}/tasks/${task._id}`, {
        isCompleted: e.target.checked
      })

      await fetchTasks()
      return toast.success('Status da tarefa foi modificado!')
    } catch (_error) {
      toast.error('Não foi possível mudar o status da tarefa!')
    }
  }

  return (
        <>
            <div className="task-item-container">
                <div className="task-description">
                    <label className={task.isCompleted ? 'checkbox-container-completed' : 'checkbox-container'}>
                        {task.description}
                        <input
                            type="checkbox"
                            defaultChecked={task.isCompleted}
                            onChange={(e) => handleTaskCompletionTask(e)} // recebe o isCompleted da handleTaskCompletionTask (true/false)
                        />
                        <span className={task.isCompleted ? 'checkmark completed' : 'checkmark'}></span>
                    </label>
                </div>

                <div className="delete">
                    <AiFillDelete size={18} color="#F97474" onClick={handleTaskDeletion} />
                </div>
            </div>
        </>
  )
}
export default TaskItem
