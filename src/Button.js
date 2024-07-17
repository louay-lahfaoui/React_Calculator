export const Button =(props)=>{
    return (
        <button className= 'button' onClick={() => {props.handleClick(props.value)}}>{props.value}</button>
    )
}