import React from "react";
import "./styles.css";
import { CardVideo } from "./components/cardVideo";
import { ItemVideo } from "./components/itemMenu";

export default function App() {

  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
    <nav className="menu-vertical">
        <ul>             
              <ItemVideo text={'Inicio'}/>  
              <ItemVideo text={'Em alta'} />
              <ItemVideo text={'Inscrições'} />
              <hr />
              <ItemVideo text={'Originais'} />
              <ItemVideo text={'Histórico'} /> 
            </ul>
          </nav> 

          <section className="painel-de-videos">
            <CardVideo img src={'https://picsum.photos/400/400?a=1'} alt={"video"} />
            <CardVideo img src={"https://picsum.photos/400/400?a=2"} alt={"video"} />
            <CardVideo img src={"https://picsum.photos/400/400?a=3"} alt={"video"} />
            <CardVideo img src={"https://picsum.photos/400/400?a=4"} alt={"video"} />
            <CardVideo img src={"https://picsum.photos/400/400?a=5"} alt={"video"} />
            <CardVideo img src={"https://picsum.photos/400/400?a=6"} alt={"video"} />
            <CardVideo img src={"https://picsum.photos/400/400?a=7"} alt={"video"} />
            <CardVideo img src={"https://picsum.photos/400/400?a=8"} alt={"video"} />
          </section>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
