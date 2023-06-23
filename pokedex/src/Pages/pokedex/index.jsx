import './style.css'
import Header from '../../Components/Header'
import { api } from '../../Services/API'
import { useState, useEffect } from 'react'

export const Pokedex = (props) => {

    const [carregando, setCarregando] = useState(false)
    const [pokemon, setPokemon] = useState('')

    const verPokemonPeloId = (pokemon_id) => {
        window.location.href ='/Informacoes_pokemon/' + pokemon_id
 
    }

    const pegarPokemons = async () => {

        try {
            const res = await api.get('/mostrar')
            console.log(res.data)
            setPokemon(res.data)
            setCarregando(true)
            
        } catch (erro) {
            console.log(erro)
            
        }
        

    }

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

