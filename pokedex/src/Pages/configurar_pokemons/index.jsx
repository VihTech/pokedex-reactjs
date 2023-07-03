import Header from "../../Components/Header";
import './style.css'
import { NavLink } from 'react-router-dom'

export const ConfigurarPokemons = () => {
    return(
        <>
            <Header/>
            <main className="main-configurar-pokemons">
                <div className="main-informacoes-pokemons-triangulo"></div>
                <div className="main-informacoes-pokemons-logo"></div>
                <div className="main-informacoes-pokemons-bolinhas1 bolinhas"></div>
                <div className="main-informacoes-pokemons-bolinhas2 bolinhas"></div>
                <div className="main-configurar-pokemons-container">
                    <div className="main-configurar-pokemons-container-enfeite">
                        <div className="main-configurar-pokemons-container-enfeite-traco-maior"></div>
                        <div className="main-configurar-pokemons-container-enfeite-logo"></div>
                        <div className="main-configurar-pokemons-container-enfeite-traco1"></div>
                        <div className="main-configurar-pokemons-container-enfeite-traco2"></div>
                        <div className="main-configurar-pokemons-container-enfeite-titulo">
                            <h2>CADASTRAR</h2>
                        </div>
                    </div>

                    <div className="main-configurar-pokemons-container-cards">
                        <div className="main-configurar-pokemons-container-cards-texto">
                            <h3>SELECIONE O QUE VOÊ DESEJA CADASTRAR</h3>
                        </div>
                        <div className="main-configurar-pokemons-container-cards-card">
                        <div className="main-configurar-pokemons-container-cards-card-container">
                                <NavLink to='/Cadastrar_evolucoes' className="main-configurar-pokemons-container-cards-card-container-img">
                                    <p>EVOLUÇÕES</p>
                                </NavLink>
                                
                            </div>

                            <div className="main-configurar-pokemons-container-cards-card-container">
                                <NavLink to='/Cadastrar_pokemons' className="main-configurar-pokemons-container-cards-card-container-img">
                                    <p>POKEMON</p>
                                </NavLink>
                                
                            </div>

                            <div className="main-configurar-pokemons-container-cards-card-container">
                                <NavLink to='/Cadastrar_informacoes' className="main-configurar-pokemons-container-cards-card-container-img">
                                    <p>INFORMAÇÕES</p>
                                </NavLink>
                            
                            </div>

                        </div>
                    </div>

                </div>
            </main>
        </>
    )
}