import airbnb from "./assets/airbnb-logo.png"
import "./Navbar.css"

function Navbar() {
    return (
        <nav>
            <img src={ airbnb } alt="airbnb logo" className="nav--logo"/>
        </nav>
    )
}

export default Navbar