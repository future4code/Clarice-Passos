import React from "react"
import { Switch, Route } from "react-router-dom"
import Erro from "../pages/Erro"
import FeedPage from "../pages/FeedPage"
import Login from "../pages/LoginPage"
import PostPage from "../pages/PostPage"
import SignUp from "../pages/SignUpPage"

const Router = ({setRightButtonText}) =>{
    return(
     
        <Switch>

            <Route exact path="/feed">
                <FeedPage/>
            </Route>

            <Route exact path="/login">
                <Login setRightButtonText={setRightButtonText}/>
            </Route>

            <Route exact path="/">
                <PostPage/>
            </Route>

            <Route exact path="/signup">
                <SignUp setRightButtonText={setRightButtonText}/>
            </Route>

            <Route>
                <Erro/>
           </Route>

        </Switch>

    )
}

export default Router