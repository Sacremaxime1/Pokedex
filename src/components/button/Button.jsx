import "./Button.css"

export const  Button = (props) => {  
    return (
        <div className="btn" onClick={() => props.onClickBtn()} >{props.text}</div>
    )
}