function Logo(props) {
    const sottotesto = props.sottotesto

    const stile = {

        padding: "1rem"
    };
    return (
        <figure>
            <img src="/logo.png" alt="Logo" />
            <p className="prova" style={stile}>{props.payoff}</p>
            <p>{props.sottotesto}</p>
        </figure>
    )
}
export default Logo;