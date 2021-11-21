import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { DiaDeSorte } from '../pages/DiaDeSorte'
import { Lotofacil } from '../pages/Lotofacil'
import { LotoMania } from '../pages/LotoMania'
import { MegaSena } from '../pages/MegaSena'
import { Quina } from '../pages/Quina'
import { TimeMania } from '../pages/TimeMania'



export const Router = () => {

    return (
        <div>
            <BrowserRouter>
                <Switch>
                   
                    <Route exact path='/megasena'>
                        <MegaSena />
                    </Route>

                    <Route exact path='/lotofacil'>
                        <Lotofacil />
                    </Route>

                    <Route exact path='/lotomania'>
                        <LotoMania />
                    </Route>

                    <Route exact path='/quina'>
                        <Quina />
                    </Route>

                    <Route exact path='/diadesorte'>
                        <DiaDeSorte />
                    </Route>

                    <Route exact path='/timemania'>
                        <TimeMania />
                    </Route>

                </Switch>
            </BrowserRouter>
        </div>
    )
}