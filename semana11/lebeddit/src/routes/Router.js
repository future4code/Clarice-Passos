import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Header from "../components/Header"
import Erro from "../pages/Erro"
import FeedPage from "../pages/FeedPage"
import Login from "../pages/LoginPage"
import PostPage from "../pages/PostPage"
import SignUp from "../pages/SignUpPage"

const Router = () =>{
    return(
        <BrowserRouter>
        <Header/>
        <Switch>

            <Route exact path="/feed">
                <FeedPage/>
            </Route>

            <Route exact path="/login">
                <Login/>
            </Route>

            <Route exact path="/">
                <PostPage/>
            </Route>

            <Route exact path="/signup">
                <SignUp/>
            </Route>

            <Route>
                <Erro/>
           </Route>

        </Switch>
        </BrowserRouter>
    )
}

export default Router