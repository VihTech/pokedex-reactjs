import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Inicio from './inicio'
import {Pokedex} from './pokedex'

const RotasExistente = props => (
    <main>
        <Routes>
            <Route  exact path="/" element={<Inicio/>}></Route>
            <Route  exact path="/Pokedex" element={<Pokedex/>}></Route>
        </Routes>
    </main>
)

export default RotasExistente