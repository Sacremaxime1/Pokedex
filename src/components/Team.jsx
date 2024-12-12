import { useDispatch, useSelector } from "react-redux"
import { remove } from "../features/teamSlice"
import { Button } from "./button/Button"

export const Team = () => {
    const dispatch = useDispatch()
    const pokemonTeam = useSelector((state) => state.team.value)    

    return (
        <div>
        <h1>Team</h1>
        <ul>
            {pokemonTeam.map((item, index) => (
                <li key={index}>
                    <p>{item.name}</p>
                    <img
                        src={item.img}
                        alt={item.name}/>
                    <Button text="-" onClickBtn={() => {dispatch(remove({name: item.name, img: item.img}))}}></Button>
                </li>
            ))}
        </ul>
    </div>
    )
}