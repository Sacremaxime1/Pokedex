import { useDispatch, useSelector } from "react-redux"
import { remove } from "../features/teamSlice"
import { Link } from "react-router-dom"

export const Team = () => {
    const dispatch = useDispatch()
    const pokemonTeam = useSelector((state) => state.team.value)    

    return (
        <div>
        <h1>Team</h1>
        <ul>
            {pokemonTeam.map((item, index) => (
                <li key={index}>
                    <Link to={`/pokemon/${item.name}`}>
                       <p>{item.name}</p>
                        <img
                          src={item.img}
                          alt={item.name}/>
                    </Link>
                    <button onClick={() => {dispatch(remove({name: item.name, img: item.img}))}}>-</button>
                </li>
            ))}
        </ul>
    </div>
    )
}