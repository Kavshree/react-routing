import './App.css'
import { CustomAuth } from './components/auth'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <CustomAuth>
        <NavBar />
        <Outlet />
      </CustomAuth>
    </>
  )
}

export default App
