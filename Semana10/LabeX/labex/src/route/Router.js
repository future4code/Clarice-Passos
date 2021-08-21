import React from "react"
import { AreaAdministrativa } from "../pages/AdminHomePage";
import { HomePage } from "../pages/HomePage";
import { ListaDeViagens } from "../pages/ListTripsPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CriarNovaViagem } from "../pages/CreateTripPage";
import {FormularioInscricao} from "../pages/ApplicationFormPage";
import { DetalhesViagem } from "../pages/TripDetailsPage";
import { Login } from "../pages/LoginPage";

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

  <Route exact path={"/admin/trips/create"}>
    <CriarNovaViagem />
  </Route>

  <Route exact path={"/admin/trips/:id"}>
    <DetalhesViagem />
  </Route>

  <Route exact path={"/login"}>
    <Login />
  </Route>
  
  <Route>
    <div>Página não encontrada</div>
  </Route>

</Switch>
</BrowserRouter>
    )
}
