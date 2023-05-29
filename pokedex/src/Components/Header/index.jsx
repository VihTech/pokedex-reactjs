import './style.css'
import {BsPersonCircle} from 'react-icons/bs'
import { TbSearch } from 'react-icons/tb'
import { NavLink } from 'react-router-dom'


const Header = () => {
    return(
        <header className='container'>
            <div className="container-logo">
                <div className="container-logo-img"></div>
            </div>
            <div className="container-lista">
                <NavLink to="/">Inicio</NavLink>
                <NavLink to="/Pokedex">Pokedex</NavLink>
                <NavLink to="#">Colaboradores</NavLink>
            </div>
            <div className="container-pesquisa-logar">

                <div className="container-pesquisa-logar-divisao">
                    <div className="container-pesquisar"><TbSearch/></div>
                    <div className='container-logar'>
                        <NavLink to="#"><BsPersonCircle className='icon-logar'/></NavLink>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header