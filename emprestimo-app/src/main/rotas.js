import React from 'react'



import { Route, BrowserRouter } from 'react-router-dom'
import Formulario from '../views/Formulario'
import landingPage from '../views/landingPage'




function Rotas(props){
    return (
        <BrowserRouter>
            <Route exact path="/" component={Formulario} />
            <Route exact path="/sucesso" component={landingPage} />
        </BrowserRouter>
    )
}

export default Rotas
