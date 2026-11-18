function ProductCard({ nome, img, time, type, cosafare }) {

    // const { nome, img, time, type } = props;
    // destructoring;
    // const nome = props.nome;
    // const img = props.img;
    // const type = props.type;
    // const time = props.time;


    return (
        <div className="prod-card">
            <img src={img} alt={nome} />
            <h3>{nome}</h3>
            {(type && time) ? <p>Pasta {type} - Cottura {time} minuti</p> : "Non ci informazioni disponiili"}

        </div>
    )
}

export default ProductCard;