import React from "react"
import { Link } from "react-router-dom"
import './Pokecard.css';

export const Card = (props) => {
    return (
        <div className="card">
            <Link to={`/pokemon/${props.name}`}>
                <p>{props.name}</p>
                <img src={props.src} alt={props.name}/>
            </Link>
        </div>
    )
}