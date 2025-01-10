import "./App.scss";
import SideBar from "./components/SideBar";
import Tasks from "./components/Tasks";

function App() {
    return (
        <div className="app-container">
            <SideBar />
            <Tasks />
        </div>
    );
}

export default App;
