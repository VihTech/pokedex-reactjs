import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Inicio from './inicio'
import {Pokedex} from './pokedex'
import { LogarUsuario } from './cadastrar_usuario'

const RotasExistente = props => (
    <main>
        <Routes>
            <Route  exact path="/" element={<Inicio/>}></Route>
            <Route  exact path="/Pokedex" element={<Pokedex/>}></Route>
            <Route  exact path="/Cadastrar_usuario" element={<LogarUsuario/>}></Route>
        </Routes>
    </main>
)

export default RotasExistente