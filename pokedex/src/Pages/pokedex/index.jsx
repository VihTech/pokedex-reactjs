import './style.css'
import Header from '../../Components/Header'
import { api } from '../../Services/API'
import { useState, useEffect } from 'react'
import {FiSearch} from 'react-icons/fi'
import { TbPolaroid } from 'react-icons/tb'

export const Pokedex = (props) => {

    const [carregando, setCarregando] = useState(false)
    const [pokemon, setPokemon] = useState('')
    const [nome, setNome] = useState('')
    const [mensagem, setMensagem] = useState(false)
    
    const verPokemonPeloId = (pokemon_id) => {
        window.location.href ='/Informacoes_pokemon/' + pokemon_id
 
    }

    const pegarPokemons = async () => {

        try {
            const res = await api.get('/mostrar/pokemon')
            console.log(res.data)
            setPokemon(res.data)
            setCarregando(true)
            
        } catch (erro) {
            console.log(erro)
            
        }
        
    }

    const pesquisarPeloNome = async () => {
        try {
          const res = await api.post('/mostrar/nome', {nome});
      
          if (res.data.mensagem === 'Pokemon(s) não encontrado(s)') {
            console.log('Nenhum Pokémon encontrado');
            setMensagem(true)
          } else {
            console.log('Pokémon encontrado:', res.data);
            setPokemon(res.data)
            setMensagem(false)
          }
        } catch (erro) {
          console.log(erro);
        }
      };
      

    const ordemAleatoria = async () => {
        try {
            const res = await api.get('/mostrar_aleatorio')
            setPokemon(res.data)
        } catch (error) {
            console.log(error)
        }
    }
      

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
    },[nome, mensagem])

    return(
        <div>
            <Header/>
            <main className="main-pokedex">
                <div className="main-pokedex-container">

                <div className="main-pokedex-titulo">
                    <h1>POKEMON</h1>
                </div>

                <div className="main-pokedex-pesquisa">
                    <div className="main-pokedex-pesquisa-container">
                        <p>Procurar Pokemon</p>
                        <div className="main-pokedex-pesquisa-container-input">
                            <input type="text" onChange={(e) => setNome(e.target.value)}/>
                            <div className="main-pokedex-container-img" onClick={pesquisarPeloNome}><FiSearch></FiSearch></div>
                        </div>
                        <button onClick={ordemAleatoria}>ALEATORIO</button>
                    </div>
                    <div className="main-pokedex-pesquisa-linha"></div>

                </div>
                    {mensagem?(
                        <div className="mensagem-erro-na-pesquisa">
                            <h1>POKÉMON NÃO ENCONTRADO</h1>
                        </div>
                    ):(
                        <>

                        {carregando?(
    
                            <>
                            {
                                pokemon.map((item, index) => (
    
                                    <>
    
                                        <div className="main-pokedex-container-card" key={index}>
                                            <div className="main-pokedex-container-card-branco" onClick={() =>  verPokemonPeloId(item.pokemon_info_id)}>
                                                <div className="main-pokedex-container-card-branco-enfeite">
                                                    <div className="main-pokedex-container-card-branco-enfeite-traco-maior"></div>
                                                    <div className="main-pokedex-container-card-branco-enfeite-logo"></div>
                                                    <div className="main-pokedex-container-card-branco-enfeite-traco1"></div>
                                                    <div className="main-pokedex-container-card-branco-enfeite-traco2"></div>
                                                </div>
    
                                                <div className="main-pokedex-container-card-branco-logo">
                                                    <div className="main-pokedex-container-card-branco-logo-img">
                                                        <img src={item.imagem} alt="" />
                                                    </div>
                                                    <div className="main-pokedex-container-card-branco-logo-nome">
                                                        <h3>{item.nome}</h3>
                                                        <p>#{item.numero_pokemon}</p>
                                                    </div>
                                                    <div className="main-pokedex-container-card-branco-logo-tipos">
                                                        <ul>
                                                            {item.tipos.split(',').map((tipo) => (
                                                                <li>{tipo}</li>
                                                            ))}
                                                            
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
    
                                ))
                            }
                            
                            </>
                        ):(
                            <h1 className='carregando'>Carregando...</h1>
                        )}
                        </>
                        )}


                </div>

            </main>
        </div>
    )
}

