import './style.css'
import Header from '../../Components/Header'
import { api } from '../../Services/API'
import { useState, useEffect } from 'react'
import {FiSearch} from 'react-icons/fi'

export const Pokedex = (props) => {

    const [carregando, setCarregando] = useState(false)
    const [pokemon, setPokemon] = useState('')
    const [nome, setNome] = useState('')

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
          console.log(res);
      
          if (res.data.mensagem === 'Pokemon(s) não encontrado(s)') {
            console.log('Nenhum Pokémon encontrado');
          } else {
            console.log('Pokémon encontrado:', res.data);
          }
        } catch (erro) {
          console.log(erro);
        }
      };
      
      

    useEffect(() => {
        pegarPokemons()
    }, [])

    return(
        <div>
            <Header/>
            <main className="main-pokedex">
                <div className="main-informacoes-pokemons-logo"></div>
                <div className="main-informacoes-pokemons-bolinhas1 bolinhas"></div>
                <div className="main-informacoes-pokemons-bolinhas2 bolinhas"></div>
                <div className="main-pokedex-container">

                <div className="main-pokedex-titulo">
                    <h1>POKEMON</h1>
                    <h1>{nome}</h1>
                </div>

                <div className="main-pokedex-pesquisa">
                    <div className="main-pokedex-pesquisa-container">
                        <p>Procurar Pokemon</p>
                        <div className="main-pokedex-pesquisa-container-input">
                            <input type="text" onChange={(e) => setNome(e.target.value)}/>
                            <div className="main-pokedex-container-img" onClick={pesquisarPeloNome}><FiSearch></FiSearch></div>
                        </div>
                    </div>
                    <div className="main-pokedex-pesquisa-linha"></div>

                </div>

                    {carregando?(

                        <>
                        {
                            pokemon.map((item, index) => (

                                <>

                                    <div className="main-pokedex-container-card" key={index}>
                                        <div className="main-pokedex-container-card-preto" onClick={() =>  verPokemonPeloId(item.pokemon_info_id)} >
                                            
                                            <div className="main-pokedex-container-card-preto-vermelho" >
                                                <div className="main-pokedex-container-card-preto-vermelho-branco" >
                                                    <img src={item.imagem} alt="" />
                                                </div> 
                                                <div className="main-pokedex-container-card-preto-vermelho-informacoes" >
                                                    <div className="main-pokedex-container-card-preto-vermelho-informacoes-poder">
                                                        <p>{item.tipo}</p>
                                                    </div>
                                                    <div className="main-pokedex-container-card-preto-vermelho-informacoes-nome">
                                                        <div className="main-pokedex-container-card-preto-vermelho-informacoes-nome-branco">      
                                                        </div>
                                                        <div className="main-pokedex-container-card-preto-vermelho-informacoes-nome-preto">
                                                            <p>{item.nome}</p>
                                                        </div>
                                                    </div>
                                                    <div className="main-pokedex-container-card-preto-vermelho-informacoes-numero">
                                                        <p>#{item.numero_pokemon}</p>
                                                    </div>   
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>

                            ))
                        }
                        
                        </>
                    ):(
                        <h1>Carregando...</h1>
                    )}

                </div>

            </main>
        </div>
    )
}

