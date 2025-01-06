import axios from "axios";
import { useEffect, useState } from "react";

import TaskItem from "./components/TaskItem";

function App() {
    const [tasks, setTasks] = useState([{}]);

    //Pegando tarefas do BD
    const fetchTasks = async () => {
        try {
            const { data } = await axios.get("https://task-manager-fsc-backend.onrender.com/tasks"); //pegando tarefas da nossa API
            setTasks(data); //setando tarefas no estado!
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTasks(); //useEffect não pode retornar uma promisse (async)
    }, []);

    return (
        <>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </>
    );
}

export default App;
