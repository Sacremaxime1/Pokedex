import { useDispatch } from "react-redux"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {add, remove} from "../features/teamSlice"
import { Button } from "../components/button/Button";
import axios from "axios";


export function PokeData() {
    const [ data, setData ] = useState(null);
    const[ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);
    const dispatch = useDispatch()
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true); // Commence le chargement
                const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1008"); // Limite à 10 pour simplifier
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
    return(
        <div>
            <h1>Pokedex</h1>
            <ul>
                {data.map((item, index) => {
                    const id = item.url.split("/").filter(Boolean).pop();
                    return (
                        <li key={id}>
                            <Link to={`/pokemon/${item.name}`}>
                                <p> {item.id} {item.name}</p>
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={item.name}/>
                            </Link>
                            <Button text="-" onClickBtn={() => dispatch(remove({name: item.name, id: index + 1, img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}))}></Button>
                            <Button text="+" onClickBtn={() => dispatch(add({name: item.name, id: index + 1, img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}))}></Button>
                        </li>
                    )
                }
                    
                )}
            </ul>
        </div>
    )
}

