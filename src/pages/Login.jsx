import { useNavigate } from 'react-router-dom'

import './Login.scss'
import logo from '../assets/images/logo-2.png'
import CustomButton from '../components/CustomButton'

const Login = () => {
  const navigate = useNavigate()

  const handleSingInClick = () => {
    navigate('/tasks')
  }

  return (
        <div className="login-container">
            <img className='logo' src={logo} alt="Logo da Full Stack Club" />
            <div className="button-container">
                <CustomButton onClick={handleSingInClick}>Entrar</CustomButton>
            </div>
        </div>
  )
}

export default Login
