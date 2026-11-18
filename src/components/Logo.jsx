function Logo(props) {
    const sottotesto = props.sottotesto

    const messaggioAlternativo = "Testo mancante"

    const stile = {

        padding: "1rem"
    };


    return (
        <figure>

            <img src="/logo.png" alt="Logo" />
            <p className="prova" style={stile}>{props.payoff}</p>

            {/* {sottotesto ? <p className="sottotesto"> {sottotesto} </p> : <p className="sottotesto">Testo Mancante </p>}
            <p className="sottotesto"> {sottotesto ? sottotesto : "Testo mancante"}</p> */}
            <p className="sottotesto">
                {sottotesto || messaggioAlternativo}
            </p>
        </figure>
    )
}
export default Logo;