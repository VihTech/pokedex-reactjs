import Header from '../../Components/Header'
import './style.css'
import { useState, useEffect } from 'react'
import { api } from '../../Services/API'

export const CadastrarPokemons = () =>{
    const [nome, setNome] = useState('')
    const [tipagem, setTipo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [altura, setAltura] = useState('')
    const [peso, setPeso] = useState('')
    const [categoria, setCategoria] = useState('')
    const [genero, setGenero] = useState('')
    const [total, setTotal] = useState('')
    const [hp, setHp] = useState('')
    const [ataque, setAtaque] = useState('')
    const [defesa, setDefesa] = useState('')
    const [especial_ataque, setEspecial_ataquel] = useState('')
    const [especial_defesa, setEspecial_defesa] = useState('')
    const [velocidade, setVelocidade] = useState('')
    const [imagem, setImagem] = useState('')
    const [numero_pokemon, setNumero_pokemon] = useState('')
    const [fraqueza, setFraqueza] = useState('')
    const [habilidade, setHabilidade] = useState('')
    const [feminino, setFeminino] = useState('')
    const [masculino, setMasculino] = useState('')
    const [desconhecido, setDesconhecido] = useState('')

    const selecionarFeminino = () => {
        if (feminino === 'on'){
            setFeminino('')
        }else{
            setFeminino('on')
        }
    }

    const selecionarMasculino = () => {
        if (masculino === 'on'){
            setMasculino('')
        }else{
            setMasculino('on')
        }
    }

    const selecionarDesconhecido = () => {
        if (desconhecido === 'on'){
            setDesconhecido('')
        }else{
            setDesconhecido('on')
        }
    }

    const qualGenero = () => {
        if (feminino === 'on' && masculino === '' && desconhecido === ''){
            setGenero('Feminino')
        }
        if (feminino === '' && masculino === 'on' && desconhecido === ''){
            setGenero('Masculino')
        }

        if (feminino === '' && masculino === '' && desconhecido === 'on'){
            setGenero('Desconhecido')
        }

        if (feminino === 'on' && masculino === 'on' && desconhecido === ''){
            setGenero('Ambos')
        }

        if (feminino === '' && masculino === '' && desconhecido === ''){
            setGenero('Inválido')
        }
        
        if (feminino === 'on' && masculino === 'on' && desconhecido === 'on'){
            setGenero('Inválido')
        }
    }

    const cadastrarPokemon = async () => {

        try {
            
            
            const data = {
                nome,
                descricao,
                altura,
                peso,
                categoria,
                genero,
                total,
                hp,
                ataque,
                defesa,
                especial_ataque,
                especial_defesa,
                velocidade,
                imagem,
                numero_pokemon,
                fraqueza: fraqueza.split(),
                habilidade: habilidade.split(),
                tipagem: tipagem.split()
            }
            
            console.log(data)

            const res = await api.post('/cadastrar/pokemon', data)
            console.log(res.data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect (() => {
        qualGenero()
    }, [feminino, masculino, desconhecido])

    return(
        <>  
            <Header/>
            <main className="main-cadastrar-pokemons">
                <div className="main-informacoes-pokemons-triangulo"></div>
                <div className="main-informacoes-pokemons-logo"></div>
                <div className="main-informacoes-pokemons-bolinhas1 bolinhas"></div>
                <div className="main-informacoes-pokemons-bolinhas2 bolinhas"></div>
                
                <div className="main-cadastrar-pokemons-container">

                    <div className="main-cadastrar-pokemons-container-vermelho">
                        <div className="main-cadastrar-pokemons-container-vermelho-logo"></div>
                        <h3>Insira as informações do pokemon que deseja cadastrar</h3>
                        <button onClick={cadastrarPokemon}>Cadastrar</button>
                    </div>
                    <div className="main-cadastrar-pokemons-container-formulario">
                        <div className="main-cadastrar-pokemons-container-formulario-titulo">
                            <h2>Cadastrar Pokemon</h2>
                        </div>

                        <div className="main-cadastrar-pokemons-container-formulario-container">
                            <div className="main-cadastrar-pokemons-container-formulario-container-informacoes">
                                <div className="main-cadastrar-pokemons-container-formulario-container-informacoes-titulo">
                                    <h2>Informações</h2>
                                </div>

                                <div className="main-cadastrar-pokemons-container-formulario-container-informacoes-divisao">

                                    <div className="main-cadastrar-pokemons-container-formulario-container-informacoes-esquerda">
                                        <div className="main-cadastrar-pokemons-container-formulario-container-informacoes-esquerda-nome">
                                            <p>Nome</p>
                                            <input type="text" onChange={(e) => setNome(e.target.value)}/>
                                        </div>

                                        <div className="main-cadastrar-pokemons-container-formulario-container-informacoes-esquerda-tipagens">
                                            <p>Tipagens</p>
                                            <input type="text" onChange={(e) => setTipo(e.target.value)}/>
                                        </div>

                                        <div className="main-cadastrar-pokemons-container-formulario-container-informacoes-esquerda-fraquezas">
                                            <p>Fraquezas</p>
                                            <input type="text" onChange={(e) => setFraqueza(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="main-cadastrar-pokemons-container-formulario-container-informacoes-direita">

                                        <div className="main-cadastrar-pokemons-container-formulario-container-informacoes-direita-categoria">
                                            <p>Categoria</p>
                                            <input type="text" onChange={(e) => setCategoria(e.target.value)}/>
                                        </div>

                                        <div className="main-cadastrar-pokemons-container-formulario-container-informacoes-direita-habilidades">
                                            <p>Habilidades</p>
                                            <input type="text" onChange={(e) => setHabilidade(e.target.value)}/>
                                        </div>

                                        <div className="main-cadastrar-pokemons-container-formulario-container-informacoes-direita-imagem">
                                            <p>Imagem</p>
                                            <input type="text" onChange={(e) => setImagem(e.target.value)}/>
                                        </div>

                                    </div>

                                    <div className="main-cadastrar-pokemons-container-formulario-container-informacoes-final">
                                            <div className="main-cadastrar-pokemons-container-formulario-container-informacoes-final-descricao">
                                                <p>Descricao</p>
                                                <textarea name="" id="" cols="30" rows="10" onChange={(e) => setDescricao(e.target.value)}></textarea>
                                            </div>

                                            <div className="main-cadastrar-pokemons-container-formulario-container-informacoes-final-numero-pokemon">
                                                <p>Número Pokemon</p>
                                                <input type="text" onChange={(e) => setNumero_pokemon(e.target.value)}/>
                                            </div>

                                            <div className="main-cadastrar-pokemons-container-formulario-container-informacoes-final-genero">
                                                <p>Gênero</p>
                                                <div className="checkbox">
                                                    <input type="checkbox" onClick={selecionarFeminino}/><p>Fem.</p>
                                                    <input type="checkbox" onClick={selecionarMasculino}/><p>Mas.</p>
                                                    <input type="checkbox" onClick={selecionarDesconhecido}/><p>Desconhecido</p>
                                                </div>
                                            </div>

                                        </div>

                                </div>
                            </div>

                            <div className="main-cadastrar-pokemons-container-formulario-container-status">

                                    <div className="main-cadastrar-pokemons-container-formulario-container-status-titulo">
                                        <h2>Status</h2>
                                    </div>

                                    <div className="main-cadastrar-pokemons-container-formulario-container-status-divisao">

                                        <div className="main-cadastrar-pokemons-container-formulario-container-status-esquerda">
                                            <div className="main-cadastrar-pokemons-container-formulario-container-status-esquerda-vida">
                                                <p>Vida</p>
                                                <input type="text" onChange={(e) => setHp(e.target.value)}/>
                                            </div>

                                            <div className="main-cadastrar-pokemons-container-formulario-container-status-esquerda-ataque">
                                                <p>Ataque</p>
                                                <input type="text" onChange={(e) => setAtaque(e.target.value)}/>
                                            </div>

                                            <div className="main-cadastrar-pokemons-container-formulario-container-status-esquerda-defesa-especial">
                                                <p>Defesa Especial</p>
                                                <input type="text" onChange={(e) => setEspecial_defesa(e.target.value)}/>
                                            </div>
                                        </div>
                                        <div className="main-cadastrar-pokemons-container-formulario-container-status-direita">

                                            <div className="main-cadastrar-pokemons-container-formulario-container-status-direita-defesa">
                                                <p>Defesa</p>
                                                <input type="text" onChange={(e) => setDefesa(e.target.value)}/>
                                            </div>

                                            <div className="main-cadastrar-pokemons-container-formulario-container-status-direita-ataque-especial">
                                                <p>Ataque Especial</p>
                                                <input type="text" onChange={(e) => setEspecial_ataquel(e.target.value)} />
                                            </div>

                                            <div className="main-cadastrar-pokemons-container-formulario-container-status-direita-velocidade">
                                                <p>Velocidade</p>
                                                <input type="text" onChange={(e) => setVelocidade(e.target.value)}/>
                                            </div>

                                        </div>

                                        <div className="main-cadastrar-pokemons-container-formulario-container-status-final">

                                            <div className="main-cadastrar-pokemons-container-formulario-container-status-final-total">
                                                <p>Total</p>
                                                <input type="text" onChange={(e) => setTotal(e.target.value)}/>
                                            </div>

                                            <div className="main-cadastrar-pokemons-container-formulario-container-status-final-peso">
                                                <p>Peso</p>
                                                <input type="text" onChange={(e) => setPeso(e.target.value)}/>
                                            </div>


                                            <div className="main-cadastrar-pokemons-container-formulario-container-status-final-altura">
                                                <p>Altura</p>
                                                <input type="text" onChange={(e) => setAltura(e.target.value)}/>
                                            </div>


                                        </div>

                                        

                                    </div>

                            </div>
                        </div>
                    </div>

                </div>

            </main>
        </>
    )
}