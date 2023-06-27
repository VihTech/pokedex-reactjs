import './style.css'
import {BsPersonCircle} from 'react-icons/bs'
import { TbSearch } from 'react-icons/tb'
import {GiHamburgerMenu} from 'react-icons/gi'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {

    const [menu, setMenu] = useState(false)
    const [aberto, setAberto] = useState('container-menu-hamburguer-lista ativo')

    const abrirMenu = () => {
        if(menu){
            setMenu(false)
            setAberto('container-menu-hamburguer-lista ativo')
        }else{
            setMenu(true)
            setAberto('container-menu-hamburguer-lista')
        }
    }

    return(
        <header className='container'>
            <div className={aberto}>
                <NavLink to="/">Inicio</NavLink>
                <NavLink to="/Pokedex">Pokedex</NavLink>
                <NavLink to="/Cadastrar_pokemons">Cadastrar</NavLink>
                <NavLink to="/Colaboradores">Colaboradores</NavLink>
                <div className='container-logar-hamburguer'>
                    <NavLink to="/Cadastrar_usuario"><BsPersonCircle className='icon-logar-hamburguer'/></NavLink>
                </div>

            </div>
            <div className="container-logo">
                <div className="container-logo-img"></div>
            </div>
            <div className="container-lista">
                <NavLink to="/">Inicio</NavLink>
                <NavLink to="/Pokedex">Pokedex</NavLink>
                <NavLink to="/Cadastrar_pokemons">Cadastrar</NavLink>
                <NavLink to="/Colaboradores">Colaboradores</NavLink>
            </div>

            <div className="container-menu-hamburguer">
                <GiHamburgerMenu onClick={abrirMenu}/>
                
                {/* {menu &&(
                    
                )} */}

            </div>
            <div className="container-pesquisa-logar">

                <div className="container-pesquisa-logar-divisao">
                    <NavLink to='/Pokedex' className="container-pesquisar"><TbSearch/></NavLink>
                    <div className='container-logar'>
                        <NavLink to="/Cadastrar_usuario"><BsPersonCircle className='icon-logar'/></NavLink>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header