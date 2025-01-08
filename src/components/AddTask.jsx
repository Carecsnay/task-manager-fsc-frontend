import { useState } from "react";

import "./AddTask.scss";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

const AddTask = () => {
    const [taskDescription, setTaskDescription] = useState("");

    const onChange = (e) => {
        setTaskDescription(e.target.value);
    };

    return (
        <div className="add-task-container">
            <CustomInput label="Adicionar tarefa..." value={taskDescription} onChange={onChange} />
            <CustomButton>+</CustomButton>
        </div>
    );
};

export default AddTask;
