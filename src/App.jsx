import { useEffect, useState } from 'react'
import "./index.css"
import { Card } from './Card'
import URL from './Base'
import photo from './images/item-1.jpeg'
import photo2 from './images/item-2.jpeg'
import photo3 from './images/item-3.jpeg'
import photo4 from './images/item-4.jpeg'
import photo5 from './images/item-5.jpeg'
import photo6 from './images/item-6.jpeg'
import photo7 from './images/item-7.jpeg'
import photo8 from './images/item-8.jpeg'
import photo9 from './images/item-9.jpeg'


function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("items")) || [])
  const foto = ["", photo, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9]





  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("items"));
    if (storedTodos) {
      setItems(storedTodos);
    } else getData()
  }, [])




  const getData = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    setItems(data.menu);

  }

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const click = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    setItems(
      data.menu.filter((item) => item.category == "breakfast")
    )
  }
  const lunch = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    setItems(
      data.menu.filter((item) => item.category == "lunch")
    )
  }
  const shakes = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    setItems(
      data.menu.filter((item) => item.category == "shakes")
    )
  }
  return (
    <section className="menu section">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <div className="btn-container">
        <button onClick={getData} id="all-btn" type="button" className="filter-btn">
          all
        </button>
        <button onClick={click} id="breakfast-btn" type="button" className="filter-btn">
          breakfast
        </button>
        <button onClick={lunch} id="lunch-btn" type="button" className="filter-btn">
          lunch
        </button>
        <button onClick={shakes} id="shakes-btn" type="button" className="filter-btn">
          shakes
        </button>
      </div>
      <div className="section-center">
        {items.map(item => <Card key={item.id} {...item} img={foto[item.id]} />)}
      </div>
    </section>
  )
}

export default App


