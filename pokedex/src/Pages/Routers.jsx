import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Inicio from './inicio'
import {Pokedex} from './pokedex'
import { LogarUsuario } from './cadastrar_usuario'
import { InformacoesPokemons } from './informacoes_pokemon'
import { CadastrarPokemons } from './cadastrar_pokemons'

const RotasExistente = props => (
    <main>
        <Routes>
            <Route  exact path="/" element={<Inicio/>}></Route>
            <Route  exact path="/Colaboradores" element={<Inicio/>}></Route>
            <Route  exact path="/Pokedex" element={<Pokedex/>}></Route>
            <Route  exact path="/Cadastrar_usuario" element={<LogarUsuario/>}></Route>
            <Route  exact path="/Informacoes_pokemon/:id" element={<InformacoesPokemons/>}></Route>
            <Route  exact path="/Cadastrar_pokemons" element={<CadastrarPokemons/>}></Route>
        </Routes>
    </main>
)

export default RotasExistente