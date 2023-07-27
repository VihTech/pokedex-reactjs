import './style.css'
import Header from '../../Components/Header'
import { api } from '../../Services/API'
import { useState, useEffect, useRef } from 'react'
import {FiSearch} from 'react-icons/fi'
import { TbPolaroid } from 'react-icons/tb'
import {BsTrash3Fill} from 'react-icons/bs'
import {BiEdit} from 'react-icons/bi'
import { pegarNomeUsuario } from '../../Services/localstorage';

export const Pokedex = (props) => {

    const [carregando, setCarregando] = useState(false)
    const [pokemon, setPokemon] = useState('')
    const [nome, setNome] = useState('')
    const [mensagem, setMensagem] = useState(false)
    const [usuario, setUsuario] = useState('')
    const [opcoes, setOpcoes] = useState(true)
    const [idOpcoes, setIdOpcoes] = useState('')
    const [confirmacao, setConfirmacao] = useState(false)
    const [mainContainer, setMainContainer] = useState('main-pokedex')
    const [moduloFiltro, setModuloFiltro] = useState(false)
    const [mostrarTipagem, setMostrarTipagem] = useState('')
    const [carregandoTipagem, setCarregandTipagem] = useState(false)
    const [mostrarFraquezas, setMostrarFraquezas] = useState('')
    const [carregandoFraquezas, setCarregandoFraquezas] = useState(false)
    const [mostrarHabilidades, setMostrarHabilidades] = useState('')
    const [carregandoHabilidades, setCarregandoHabilidades] = useState(false)
    const [mostrarCategorias, setMostrarCategorias] = useState('')
    const [carregandoCategoria, setCarregandoCategoria] = useState(false)
    const [marcarTipo, setMarcarTipo] = useState('modulo-filtro-container-tipos-container-nome')
    const [marcarFraqueza, setMarcarFraqueza] = useState('modulo-filtro-container-fraquezas-container-nome')
    const [marcarHabilidade, setMarcarHabilidade] = useState('modulo-filtro-container-habilidades-container-nome')
    const [marcarCategoria, setMarcarCategoria] = useState('modulo-filtro-container-categorias-container-nome')
    const [opcaoMarcada, setOpcaoMarcada] = useState('')
    const teste = useRef(null)

    const abrirModuloFiltro = () => {
        if (moduloFiltro){
            setModuloFiltro(false)
        }else{
            setModuloFiltro(true)
        }
    }

    const abrirModuloConfirmacao = () => {
        if (confirmacao){
            setConfirmacao(false)
            setMainContainer('main-pokedex')
        }else{
            setConfirmacao(true)
            setMainContainer('main-pokedex opacidade')
        }
    }

    const apagarPokemon = async () => {
        try {
            const res = await api.delete('/excluir/pokemon/' + idOpcoes)
            console.log(res)
            setConfirmacao(false)
            setMainContainer('main-pokedex')
            window.location.href = '/Pokedex'

        } catch (error) {
            console.log(error)
            console.log(idOpcoes)
            setConfirmacao(false)
            setMainContainer('main-pokedex')
        }
    }

    const abrirModuloOpcoes = (id) => {
        if (opcoes){
            setOpcoes(false)
            setIdOpcoes('')
            
        }else{
            setOpcoes(true)
            setIdOpcoes(id)
            console.log(id)
        }
    }

    const pegandoDiv = () => {
        console.log(teste.current)
    }
    
    const verPokemonPeloId = (pokemon_id) => {
        window.location.href ='/Informacoes_pokemon/' + pokemon_id
 
    }

    const pegarPokemons = async () => {

        try {
            const res = await api.get('/mostrar/pokemon')
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

    const pegarTipagem = async () => {
        try {
            const res = await api.get('/mostrar/tipagem')
            setMostrarTipagem(res.data)
            setCarregandTipagem(true)
        } catch (error) {
            console.log(error)
        }
    }

    const pegarFraquezas = async () => {
        try {
            const res = await api.get('/mostrar/fraquezas')
            setMostrarFraquezas(res.data)
            setCarregandoFraquezas(true)
        } catch (error) {
            console.log(error)
        }
    }

    const pegarHabilidades = async () => {
        try {
            const res = await api.get('/mostrar/habilidades')
            setMostrarHabilidades(res.data)
            setCarregandoHabilidades(true)
        } catch (error) {
            console.log(error)
        }
    }

    const pegarCategorias = async () => {
        try {
            const res = await api.get('/mostrar/categoria')
            setMostrarCategorias(res.data)
            setCarregandoCategoria(true)
        } catch (error) {
            console.log(error)
        }

    }

    const filtrarTipo = async (nome) => {

        const data = {tipagem: nome}
        try {
            
            const res = await api.post("/mostrar/por_tipagem", data)
            setPokemon(res.data)
            setModuloFiltro(false)
            setMarcarTipo('modulo-filtro-container-tipo-container-nome-marcado')
            setOpcaoMarcada(nome)

        } catch (error) {
            console.log(error)
        }
    }

    const filtrarFraquezas= async (nome) => {

        const data = {fraqueza: nome}
        try {
            
            const res = await api.post("/mostrar/por_fraquezas", data)
            setPokemon(res.data)
            setModuloFiltro(false)
            setMarcarFraqueza('modulo-filtro-container-fraquezas-container-nome-marcado')
            setOpcaoMarcada(nome)

        } catch (error) {
            console.log(error)
        }
    }


    const filtrarHabilidades= async (nome) => {

        const data = {habilidade: nome}
        try {
            
            const res = await api.post("/mostrar/por_habilidade", data)
            setPokemon(res.data)
            setModuloFiltro(false)
            setMarcarHabilidade('modulo-filtro-container-habilidades-container-nome-marcado')
            setOpcaoMarcada(nome)

        } catch (error) {
            console.log(error)
        }
    }

    const filtrarCategorias= async (nome) => {

        const data = {categoria: nome}
        try {
            
            const res = await api.post("/mostrar/por_categoria", data)
            setPokemon(res.data)
            setModuloFiltro(false)
            setMarcarCategoria('modulo-filtro-container-categorias-container-nome-marcado')
            setOpcaoMarcada(nome)

        } catch (error) {
            console.log(error)
        }
    }

    const tirarFiltro = () => {
        pegarPokemons()
        setOpcaoMarcada('')
        setModuloFiltro(false)
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
        setOpcoes(false)
    },[nome, mensagem])

    useEffect(() => {
        const nomeUsuario = pegarNomeUsuario();
        setUsuario(nomeUsuario);
        console.log(nomeUsuario)
      }, [usuario]);

    useEffect (() => {
        pegarTipagem()
    }, [])

    useEffect (() => {
        pegarFraquezas()
    }, [])

    useEffect (() => {
        pegarHabilidades()
    }, [])

    useEffect (() => {
        pegarCategorias()
    }, [])

    return(
        <div>
            <Header/>

            {confirmacao&&(
                    <div className="main-pokedex-container-confirmacao">
                        <div className="main-pokedex-container-confirmacao-enfeite">
                            <div className="main-pokedex-container-confirmacao-enfeite-traco-maior"></div>                                               
                            <div className="main-pokedex-container-confirmacao-enfeite-logo"></div>
                            <div className="main-pokedex-container-confirmacao-enfeite-traco1"></div>
                            <div className="main-pokedex-container-confirmacao-enfeite-traco2"></div>

                            <div className="main-pokedex-container-confirmacao-enfeite-titulo">
                                <h2>ATENÇÃO</h2>
                            </div>
                        </div>
                        <div className="main-pokedex-container-confirmacao-texto">
                            <h3>DESEJA APAGAR ESSE POKEMON?</h3>
                        </div>
                        <div className="main-pokedex-container-confirmacao-opcoes">
                            
                            <button className='btn-esquerdo' onClick={apagarPokemon}>CONFIRMAR</button>
                            <button className='btn-direito' onClick={abrirModuloConfirmacao}>CANCELAR</button>
                        </div>
                    </div>
                )}

            
            <main className={mainContainer}>

                {moduloFiltro&&(
                    <div className="modulo-filtro">
                        <div className="modulo-filtro-container">
                            <div className="modulo-filtro-container-enfeite">
                                <div className="modulo-filtro-container-enfeite-traco-maior"></div>                                               
                                <div className="modulo-filtro-container-enfeite-logo"></div>
                                <div className="modulo-filtro-container-enfeite-traco1"></div>
                                <div className="modulo-filtro-container-enfeite-traco2"></div>

                                <div className="modulo-filtro-container-enfeite-titulo">
                                    <h2>FILTRO</h2>
                                </div>
                            </div>

                            <div className="modulo-filtro-container-tipos">
                                <h3>TIPOS</h3>

                                <div className="modulo-filtro-container-tipos-container">
                                    {carregandoTipagem?(
                                        mostrarTipagem.map((item) => (
                                            <>
                                                {item.tipo === opcaoMarcada?(
                                                    <>
                                                    <div className={marcarTipo} onClick={tirarFiltro}>{item.tipo}</div>
                                                    </>
                                                ):(
                                                    <div className='modulo-filtro-container-tipos-container-nome' onClick={() =>  filtrarTipo(item.tipo)}>{item.tipo}</div>
                                                )}
                                                
                                            </>
                                            ))
                                    ):(
                                        <p>Carregando</p>
                                    )}
                                </div>
                            </div>

                            <div className="modulo-filtro-container-fraquezas">
                                <h3>FRAQUEZAS</h3>

                                <div className="modulo-filtro-container-fraquezas-container">
                                    {carregandoFraquezas?(
                                            mostrarFraquezas.map((item) => (
                                                <>  
                                                    {item.fraqueza === opcaoMarcada?(
                                                        <div className={marcarFraqueza} onClick={tirarFiltro}>{item.fraqueza}</div>
                                                    ):(
                                                        <div className='modulo-filtro-container-fraquezas-container-nome' onClick={() =>  filtrarFraquezas(item.fraqueza)}>{item.fraqueza}</div>
                                                    )}
                                                    
                                                </>
                                            ))
                                        ):(
                                            <p>Carregando</p>
                                    )}
                                </div>
                            </div>

                            <div className="modulo-filtro-container-habilidades">
                                <h3>HABILIDADES</h3>

                                <div className="modulo-filtro-container-habilidades-container">
                                    {carregandoHabilidades?(
                                        mostrarHabilidades.map((item) => (
                                            <>  
                                                {item.habilidade === opcaoMarcada?(
                                                    <div className={marcarHabilidade} onClick={tirarFiltro}>{item.habilidade}</div>
                                                ):(
                                                    <div className='modulo-filtro-container-habilidades-container-nome' onClick={() =>  filtrarHabilidades(item.habilidade)}>{item.habilidade}</div>
                                                )}
                                                
                                            </>
                                        ))
                                    ):(
                                        <p>Carregando</p>
                                        )}
                                </div>
                            </div>
                                        
                            
                            <div className="modulo-filtro-container-categoria">
                                <h3>CATEGORIA</h3>

                                <div className="modulo-filtro-container-categoria-container">
                                    {carregandoCategoria?(
                                        mostrarCategorias.map((item) => (
                                            <>  
                                                {item.categoria === opcaoMarcada?(
                                                    <div className={marcarCategoria} onClick={tirarFiltro}>{item.categoria}</div>
                                                ):(
                                                    <div className='modulo-filtro-container-categoria-container-nome' onClick={() =>  filtrarCategorias(item.categoria)}>{item.categoria}</div>
                                                )}
                                                
                                            </>
                                        ))
                                    ):(
                                        <p>Carregando</p>
                                            )}
                                </div>
                            </div>

                        
                        </div>
                    </div>
                )

                }

                
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
                        <div className="main-pokedex-pesquisa-container-filtro">

                            <div className="main-pokedex-pesquisa-container-filtro-btn" onClick={abrirModuloFiltro}>
                                <div className="main-pokedex-pesquisa-container-filtro-traco1"></div>
                                <div className="main-pokedex-pesquisa-container-filtro-traco2"></div>
                                <div className="main-pokedex-pesquisa-container-filtro-traco3"></div>

                            </div>
                        </div>
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
                                            {item.pokemon_info_id === idOpcoes&&(
                                                <>
                                                    {opcoes&&(
                                                        <>
                                                            <div className="main-pokedex-container-card-opcoes">
                                                                <div className="main-pokedex-container-card-opcoes-traco">
                                                                    <p onClick={abrirModuloOpcoes}>X</p>
                                                                </div>
                                                                <div className="main-pokedex-container-card-opcoes-opcoes">
                                                                        <div className="main-pokedex-container-card-opcoes-opcoes-apagar" onClick={abrirModuloConfirmacao}>
                                                                            <p>Apagar</p>
                                                                            <BsTrash3Fill/>
                                                                        </div>
                                                                        <div className="main-pokedex-container-card-opcoes-opcoes-editar">
                                                                            <p>Editar</p>
                                                                            <BiEdit/>
                                                                        </div>
                                                                </div>
                                                            </div>
                                                        </>
                                                    )}
                                                </>

                                            )}

                                            {usuario&&(
                                                <div className="main-pokedex-container-card-branco-enfeite-traco-maior-opcoes" onClick={() =>  abrirModuloOpcoes(item.pokemon_info_id)}>
                                                    <div className="main-pokedex-container-card-branco-enfeite-traco-maior-opcoes-ponto1 opcoes-ponto"></div>
                                                    <div className="main-pokedex-container-card-branco-enfeite-traco-maior-opcoes-ponto2 opcoes-ponto"></div>
                                                    <div className="main-pokedex-container-card-branco-enfeite-traco-maior-opcoes-ponto3 opcoes-ponto"></div>
                                                </div>
                                            )}
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

