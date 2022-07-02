

const Button = (props) => {
    return <button onClick = {props.callFunction} type={props.type} className={props.className}>{props.children}</button>
}

export default Button;