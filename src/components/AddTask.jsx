import { useState } from "react";

import CustomInput from "./CustomInput";

const AddTask = () => {
    const [taskDescription, setTaskDescription] = useState("");

    const onChange = (e) => {
        setTaskDescription(e.target.value);
    };

    return (
        <div className="add-task-container">
            <CustomInput label="Adicionar Tarefa..." value={taskDescription} onChange={onChange} />
        </div>
    );
};

export default AddTask;
