import { useState } from "react";

function ProductCard({ nome, img, time, type }) {

    // const { nome, img, time, type } = props;
    // destructoring;
    // const nome = props.nome;
    // const img = props.img;
    // const type = props.type;
    // const time = props.time;

    const [isOpen, setIsOpen] = useState(true);

    function exandCard() {
        const nuovoValore = !isOpen;
        setIsOpen(nuovoValore)
    }


    return (
        <div className="prod-card">
            <img onClick={exandCard} src={img} alt={nome} />
            <h3>{nome}</h3>
            {isOpen ? <p>Pasta {type} - Cottura {time} minuti</p> : null}


        </div >
    )
}

export default ProductCard;