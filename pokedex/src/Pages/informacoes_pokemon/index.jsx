import Header from "../../Components/Header";
import './style.css'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../Services/API";


export const InformacoesPokemons = (props) => {
    const pokemon_info_id = useParams()
    const [carregando, setCarregando] = useState(false)
    const [pokemon, setPokemon] = useState('')
    const [modelSobre, setModelSobre] = useState(true)
    const [modelHabilidades, setModelHabilidades] = useState(false)
    const [modelFraquezas, setModelFraquezas] = useState(false)
    const [sobreAtivo, setSobreAtivo] = useState('ativo')
    const [habilidadesAtivo, setHabillidadesAtivo] = useState('')
    const [fraquezasAtivo, setFraquezasAtivo] = useState('')

    const pegarTodasInformacoes = async () => {
        try {
            const res = await api.get('/mostrar/' + pokemon_info_id.id)
            setPokemon(res.data)
            setCarregando(true)
            console.log(pokemon)

        } catch (erro) {
            console.log(erro)
        }
    }

    const abrindoModelSobre = () => {
        if(modelSobre){
            setModelSobre(false)
            setSobreAtivo('')
        }
        else{
            setModelSobre(true)
            setModelFraquezas(false)
            setModelHabilidades(false)
            setSobreAtivo('ativo')
            setHabillidadesAtivo('')
            setFraquezasAtivo('')
        }
    }

    const abrindoModelHabilidades = () => {
        if(modelHabilidades){
            setModelHabilidades(false)
            setHabillidadesAtivo('')
        }
        else{
            setModelHabilidades(true)
            setModelFraquezas(false)
            setModelSobre(false)
            setSobreAtivo('')
            setHabillidadesAtivo('ativo')
            setFraquezasAtivo('')
        }
    }

    const abrindoModelFraquezas = () => {
        if(modelFraquezas){
            setModelFraquezas(false)
            setFraquezasAtivo('')
        }
        else{
            setModelFraquezas(true)
            setModelHabilidades(false)
            setModelSobre(false)
            setSobreAtivo('')
            setHabillidadesAtivo('')
            setFraquezasAtivo('ativo')
        }
    }

    useEffect(() => {
        pegarTodasInformacoes()
    }, [])

    return(
        <>  
            <Header/>
            <main className="main-informacoes-pokemons">

                <div className="main-informacoes-pokemons-triangulo"></div>
                <div className="main-informacoes-pokemons-logo"></div>
                <div className="main-informacoes-pokemons-bolinhas1 bolinhas"></div>
                <div className="main-informacoes-pokemons-bolinhas2 bolinhas"></div>

                {carregando?(
                    <>
                        <div className="main-informacoes-pokemons-imagens">
                            
                            <div className="main-informacoes-pokemons-imagens-container">

                                <img src={pokemon.imagem} alt="" />

                                <h3>#{pokemon.numero_pokemon}</h3>

                            </div>

                        </div>

                        <div className="main-informacoes-pokemons-informacoes">

                            <div className="main-informacoes-pokemons-informacoes-container">

                                <div className="main-informacoes-pokemons-informacoes-container-vermelho">

                                    <div className="main-informacoes-pokemons-informacoes-container-vermelho-container">

                                        <div className="main-informacoes-pokemons-informacoes-container-vermelho-container-navbar">

                                            <ul>
                                                <il className={sobreAtivo} onClick={abrindoModelSobre}>Sobre</il>
                                                <il className={habilidadesAtivo} onClick={abrindoModelHabilidades}>Habilidades</il>
                                                <il className={fraquezasAtivo} onClick={abrindoModelFraquezas}>Fraquezas</il>
                                            </ul>

                                        </div>

                                            <div className="main-informacoes-pokemons-informacoes-container-vermelho-container-informacoes">
                                                
                                                {modelSobre&&(
                                                    <>
                                                    
                                                        <div className="main-informacoes-pokemons-informacoes-container-vermelho-container-informacoes-sobre">
                                                            <h3>{pokemon.nome}</h3>
                                                            <p>{pokemon.descricao}</p>
                                                        </div>

                                                    </>
                                                )}

                                            </div>
                                    </div>



                                </div>

                                <div className="main-informacoes-pokemons-informacoes-container-escuro"></div>

                            </div>

                        </div>
                    </>
                ): (
                    <h1>Carregando...</h1>
                )}


            </main>
        </>
    )
}