//Import de bibliotecas
import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer, Zoom } from "react-toastify";
import { BrowserRouter } from "react-router-dom";

//Import de arquivos
import "./index.scss";

//Import componentes
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ToastContainer
                position="bottom-center"
                autoClose={2500}
                limit={1}
                pauseOnHover
                theme="dark"
                transition={Zoom}
            />
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
