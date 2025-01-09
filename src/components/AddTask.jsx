import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";

import "./AddTask.scss";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import axios from "axios";

const AddTask = () => {
    const [taskDescription, setTaskDescription] = useState("");

    const onChange = (e) => {
        setTaskDescription(e.target.value);
    };

    const handleTaskAddition = async () => {
        try {
            if (taskDescription.length === 0) {
                toast.error("A tarefa precisa de uma descrição para ser adicionada!");
            } else {
                toast.success("A tarefa foi adicionada com sucesso!");
                return await axios.post("https://task-manager-fsc-backend.onrender.com/tasks", {
                    description: taskDescription,
                    isCompleted: false,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="add-task-container">
            <CustomInput label="Adicionar tarefa..." value={taskDescription} onChange={onChange} />
            <CustomButton onClick={handleTaskAddition}>
                <FaPlus fontSize={14} color="#ffffff" /> {/*Children do CustomButton*/}
            </CustomButton>
        </div>
    );
};

export default AddTask;
