import Header from "../../Components/Header";
import './style.css'
import { useParams } from "react-router-dom";


export const InformacoesPokemons = (props) => {
    const id = useParams()
    console.log(id)
    return(
        <>  
            <Header/>
            <main className="main-informacoes-pokemons">

                <div className="main-informacoes-pokemons-triangulo"></div>
                <div className="main-informacoes-pokemons-logo"></div>
                <div className="main-informacoes-pokemons-bolinhas1 bolinhas"></div>
                <div className="main-informacoes-pokemons-bolinhas2 bolinhas"></div>


                <div className="main-informacoes-pokemons-imagens">
                    
                    <div className="main-informacoes-pokemons-imagens-container">

                        <div className="main-informacoes-pokemons-imagens-container-imagem"></div>

                        <div className="main-informacoes-pokemons-imagens-container-numero"></div>

                    </div>

                </div>

                <div className="main-informacoes-pokemons-informacoes">

                    <div className="main-informacoes-pokemons-informacoes-container">

                        <div className="main-informacoes-pokemons-informacoes-container-vermelho">

                            <div className="main-informacoes-pokemons-informacoes-container-vermelho-container">

                                <div className="main-informacoes-pokemons-informacoes-container-vermelho-container-navbar">

                                    <ul>
                                        <il>Sobre</il>
                                        <il>Habilidades</il>
                                        <il>Fraquezas</il>
                                    </ul>

                                </div>

                            </div>

                        </div>

                        <div className="main-informacoes-pokemons-informacoes-container-escuro"></div>

                    </div>

                </div>

            </main>
        </>
    )
}