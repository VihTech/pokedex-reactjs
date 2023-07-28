import Header from "../../Components/Header";
import './style.css'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../Services/API";
import Ambos from '../../Imagens/Ambos.png'
import Feminino from '../../Imagens/Feminino.png'
import Masculino from '../../Imagens/Masculino.png'
import Desconhecido from '../../Imagens/Desconhecido.png'
import {BsFillQuestionCircleFill} from 'react-icons/bs'

export const InformacoesPokemons = (props) => {
    const pokemon_info_id = useParams()
    const [carregando, setCarregando] = useState(false)
    const [pokemon, setPokemon] = useState('')
    const [modelInformacoes, setModelInformacoes] = useState(true)
    const [modelStatus, setModelStatus] = useState(false)
    const [modelCompetencias, setModelCompetencias] = useState(false)
    const [modelExplicacao, setModelExplicacao] = useState(false)
    const [informacoesAtivo, setInformacoesAtivo] = useState('ativo')
    const [statusAtivo, setHabillidadesAtivo] = useState('')
    const [competenciasAtivo, setCompetenciasAtivo] = useState('')
    const [generoAtual, setGenero] = useState('')
    const [explicacao, setExplicacao] = useState('')

    const abrirModelExplicacao = (descricao) => {
        if (modelExplicacao){
            setModelExplicacao(false)
            setExplicacao('')
        }else{
            setModelExplicacao(true)
            setExplicacao(descricao)
            console.log(descricao)
        }
    }

    const pegarTodasInformacoes = async () => {
        try {
            const res = await api.get('/mostrar/' + pokemon_info_id.id)
            setPokemon(res.data)
            setCarregando(true)
            console.log(res.data)

            if (res.data.genero == 'Feminino'){
                setGenero(Feminino)
            }
            if(res.data.genero == 'Masculino'){
                setGenero(Masculino)
            }
            if(res.data.genero == 'Ambos'){
                setGenero(Ambos)
            }
            if(res.data.genero == 'Desconhecido'){
                setGenero(Desconhecido)
            }

        } catch (erro) {
            console.log(erro)
        }
    }

    const abrindoModelInformacoes = () => {
        if(modelInformacoes){
            setModelInformacoes(false)
            setInformacoesAtivo('')
        }
        else{
            setModelInformacoes(true)
            setModelCompetencias(false)
            setModelStatus(false)
            setInformacoesAtivo('ativo')
            setHabillidadesAtivo('')
            setCompetenciasAtivo('')
        }
    }

    const abrindoModelStatus = () => {
        if(modelStatus){
            setModelStatus(false)
            setHabillidadesAtivo('')
        }
        else{
            setModelStatus(true)
            setModelCompetencias(false)
            setModelInformacoes(false)
            setInformacoesAtivo('')
            setHabillidadesAtivo('ativo')
            setCompetenciasAtivo('')
        }
    }

    const abrindoModelCompetencias = () => {
        if(modelCompetencias){
            setModelCompetencias(false)
            setCompetenciasAtivo('')
        }
        else{
            setModelCompetencias(true)
            setModelStatus(false)
            setModelInformacoes(false)
            setInformacoesAtivo('')
            setHabillidadesAtivo('')
            setCompetenciasAtivo('ativo')
        }
    }

    useEffect(() => {
        pegarTodasInformacoes()
    }, pegarTodasInformacoes)

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
                                <div className="main-informacoes-pokemons-informacoes-container-enfeite">
                                    <div className="main-informacoes-pokemons-informacoes-container-enfeite-traco-maior"></div>
                                    <div className="main-informacoes-pokemons-informacoes-container-enfeite-logo"></div>
                                    <div className="main-informacoes-pokemons-informacoes-container-enfeite-traco1"></div>
                                    <div className="main-informacoes-pokemons-informacoes-container-enfeite-traco2"></div>
                                    <div className="main-informacoes-pokemons-informacoes-container-enfeite-titulo">
                                        <h2>{pokemon.nome}</h2>
                                    </div>
                                </div>

                                <div className="main-informacoes-pokemons-informacoes-container-navbar">
                                    <ul>
                                        <li onClick={abrindoModelInformacoes} className={informacoesAtivo}>INFORMAÇÕES</li>
                                        <li onClick={abrindoModelStatus} className={statusAtivo}>STATUS</li>
                                        <li onClick={abrindoModelCompetencias} className={competenciasAtivo}>COMPETÊNCIAS</li>
                                    </ul>
                                </div>

                                {modelInformacoes&&(
                                    <div className="main-informacoes-pokemons-informacoes-container-informacoes">
                                        <div className="main-informacoes-pokemons-informacoes-container-informacoes-descricao">
                                            <h3>DESCRIÇÃO</h3>
                                            <p>{pokemon.descricao}</p>
                                        </div>

                                        <div className="main-informacoes-pokemons-informacoes-container-informacoes-categoria-tipagem">
                                            <div className="main-informacoes-pokemons-informacoes-container-informacoes-categoria-tipagem-categoria">
                                                <h3>CATEGORIA</h3>
                                                <p>{pokemon.categoria}</p>
                                            </div>

                                            <div className="main-informacoes-pokemons-informacoes-container-informacoes-categoria-tipagem-tipagem">
                                                <h3>TIPAGENS</h3>
                                                <ul>
                                                    {pokemon.tipos.split(',').map((tipo) => (
                                                        <li>{tipo}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="main-informacoes-pokemons-informacoes-container-informacoes-altura-peso-genero">
                                            <div className="main-informacoes-pokemons-informacoes-container-informacoes-altura-peso-genero-altura">
                                                <h3>ALTURA</h3>
                                                <p>{pokemon.altura}m</p>
                                            </div>
                                            <div className="main-informacoes-pokemons-informacoes-container-informacoes-altura-peso-genero-peso">
                                                <h3>PESO</h3>
                                                <p>{pokemon.peso}Kg</p>
                                            </div>
                                            <div className="main-informacoes-pokemons-informacoes-container-informacoes-altura-peso-genero-genero">
                                                <h3>GENERO</h3>
                                                <img src={generoAtual} alt="" />
                                            </div>
                                        </div>
                                        
                                    </div>
                                )}

                                {modelStatus&&(
                                    <div className="main-informacoes-pokemons-informacoes-container-status">
                                        <div className="main-informacoes-pokemons-informacoes-container-status-titulo">
                                            <h3>STATUS</h3>
                                            <div className="main-informacoes-pokemons-informacoes-container-status-titulo-linha1"></div>
                                            <div className="main-informacoes-pokemons-informacoes-container-status-titulo-linha2"></div>
                                        </div>

                                        <div className="main-informacoes-pokemons-informacoes-container-status-container">
                                            <div className="main-informacoes-pokemons-informacoes-container-status-container-grafico">

                                                <div className="main-informacoes-pokemons-informacoes-container-status-container-grafico-container">
                                                    <div className="main-informacoes-pokemons-informacoes-container-status-container-grafico-coluna hp" style={{height: `${pokemon.hp}%`}}>
                                                        <p>{pokemon.hp}</p>
                                                    </div>
                                                    <div className="main-informacoes-pokemons-informacoes-container-status-container-grafico-coluna  ataque" style={{height: `${pokemon.ataque}%`}}>
                                                        <p>{pokemon.ataque}</p>
                                                    </div>
                                                    <div className="main-informacoes-pokemons-informacoes-container-status-container-grafico-coluna  defesa" style={{height: `${pokemon.defesa}%`}}>
                                                        <p>{pokemon.defesa}</p>
                                                    </div>
                                                    <div className="main-informacoes-pokemons-informacoes-container-status-container-grafico-coluna  especial-ataque" style={{height: `${pokemon.especial_ataque}%`}}>
                                                        <p>{pokemon.especial_ataque}</p>
                                                    </div>
                                                    <div className="main-informacoes-pokemons-informacoes-container-status-container-grafico-coluna  especial-defesa" style={{height: `${pokemon.especial_defesa}%`}}>
                                                        <p>{pokemon.especial_defesa}</p></div> 
                                                    <div className="main-informacoes-pokemons-informacoes-container-status-container-grafico-coluna  velocidade" style={{height: `${pokemon.velocidade}%`}}>
                                                        <p>{pokemon.velocidade}</p>
                                                    </div>
                                                    <div className="main-informacoes-pokemons-informacoes-container-status-container-grafico-coluna  total" style={{height: `${pokemon.total}%`}}>
                                                        <p>{pokemon.total}</p>
                                                    </div>
                                                </div>
                                                <ul>
                                                    <li>HP</li>
                                                    <li>ATK</li>
                                                    <li>DF</li>
                                                    <li>SATK</li>
                                                    <li>SDF</li>
                                                    <li>SP</li>
                                                    <li>TOTAL</li>
                                                </ul>
                                            </div>
                                        </div>
                                        
                                    </div>
                                )}

                                {modelCompetencias&&(
                                    <div className="main-informacoes-pokemons-informacoes-container-competencias">
                                        <div className="main-informacoes-pokemons-informacoes-container-competencias-habilidades">
                                            <h3>HABILIDADES</h3>
                                            <div className="main-informacoes-pokemons-informacoes-container-competencias-habilidades-container">
                                                <ul>
                                                    {pokemon.habilidades.split(',').map((habilidade, index) => (
                                                        <li>{habilidade} <div className="descricao"><BsFillQuestionCircleFill onClick={() =>  abrirModelExplicacao(index)}/></div></li>
                                                    ))}
                                                 
                                                </ul>
                                            </div>
                                        </div>

                                        {modelExplicacao&&(
                                            <div className="main-informacoes-pokemons-informacoes-container-competencias-habilidades-descricao">
                                                <div className="main-informacoes-pokemons-informacoes-container-competencias-habilidades-descricao-container">
                                                    <div className="main-informacoes-pokemons-informacoes-container-competencias-habilidades-descricao-container-enfeite">
                                                        <div className="main-informacoes-pokemons-informacoes-container-competencias-habilidades-descricao-container-enfeite-traco-maior">
                                                            <p onClick={abrirModelExplicacao}>X</p>
                                                        </div>                                               
                                                        <div className="main-informacoes-pokemons-informacoes-container-competencias-habilidades-descricao-container-enfeite-logo"></div>
                                                        <div className="main-informacoes-pokemons-informacoes-container-competencias-habilidades-descricao-container-enfeite-traco1"></div>
                                                        <div className="main-informacoes-pokemons-informacoes-container-competencias-habilidades-descricao-container-enfeite-traco2"></div>

                                                        <div className="main-informacoes-pokemons-informacoes-container-competencias-habilidades-descricao-container-enfeite-titulo">
                                                            <h2>EXPLICAÇÃO</h2>
                                                        </div> 
                                                    </div>

                                                    <div className="main-informacoes-pokemons-informacoes-container-competencias-habilidades-descricao-container-descricao">

                                                        {pokemon.descricoes_habilidade.split(',').map((descricao, index) => (
                                                                <>
                                                                    {index === explicacao&&(
                                                                        <p>{descricao}</p>
                                                                    )}
                                                                </>
                                                            ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        <div className="main-informacoes-pokemons-informacoes-container-competencias-fraquezas"></div>
                                    </div>
                                )}

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
