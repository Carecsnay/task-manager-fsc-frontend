import { useState } from "react";

function App() {
    const [message, setMessage] = useState("Initial value");

    const handlerMessage = () => {
        setMessage("Update Value");
    };

    return (
        <>
            <h1>{message}</h1>
            <button onClick={handlerMessage}>My button</button>
        </>
    );
}

export default App;
