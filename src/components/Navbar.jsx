import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav>
            <Link to="/">homepage</Link> | <Link to="/Team">Team</Link> | <Link to="/Pokemon">Pokemon</Link>
        </nav>
    )
}