import React from "react";

export const Search = (props) => {
    return (
        <input type="text" placeholder={props.placeholder} onChange={() => props.onChangeSearch}/>

    )
}