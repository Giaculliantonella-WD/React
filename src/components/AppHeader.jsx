import Logo from "./Logo";
// import linksObjects from "../data/header.links";
import linksObjects from "@/data/header.links"



function AppHeader() {

    // const linksLabels = [
    //     "Home",
    //     "Prodotti",
    //     "Chi Siamo",
    //     "Contatti",
    // ];

    // const links = linksLabels.map((elemento, i) => {
    //         return <li key={i}><a href="#">{elemento}</a></li>
    //     });

    const links = linksObjects.map(elemento => {
        return <li key={elemento.id}><a href={elemento.url}>{elemento.text}</a></li>
    });



    return <header>
        <Logo payoff="sottotilo" sottotesto="hello" />
        <nav>
            <ul>

                {links}

            </ul>
        </nav>
    </header>
}



export default AppHeader;