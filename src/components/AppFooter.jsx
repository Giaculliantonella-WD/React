import Logo from "./Logo";
function AppFooter() {
    return (
        <footer className="container">
            <nav className="footer-nav">
                <div className="footer-col">
                    <Logo />
                </div>
                <div className="footer-col">
                    <div>
                        <h4>Pastificio</h4>
                        <ul>
                            <li><a href="#">Il Pastificio</a></li>
                            <li><a href="#">Grano</a></li>
                            <li><a href="#">Filiera</a></li>
                            <li><a href="#">100 anni di pasta</a></li>
                            <li><a href="#">Sartoria della pasta</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-col">
                    <div>
                        <h4>Prodotti</h4>
                        <ul>
                            <li><a href="#">Le classiche</a></li>
                            <li><a href="#">Le integrali</a></li>
                            <li><a href="#">Le speciali</a></li>
                            <li><a href="#">Le Biologiche</a></li>
                            <li><a href="#">Le gluten-free</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </footer>
    );
}

export default AppFooter;