import { useState } from "react";
import "./styles.css";
import { data } from "./data/data";
import CardName from "./components/CardName/index.jsx"
import CardPeople from "./components/CardPeople";

export default function App() {
  const [people, setPeople] = useState([]);
 
  const renderiza = () => {
    setPeople(data);
  };

  const lista = people.map((item) => {
    return(
      <CardName name= {item.name} />
    )
  });

  const [people2, setPeople2] = useState([]);
 
  const renderiza2 = () => {
    setPeople2(data);
  };

  const lista2 = people2.map((i) => {
    return(
      <div>
      <CardPeople name= {i.name}    height = {i.height}  mass = {i.mass} hair_color = {i.hair_color} eye_color = {i.eye_color} birth_year = {i.birth_year} gender = {i.gender}/>
    

      </div>
    )
  });

  return (
    <div className="App">
      <h1>Renderização de lista</h1>
      <button onClick={renderiza}>Renderiza lista</button>
      <div className="List">
        <ul>
          {lista}
        </ul>
        </div>

      <h1>Renderização de lista infos completas</h1>
      <button onClick={renderiza2}>Renderiza lista</button>
      <div  className="List" >
          {lista2}
          </div>
      </div>
  );
}
