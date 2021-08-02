import './Button.scss'

const Button = (props) => {
    return (
        <button className={`btn ${props.size}`} {...props}>{}</button>
    )
}

export default Button
