import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Axios } from "axios";
import { useAlert } from "react-alert";

import "./AddTask.scss";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

const AddTask = () => {
    const [taskDescription, setTaskDescription] = useState("");

    const alert = useAlert();
    const onChange = (e) => {
        setTaskDescription(e.target.value);
    };

    const handleTaskAddition = () => {
        try {
            if (taskDescription.length === 0) {
                return alert.error("Teste");
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
