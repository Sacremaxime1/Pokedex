import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from './components/Navbar'
import {Hompage} from './components/Homepage'
import { Pokemon } from './components/Pokemon'
import { Team } from './components/Team'

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" Component={Hompage} />
        <Route path="/team" Component={Team} />
        <Route path="/pokemon/:name" Component={Pokemon}/>

    </Routes>
  </BrowserRouter>
  )
}

export default App
