function ProductCard(props) {


    const prodotto = props.item;


    return (
        <div className="prod-card">
            <img src={prodotto.src} alt={prodotto.title} />
            <h3>{prodotto.title}</h3>
        </div>
    )
}

export default ProductCard;