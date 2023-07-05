import photoGrid from "../public/assets/photo-grid.png"
import "./Hero.css"

function Hero() {
    return (
        <section className="hero">
            <img src= { photoGrid } alt="photo grid" className="hero--photo-grid"/>
            <h1 className="hero--title">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Hero