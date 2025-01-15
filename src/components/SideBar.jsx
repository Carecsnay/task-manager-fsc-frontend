import CustomButton from './CustomButton'
import { useNavigate } from 'react-router-dom'

import './SideBar.scss'
import logo from '../assets/images/logo.png'

const SideBar = () => {
  const navigate = useNavigate()

  const handleSingOutClick = () => {
    navigate('/login')
  }
  return (
    <div className='sidebar-container'>
      <div className='logo'>
        <img src={logo} alt='logo da full stack club' />
      </div>
      <div className='sing-out'>
        <CustomButton onClick={handleSingOutClick}>Sair</CustomButton>
      </div>
    </div>
  )
}

export default SideBar
