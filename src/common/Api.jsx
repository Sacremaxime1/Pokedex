import './Api.css';
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {add, remove} from "../features/teamSlice"
import axios from "axios";
import { Card } from '../pokecard/Pokecard';
import { Search } from './Search';


export function PokeData() {
    const [ data, setData ] = useState([]);
    const[ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);
    const [query, setQuery] = useState('')
    const dispatch = useDispatch()

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
    console.log(filteredPokemon);
    
    return(
        <div>
            <h1>Pokedex</h1>
            <input type='text' placeholder="nom de pokemon" value={query} onChange={(e) => setQuery(e.target.value)} />
            <ul>
                {filteredPokemon.map((item, index) => {
                    const id = item.url.split("/").filter(Boolean).pop();
                    return (
                        <li key={id}>
                            <Card name={item.name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={item.name} id={id}></Card>
                            <button onClick={() => {dispatch(remove({name: item.name, id: index + 1, img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}))}}>-</button>
                            <button onClick={() => {dispatch(add({name: item.name, id: index + 1, img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}))}}>+</button>
                        </li>
                    )
                }
                    
                )}
            </ul>
        </div>
    )
}

