import "./Login.scss";
import logo from "../assets/images/logo-2.png";
import CustomButton from "../components/CustomButton";

const Login = () => {
    return (
        <div className="login-container">
            <img src={logo} alt="Logo da Full Stack Club" />
            <CustomButton>Entrar</CustomButton>
        </div>
    );
};

export default Login;