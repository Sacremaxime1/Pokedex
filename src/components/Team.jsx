import { useDispatch, useSelector } from "react-redux"
import { remove } from "../features/teamSlice"
import { Card } from "./pokecard/Pokecard"
export const Team = () => {
    const dispatch = useDispatch()
    const pokemonTeam = useSelector((state) => state.team.value)    

    return (
        <div>
        <h1>Team</h1>
        <ul>
            {pokemonTeam.map((item, id) => (
                <li key={id}>
                    <Card name={item.name} src={item.img} alt={item.name}></Card>
                    <button onClick={() => {dispatch(remove({name: item.name, img: item.img}))}}>-</button>

                </li>
            ))}
        </ul>
    </div>
    )
}