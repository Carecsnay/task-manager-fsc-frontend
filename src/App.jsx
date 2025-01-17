import { Route, Routes } from 'react-router-dom'

import './App.scss'
import Home from './pages/Home'
import Login from './pages/Login'

function App () {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/tasks' element={<Home />} />
    </Routes>
  )
}

export default App
