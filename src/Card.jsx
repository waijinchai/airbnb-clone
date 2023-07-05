import star from "../public/assets/star.png"
import "./Card.css"

function Card(props) {
    return (
        <div className="card">
            <img src={`../assets/${props.img}`} alt="katie-zaferes" className="card--image"/>
            <div className="card--stats">
                <img src={ star } alt="star icon" className="card--star"/>
                <span>{props.rating}</span>
                <span className="grey">({props.reviewCount}) • </span>
                <span className="grey">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p><span className="bold card--price">From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card