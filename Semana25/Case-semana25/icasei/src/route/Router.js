import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import  DetailPage  from "../pages/DetailPage";
import { SearchPage } from "../pages/SearchPage";

export const Router = () => {
    return(
<BrowserRouter>
<Switch>

  <Route exact path={"/"}>      
    <SearchPage />
  </Route>

  <Route exact path={"/video/:id"}>
    <DetailPage />
  </Route>
  
  <Route>
    <div>Página não encontrada</div>
  </Route>

</Switch>
</BrowserRouter>
    )
}
