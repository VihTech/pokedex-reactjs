import { useEffect, useRef, useState } from "react"
import Header from "../../Components/Header"
import "./style.css"
import {FiSearch} from 'react-icons/fi'
import { api } from "../../Services/API"
import { EvolicaoContainer } from "../../Components/Evolucao"

export const CadastrarEvolucoes = () => {
    const [modelPesquisa, setModelPesquisa] = useState(false)
    const [modelPesquisaFilho, setModelPesquisaFilho] = useState(false)
    const [divPosition, setDivPosition] = useState({ top: 0, left: 0 })
    const [pokemon, setPokemon] = useState('')
    const [nome, setNome] = useState('')
    const [pegarPokemonPeloId, setPegarPokemonPeloId] = useState('')
    const [pegarPokemonPeloIdFilho, setPegarPokemonPeloIdFilho] = useState('')
    const [carregando, setCarregando] = useState(false)

    const cadastrarGrade = async () => {

        const data = {
            numeroPokemon: pegarPokemonPeloId.pokemon_info_id,
            numeroPokemonEvolucao: pegarPokemonPeloIdFilho.pokemon_info_id
        }

        try {
            
            const res = await api.get('/cadastrar_grade', data)
            console.log(data)

        } catch (error) {
            console.log(error)
        }
    }

    const pegarPokemons = async () => {
        try {
            const res = await api.get('mostrar/pokemon')
            setPokemon(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const pegarIdPokemon = async (index) => {
        try {
            const res = await api.get('/mostrar/' + index)
            setPegarPokemonPeloId(res.data)
            console.log(pegarPokemonPeloId)
            setModelPesquisa(false)
            
        } catch (error) {
            console.log(error)
        }
    }

    const pegarIdPokemonFilho = async (index) => {
        try {
            const res = await api.get('/mostrar/' + index)
            setPegarPokemonPeloIdFilho(res.data)
            setModelPesquisaFilho(false)
            
        } catch (error) {
            console.log(error)
        }
    }

    const abrirModelPesquisaFilho = (event) => {
        setModelPesquisaFilho(true)
        setModelPesquisa(false)
        const posX = event.clientX;
        const posY = event.clientY;

        setDivPosition({ top: posY, left: posX });
        console.log(divPosition)
    }

    const abrirModelPesquisar = (event) => {
        setModelPesquisa(true)
        setModelPesquisaFilho(false)
        const posX = event.clientX;
        const posY = event.clientY;

        setDivPosition({ top: posY, left: posX });
        console.log(divPosition)
    };

    const fecharModelPesquisar = () => {
        setModelPesquisa(false)
    }

    const fecharModelPesquisarFilho = () => {
        setModelPesquisaFilho(false)
    }


    const pesquisarPeloNome = async () => {
        try {
          const res = await api.post('/mostrar/nome', {nome});
      
          if (res.data.mensagem === 'Pokemon(s) não encontrado(s)') {
            console.log('Nenhum Pokémon encontrado');
          } else {
            console.log('Pokémon encontrado:', res.data);
            setPokemon(res.data)
            setCarregando(true)
          }
        } catch (erro) {
          console.log(erro);
        }
      };

    useEffect(() => {
        pegarPokemons()
    }, [])

    useEffect(() => {
        document.addEventListener('keydown', detectKeyDown, true)
   
    }, [nome])
    const detectKeyDown = (e) => {
        if (e.key === 'Enter'){
            pesquisarPeloNome()
        }
    }

    useEffect(() => {
        pesquisarPeloNome()
    },[nome])

    return(
        <>
            <Header/>
            <main className="main-cadastrar-evolucoes">

                {modelPesquisa&&(

                    <div className="main-cadastrar-evolucoes-pesquisa"
                    style={{
                    top: (divPosition.top - 110),
                    left: (divPosition.left +  20)}}>

                        <div className="main-cadastrar-evolucoes-pesquisa-traco">
                            <p onClick={fecharModelPesquisar}>X</p>
                        </div>

                        <div className="main-cadastrar-evolucoes-pesquisa-barra">
                            <p>Procurar Pokémon</p>
                            <div className="main-cadastrar-evolucoes-pesquisa-barra-input">
                                <input type="text" onChange={(e) => setNome(e.target.value)}/>
                                <FiSearch/>
                            </div>
                        </div>

                        <div className="main-cadastrar-evolucoes-pesquisa-linha"></div>

                        <div className="main-cadastrar-evolucoes-pesquisa-lista">
                            <ul>

                                {carregando&&(
                                    <>
                                    {pokemon.map((item, index) => (
                                        <li onClick={() => pegarIdPokemon(item.pokemon_info_id)}>{item.nome} <span>#{item.numero_pokemon}</span></li>
                                    ))}
                                    </>

                                )}

                            </ul>
                        </div>

                    </div>
                )}

                {modelPesquisaFilho&&(

                    <div className="main-cadastrar-evolucoes-pesquisa"
                    style={{
                    top: (divPosition.top - 110),
                    left: (divPosition.left +  20)}}>

                        <div className="main-cadastrar-evolucoes-pesquisa-traco">
                            <p onClick={fecharModelPesquisarFilho}>X</p>
                        </div>

                        <div className="main-cadastrar-evolucoes-pesquisa-barra">
                            <p>Procurar Pokémon</p>
                            <div className="main-cadastrar-evolucoes-pesquisa-barra-input">
                                <input type="text" onChange={(e) => setNome(e.target.value)}/>
                                <FiSearch/>
                            </div>
                        </div>

                        <div className="main-cadastrar-evolucoes-pesquisa-linha"></div>

                        <div className="main-cadastrar-evolucoes-pesquisa-lista">
                            <ul>
                                {pokemon.map((item, index) => (
                                    <li onClick={() => pegarIdPokemonFilho(item.pokemon_info_id)}>{item.nome} <span>#{item.numero_pokemon}</span></li>
                                ))}
                            </ul>
                        </div>

                    </div>
                )}
                <div className="main-cadastrar-evolucoes-logo"></div>
                <div className="main-cadastrar-evolucoes-bolinhas1 bolinhas"></div>
                <div className="main-cadastrar-evolucoes-bolinhas2 bolinhas"></div>

                <div className="main-cadastrar-evolucoes-container">
                    <div className="main-cadastrar-evolucoes-container-enfeite">
                        <div className="main-cadastrar-evolucoes-container-enfeite-traco-maior"></div>
                        <div className="main-cadastrar-evolucoes-container-enfeite-logo"></div>
                        <div className="main-cadastrar-evolucoes-container-enfeite-traco1"></div>
                        <div className="main-cadastrar-evolucoes-container-enfeite-traco2"></div>
                        <div className="main-cadastrar-evolucoes-container-enfeite-titulo">
                            <h2>CADASTRAR EVOLUÇÕES</h2>
                        </div>
                    </div>

                    <div className="main-cadastrar-evolucoes-container-evolucoes">
                        <EvolicaoContainer onClick={abrirModelPesquisar} imagem={pegarPokemonPeloId.imagem}/>

                        <div className="tracos">
                            <ul>
                                <il className="impar"></il>
                                <il></il>
                                <il className="impar"></il>
                                <il></il>
                                <il className="impar"></il>
                                <il></il>
                                <il className="impar"></il>
                                <il></il>
                                <il className="impar"></il>
                                <il></il>
                                <il className="impar"></il>
                                <il></il>
                            </ul>
                        </div>

                        <EvolicaoContainer onClick={abrirModelPesquisaFilho} imagem={pegarPokemonPeloIdFilho.imagem}/>
                    </div>

                    <div className="main-cadastrar-evolucoes-container-msg">
                        
                    </div>

                    <div className="main-cadastrar-evolucoes-container-btn">
                        <button onClick={cadastrarGrade}>CADASTRAR</button>
                    </div>

                </div>
            </main>
        
        </>
    )
}