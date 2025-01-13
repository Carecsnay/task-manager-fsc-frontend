//Deixar um arquivo com .JSX ajuda no autocomplete, portanto, sempre que usar JS lembre-se de utilizar a extensão correta.

import axios from "axios";
import { useEffect, useState, useMemo, useCallback } from "react";

import "./Tasks.scss";
import TaskItem from "./TaskItem";
import AddTask from "./AddTask";
import { toast } from "react-toastify";

function Tasks() {
    const [tasks, setTasks] = useState([{}]);

    //Pegando tarefas do BD. O UseCallback é semelhante ao useMemo, a diferença é que ele guarda uma função em memória e só atualiza quando o array de dependência é alterado. 
    const fetchTasks = useCallback(async () => {
        try {
            const { data } = await axios.get("https://task-manager-fsc-backend.onrender.com/tasks"); //pegando tarefas da nossa API
            setTasks(data); //setando tarefas no estado!
        } catch (_error) {
            toast.error("Não foi possível recuperar as tarefas no momento, tente novamente mais tarde!");
        }
    }, []);

    useEffect(() => {
        fetchTasks(); //useEffect não pode retornar uma promise (async)
    }, [fetchTasks]);

    const lastTask = useMemo(() => {
        //o useMemo é utilizado quando o useState das tasks muda, evitando calculo desnecessário dos map do tasks-list
        return tasks.filter((task) => task.isCompleted === false);
    }, [tasks]);

    const completedTasks = useMemo(() => {
        //guarda um resultado de uma função em memória
        return tasks.filter((task) => task.isCompleted); //mesmo que colocar task.isCompleted === true
    }, [tasks]);

    return (
        <div className="tasks-container">
            <h2>Minhas tarefas</h2>
            <div className="last-tasks">
                <h3>Últimas tarefas</h3>
                <AddTask fetchTasks={fetchTasks} />
                <div className="tasks-list">
                    {lastTask.map((tasksNotCompleted) => (
                        <TaskItem key={tasksNotCompleted._id} task={tasksNotCompleted} fetchTasks={fetchTasks} />
                    ))}
                </div>
            </div>
            <div className="completed-tasks">
                <h3>Tarefas concluídas</h3>
                <div className="tasks-list">
                    {completedTasks.map((completedTask) => (
                        <TaskItem key={completedTask._id} task={completedTask} fetchTasks={fetchTasks} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Tasks;
