import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from '../pages/Home'
import GlobalStyle from '../styles/GlobalStyle'

const Rotas = () => {
  return (
    <div>
    <GlobalStyle/>
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
        </Routes>    
    </BrowserRouter>
    </div>
  )
}

export default Rotas;