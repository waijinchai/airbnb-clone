import Navbar from './Navbar'
import Hero from "./Hero"
import Card from "./Card"
import data from "./data.js"
import './App.css'

function App() {
  const cards = data.map((obj) => (
    <Card
      key={obj.id} 
      {...obj}
    />
  ))

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
}

export default App
