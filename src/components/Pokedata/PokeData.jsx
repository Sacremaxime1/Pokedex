import './Api.css';
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {add, remove} from "../../features/teamSlice"
import axios from "axios";
import { Card } from '../pokecard/Pokecard';


export function PokeData() {
    const [ data, setData ] = useState([]);
    const[ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);
    const [query, setQuery] = useState('')
    const dispatch = useDispatch()
    const pokemonTeam = useSelector((state) => state.team.value)

    const filteredPokemon = data.filter((item) => item.name.includes(query))
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true); // Commence le chargement
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1010&offset=0`); // Limite à 10 pour simplifier
                setData(response.data.results); // Stocke uniquement le tableau de résultats
                setError(false);
            } catch (err) {
                console.error(err);
                setError(true);
            } finally {
                setLoading(false); // Arrête le chargement
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <p>Chargement des données...</p>
    } 
    
    if (error) {
        return <p>Liste introuvable</p>
    }
    const removePokemon = (pokemon) => {
        dispatch(remove(pokemon))
    }
    const addPokemon = (pokemon) => {
        pokemonTeam.length < 6 ? dispatch(add(pokemon)) : alert("Limite de Pokemon Atteinte")
    }
    return(
        <div>
            <h1>Pokedex</h1>
            <input type='text' placeholder="nom de pokemon" value={query} onChange={(e) => setQuery(e.target.value)} />
            <ul>
                {filteredPokemon.map((item, index) => {
                    const id = item.url.split("/").filter(Boolean).pop();
                    const alreadyTeam = pokemonTeam.some(e => e.name === item.name)
                    return (
                        <li key={id}>
                            <Card name={item.name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={item.name} id={id}></Card>
                            <button onClick={() => {removePokemon({name: item.name, id: index + 1, img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`})}}>-</button>
                            {
                               !alreadyTeam && <button onClick={() => {addPokemon({name: item.name, id: index + 1, img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`})}}>+</button>
                            }
                        </li>
                    )
                }   
            )}
            </ul>
        </div>
    )
}

