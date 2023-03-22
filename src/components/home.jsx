import React, { useEffect, useState } from 'react'
import { get } from '../utilities/clientHttp'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ApiApod } from './apiApod';
import '../styles/style.css'
import { ListadosApod } from './listadosApod';
import { IpodDetalles } from './ipodDetalles';

export const Home = () => {

  return (
    <>

      <Router>

        <header>
          <Link to="/" className='tituloApi'><h1>Api nasa</h1></Link>
        </header>

        <div>

          <Switch>
            <Route path="/apod/date/:ipodDate">
              <IpodDetalles/>
            </Route>
            <Route path="/">
              <ListadosApod />
            </Route>
          </Switch>

        </div>

      </Router>



    </>
  )
}
