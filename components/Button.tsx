interface ButtonProps {
    props?: Object;
    title?: String;
    className?: any;
    style?: Object;
    onClick?: any;
}

const Button = (props:ButtonProps) => {
    return (
        <div style={props.style} className={`button bg-color-1 ${props.className}`} onClick={props.onClick}>{props.title}</div>
    )   
}

export default Button;