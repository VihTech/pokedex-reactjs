import Header from "../../Components/Header";
import './style.css'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../Services/API";
import Ambos from '../../Imagens/Ambos.png'
import Feminino from '../../Imagens/Feminino.png'
import Masculino from '../../Imagens/Masculino.png'
import Desconhecido from '../../Imagens/Desconhecido.png'

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
    const [generoAtual, setGenero] = useState('')

    const pegarTodasInformacoes = async () => {
        try {
            const res = await api.get('/mostrar/' + pokemon_info_id.id)
            setPokemon(res.data)
            setCarregando(true)
            console.log(res.data.genero)
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
                                                            <h2>{pokemon.nome}</h2>
                                                            <p>{pokemon.descricao}</p>
                                                        </div>

                                                        <div className="main-informacoes-pokemons-informacoes-container-vermelho-container-informacoes-container">

                                                            <div className="main-informacoes-pokemons-informacoes-container-vermelho-container-informacoes-container-pontos">

                                                                <ul>
                                                                    <il>Altura: {pokemon.altura}m</il>
                                                                    <il>Peso: {pokemon.peso}g</il>
                                                                    <il>Especial Defesa: {pokemon.especial_defesa}</il>
                                                                    <il>Especial Ataque: {pokemon.especial_ataque}</il>
                                                                    <il>Categoria: {pokemon.categoria}</il>
                                                                    <il className="genero">Gênero: <img src={generoAtual} alt="" /></il>
                                                                </ul>

                                                            </div>

                                                            <div className="main-informacoes-pokemons-informacoes-container-vermelho-container-informacoes-container-grafico">

                                                                <div className="main-informacoes-pokemons-informacoes-container-vermelho-container-informacoes-container-grafico-titulo">
                                                                        <h3>STATUS</h3>
                                                                </div>

                                                                <div className="main-informacoes-pokemons-informacoes-container-vermelho-container-informacoes-container-grafico-container">
                                                                    <div className="main-informacoes-pokemons-informacoes-container-vermelho-container-informacoes-container-grafico-container-pontos">
                                                                        <div className="main-informacoes-pokemons-informacoes-container-vermelho-container-informacoes-container-grafico-container-pontos-coluna1 valores" style={{height: `${pokemon.hp}%`}}>
                                                                            <p className="valor">{pokemon.hp}</p>
                                                                        </div>

                                                                        <div className="main-informacoes-pokemons-informacoes-container-vermelho-container-informacoes-container-grafico-container-pontos-coluna2 valores" style={{height: `${pokemon.ataque}%`}}>
                                                                            <p className="valor">{pokemon.ataque}</p>
                                                                        </div>
                                                                        
                                                                        <div className="main-informacoes-pokemons-informacoes-container-vermelho-container-informacoes-container-grafico-container-pontos-coluna3 valores" style={{height: `${pokemon.defesa}%`}}>
                                                                            <p className="valor">{pokemon.defesa}</p>
                                                                        </div>

                                                                        <div className="main-informacoes-pokemons-informacoes-container-vermelho-container-informacoes-container-grafico-container-pontos-coluna4 valores" style={{height: `${pokemon.especial_ataque}%`}}>
                                                                            <p className="valor">{pokemon.especial_ataque}</p>
                                                                        </div>

                                                                        <div className="main-informacoes-pokemons-informacoes-container-vermelho-container-informacoes-container-grafico-container-pontos-coluna5 valores" style={{height: `${pokemon.especial_defesa}%`}}>
                                                                            <p className="valor">{pokemon.especial_defesa}</p>
                                                                        </div>

                                                                        <div className="main-informacoes-pokemons-informacoes-container-vermelho-container-informacoes-container-grafico-container-pontos-coluna6 valores" style={{height: `${pokemon.velocidade}%`}}>
                                                                            <p className="valor">{pokemon.velocidade}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                                <div className="main-informacoes-pokemons-informacoes-container-vermelho-container-informacoes-container-grafico-nomes">
                                                                    <ul>
                                                                        <il>HP</il>
                                                                        <il>ATK</il>
                                                                        <il>DF</il>
                                                                        <il>SATK</il>
                                                                        <il>SDF</il>
                                                                        <il>SP</il>
                                                                    </ul>
                                                                </div>

                                                            </div>

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