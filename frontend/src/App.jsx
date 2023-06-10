import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './components/login.component'
import Home from './components/home.component'

function App() {
  const [count, setCount] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("id"));

  return (
		<Router>
			<Routes>
				<Route exact path="/login" element={<Login/>} />
				{ isAuthenticated ?
					(<Route exact path="/home/*" element={<Home/>} />):
					(<Route exact path="/home/*" element={<Login setIsAuthenticated = {setIsAuthenticated} />}  />)
				}
				<Route path="*" element={<Login/>} />
			</Routes>
		</Router>
  	);
}

export default App
