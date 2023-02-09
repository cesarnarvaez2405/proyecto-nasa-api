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

export const Home = () => {

  return (
    <>

      <Router>

        <header>
          <Link to="/" className='tituloApi'><h1>Api nasa</h1></Link>
          <p className= 'DescripcionApi'>Contenido que se actualiza cada dia con una nueva noticia por parte de la <a className='Nasa'>NASA</a></p>
        </header>

        <div>

          <Switch>
            <Route path="/23">
            </Route>
            <Route path="/">
              <ApiApod />
            </Route>
          </Switch>

        </div>

      </Router>



    </>
  )
}
