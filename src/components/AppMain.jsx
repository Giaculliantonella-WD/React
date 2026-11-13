import ProductCard from "@/components/ProductCard";

function AppMain() {

    const pastaspaziale = {
        title: "pasta fresca",
        src: "data:image/jpeg;base64,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"
    };

    const products = [
        {
            id: 1,
            src: "https://www.lamolisana.it/wp-content/uploads/2021/04/1-spaghetto-quadrato.jpg",
            title: "N.4 Spaghetto Quadrato Bucato",
            type: "lunga",
            time: 6,
        },
        {
            id: 2,
            src: "https://www.lamolisana.it/wp-content/uploads/2021/04/5-fettuccine.jpg",
            title: "N.5 Fettuccine",
            type: "lunga",
            time: 13,
        },
        {
            id: 3,
            src: "https://www.lamolisana.it/wp-content/uploads/2021/04/6-linguine.jpg",
            title: "N.6 Linguine",
            type: "lunga",
            time: 12,
        },
        {
            id: 4,
            src: "https://www.lamolisana.it/wp-content/uploads/2021/04/7-mezze-linguine.jpg",
            title: "N.7 Mezze Linguine",
            type: "lunga",
            time: 11,
        },
        {
            id: 5,
            src: "https://www.lamolisana.it/wp-content/uploads/2021/04/11-spaghettino-quadrato.jpg",
            title: "n.11 Spaghettino Quadrato",
            type: "lunga",
            time: 9,
        },
        {
            id: 6,
            src: "https://www.lamolisana.it/wp-content/uploads/2021/05/38-mezze-maniche.jpg",
            title: "N.38 Mezze maniche",
            type: "corta",
            time: 12,
        },
        {
            id: 7,
            src: "https://www.lamolisana.it/wp-content/uploads/2021/05/44-sedani.jpg",
            title: "N.44 Sedani",
            type: "corta",
            time: 8,
        },
        {
            id: 8,
            src: "https://www.lamolisana.it/wp-content/uploads/2021/05/49-sedani.jpg",
            title: "N.49 Sedanini",
            type: "corta",
            time: 8,
        },
        {
            id: 9,
            src: "https://www.lamolisana.it/wp-content/uploads/2021/05/53-lumachine.jpg",
            title: "N.53 Lumachine",
            type: "corta",
            time: 12,
        },
        {
            id: 10,
            src: "https://www.lamolisana.it/wp-content/uploads/2021/05/55-chifferi-rigati.jpg",
            title: "N.55 Chifferi rigati",
            type: "corta",
            time: 12,
        },
        {
            id: 11,
            src: "https://www.lamolisana.it/wp-content/uploads/2021/05/58-misto-corto.jpg",
            title: "N.58 Misto corto",
            type: "corta",
            time: 9,
        },
        {
            id: 12,
            src: "https://www.lamolisana.it/wp-content/uploads/2021/06/84-ditale-quadrato.jpg",
            title: "N.84 Ditale Quadrato",
            type: "cortissima",
            time: 12,
        },
    ];


    const BestSeller = [
        {
            id: 1,
            src: "https://www.lamolisana.it/wp-content/uploads/2021/04/1-spaghetto-quadrato.jpg",
            title: "N.4 Spaghetto Quadrato Bucato",
            type: "lunga",
            time: 6,
        },
        {
            id: 2,
            src: "https://www.lamolisana.it/wp-content/uploads/2021/04/5-fettuccine.jpg",
            title: "N.5 Fettuccine",
            type: "lunga",
            time: 13,
        },
        {
            id: 3,
            src: "https://www.lamolisana.it/wp-content/uploads/2021/04/6-linguine.jpg",
            title: "N.6 Linguine",
            type: "lunga",
            time: 12,
        },

    ]

    return (
        <main>
            <section id="products">

                <h2>Best Seller</h2>
                <div className="container card-container">

                    <ProductCard item={pastaspaziale} />
                    <ProductCard item={products[2]} />

                </div>

                <h2>Liste Prodotti</h2>
                <div className="container card-container">
                    {products.map(prodotto =>
                        <ProductCard key={prodotto.id} item={prodotto} />)}
                </div>
            </section>
        </main>
    )
}









export default AppMain;