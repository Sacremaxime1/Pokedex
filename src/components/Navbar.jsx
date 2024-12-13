import './Navbar.css';
import { Link } from "react-router-dom"
import { toggleTheme } from "../features/themeSlice"
import { useDispatch } from "react-redux"


export const Navbar = () => {
    const dispatch = useDispatch()
    
    return (

        <div>
            <nav>
                <Link to="/Pokedex">homepage</Link> | <Link to="/Team">Team </Link>
            </nav>
            <button onClick={() => {dispatch(toggleTheme())}}>toggle theme</button>
        </div>
    )
}