import star from "../public/assets/star.png"
import "./Card.css"

function Card(props) {
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../assets/${props.coverImg}`} alt="katie-zaferes" className="card--image"/>
            <div className="card--stats">
                <img src={ star } alt="star icon" className="card--star"/>
                <span>{props.stats.rating}</span>
                <span className="grey">({props.stats.reviewCount}) • </span>
                <span className="grey">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p><span className="bold card--price">From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card