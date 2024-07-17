export const Display =(props)=>{
    return (
        <div className="display">
        <div>
            {props.input}
        </div>
        <div>
            {props.result}
        </div>
        </div>
    )
}