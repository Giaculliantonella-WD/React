import Logo from "./Logo";


function AppHeader() {

    // const linksLabels = [
    //     "Home",
    //     "Prodotti",
    //     "Chi Siamo",
    //     "Contatti",
    // ];
    const linksObjects = [
        { id: 1, text: 'Home', url: '#' },
        { id: 2, text: 'Prodotti', url: '#prodotti' },
        { id: 3, text: 'Chi Siamo', url: '#about' },
        { id: 4, text: 'Contatti', url: '#contatti' },
    ];
    // const links = linksLabels.map((elemento, i) => {
    //         return <li key={i}><a href="#">{elemento}</a></li>
    //     });

    const links = linksObjects.map(elemento => {
        return <li key={elemento.id}><a href={elemento.url}>{elemento.text}</a></li>
    });



    return <header>
        <Logo />
        <nav>
            <ul>

                {links}

            </ul>
        </nav>
    </header>
}



export default AppHeader;