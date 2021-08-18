import React from "react"
import { AreaAdministrativa } from "../pages/AreaAdministrativa";
import { HomePage } from "../pages/HomePage";
import { ListaDeViagens } from "../pages/ListaDeViagens";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CriarNovaViagem } from "../pages/CriarNovaViagem";
import {FormularioInscricao} from "../pages/FormularioInscricao";
import { DetalhesViagem } from "../pages/DetalhesViagem";
import { Login } from "../pages/Login";

export const Router = () => {
    return(
<BrowserRouter>
<Switch>

  <Route exact path={"/"}>      
    <HomePage />
  </Route>

  <Route exact path={"/admin/trips/list"}>
    <AreaAdministrativa />
  </Route>

  <Route exact path={"/trips/application"}>
    <FormularioInscricao />
  </Route>

<Route exact path={"/trips/list"}>
    <ListaDeViagens />
  </Route>

  <Route exact path={"/admin/trips/:id"}>
    <DetalhesViagem />
  </Route>

  <Route exact path={"/admin/trips/create"}>
    <CriarNovaViagem />
  </Route>

  <Route exact path={"/login"}>
    <Login />
  </Route>

</Switch>
</BrowserRouter>
    )
}
