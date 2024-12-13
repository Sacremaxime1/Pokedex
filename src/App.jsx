import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from './components/Navbar'
import {Homepage} from './components/Homepage'
import { Pokemon } from './components/Pokemon'
import { Team } from './components/Team'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const isDarkMode = useSelector(state => state.darkMode.value)
  useEffect(()=> {
    isDarkMode ? document.body.classList.add("dark") : document.body.classList.remove("dark")
  },[isDarkMode])
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/Pokedex" Component={Homepage} />
        <Route path="/team" Component={Team} />
        <Route path="/pokemon/:name" Component={Pokemon} />

    </Routes>
  </BrowserRouter>
  )
}

export default App
