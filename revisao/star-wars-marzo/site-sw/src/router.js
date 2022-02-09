import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CharacterDetailPage from "./pages/CharacterDetailPage/CharacterDetailPage";
import CharacterListPage from "./pages/CharacterListPage/CharacterListPage";

export const Router = () => {
    return(
<BrowserRouter>
<Switch>

  <Route exact path={"/list/:id"}>
    <CharacterDetailPage />
  </Route>

  <Route exact path={"/list"}>      
    <CharacterListPage />
  </Route>


  <Route>
    <div>Página não encontrada</div>
  </Route>

</Switch>
</BrowserRouter>
    )
}