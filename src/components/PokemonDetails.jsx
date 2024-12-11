import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export function PokemonDetails() {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
                console.log(response);
                
                setPokemon(response.data);
                setError(false)
;            } catch (err) {
                console.error(err);
                setError(true)
                
            } finally {
                setLoading(false);
            }

        };
        fetchData();
        
    }, [name]);

    if (loading) {
        return <p>Chargement des données...</p>
    }
    if (error) {
        return <p>Pokemon non existant</p>
    }

    return (
        <div>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>Type(s): {pokemon.types.map((type) => type.type.name).join(", ")}</p>
            <p>Poid: {pokemon.weight}</p>
            <p>Taille: {pokemon.height}</p>
            <p>Statistiques: {pokemon.stats.map((stat) => `${stat.stat.name}: ${stat.base_stat}`).join(", ")}</p>
            <p>Capacités: {pokemon.abilities.map((ability) => ability.ability.name).join(", ")}</p>
            <button onClick={() => window.history.back()}>Retour</button>
        </div>
    )
}