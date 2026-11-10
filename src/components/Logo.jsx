function Logo() {

    const payoff = "Molisana, pasta sana";
    const stile = {

        padding: "1rem"
    };
    return (
        <figure>
            <img src="/logo.png" alt="Logo" />
            <p className="prova" style={stile}>{payoff}</p>
        </figure>
    )
}
export default Logo;