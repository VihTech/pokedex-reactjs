import './style.css'
import {BsPersonCircle} from 'react-icons/bs'
import { TbSearch } from 'react-icons/tb'
import {GiHamburgerMenu} from 'react-icons/gi'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { pegarNomeUsuario } from '../../Services/localstorage';

const Header = () => {

    const [menu, setMenu] = useState(false)
    const [aberto, setAberto] = useState('container-menu-hamburguer-lista ativoMenu')

    const [usuario, setUsuario] = useState('');

    useEffect(() => {
        const nomeUsuario = pegarNomeUsuario();
        setUsuario(nomeUsuario);
      }, [usuario]);

    const abrirMenu = () => {
        if(menu){
            setMenu(false)
            setAberto('container-menu-hamburguer-lista ativoMenu')
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
                <NavLink to="/Configurar_pokemons">Configurar</NavLink>
                <NavLink to="/Colaboradores">Colaboradores</NavLink>
                <div className='container-logar-hamburguer'>
                    <NavLink to="/Cadastrar_usuario"><BsPersonCircle className='icon-logar-hamburguer'/></NavLink>
                </div>

            </div>
            <div className="container-logo">
                <div className="container-logo-img"></div>
            </div>
            <div className="container-lista">
                {usuario !== null?(
                    <>
                        <NavLink to="/">Inicio</NavLink>
                        <NavLink to="/Pokedex">Pokedex</NavLink>
                        <NavLink to="/Configurar_pokemons">Cadastrar</NavLink>
                        <NavLink to="/Colaboradores">Colaboradores</NavLink>
                    </>

                ):(
                    <>
                        <NavLink to="/">Inicio</NavLink>
                        <NavLink to="/Pokedex">Pokedex</NavLink>
                        <NavLink to="/Colaboradores">Colaboradores</NavLink>
                    </>
                )}
            </div>

            <div className="container-menu-hamburguer">
                <GiHamburgerMenu onClick={abrirMenu}/>

            </div>
            <div className="container-pesquisa-logar">

                <div className="container-pesquisa-logar-divisao">
                    {usuario !== null?(
                        <>
                        <NavLink to='/Pokedex' className="container-pesquisar"><TbSearch/></NavLink>
                        <div className='container-logar'>
                            <NavLink to="/Cadastrar_usuario"><BsPersonCircle className='icon-logar'/></NavLink>
                        </div>
                        </>

                    ):(
                        <>
                        <NavLink to='/Pokedex' className="container-pesquisar"><TbSearch/></NavLink>
                        <div className='container-logar'>
                            <NavLink to="/Logar_usuario"><BsPersonCircle className='icon-logar'/></NavLink>
                        </div>
                        </>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header