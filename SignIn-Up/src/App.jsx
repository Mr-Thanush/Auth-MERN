import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/navbar'
import SignIn from './components/SignIn/signin'
import SignUp from './components/SignUp/signup'
import { Routes,Route ,useLocation} from 'react-router-dom'
import Home from './components/Home/home'
import Dashboard from './components/Dashboard'

function App() {
  const [count, setCount] = useState(0)
  const location=useLocation();
  const hide=location.pathname==="/";
  
  return (
    <>
    {!hide && <NavBar /> }

 <Routes>
  <Route path='/dashboard' element={<Dashboard />}/>
  <Route path='/' element={<Home />}/>
  <Route path='/signin' element={<SignIn />}/>
   <Route path='/signup' element={<SignUp />}/>
 </Routes>
    </>
  )
}

export default App
