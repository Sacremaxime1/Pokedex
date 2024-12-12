import './Navbar.css';
import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav>
            <Link to="/">Homepage</Link> | <Link to="/Team">Team</Link>
        </nav>
    )
}