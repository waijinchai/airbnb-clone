import katie from "./assets/katie-zaferes.png"
import star from "./assets/star.png"
import "./Card.css"

function Card() {
    return (
        <div className="card">
            <img src={ katie } alt="katie-zaferes" className="card--image"/>
            <div className="card--stats">
                <img src={ star } alt="star icon" className="card--star"/>
                <span>5.0</span>
                <span className="grey">(6) • </span>
                <span className="grey">USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}

export default Card