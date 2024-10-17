import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Signup from "./Components/Signup"
import Login from "./Components/Login"
import Home from './Components/Home';


function App() {
  // const [count, setCount] = useState(0)

  return (
   
      <BrowserRouter>

        <Routes>
            <Route path='/register' element={<Signup></Signup>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
       </Routes>


</BrowserRouter>
  )
}

export default App
