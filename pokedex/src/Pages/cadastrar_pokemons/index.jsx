import Header from '../../Components/Header'
import './style.css'
import { useState, useEffect, version } from 'react'
import { api } from '../../Services/API'
import {AiOutlineCheck} from 'react-icons/ai'
import { TbClick, TbPackage } from 'react-icons/tb'
import { Mensagem } from '../../Components/Mensagem'

export const CadastrarPokemons = () =>{
    const [mensagemAviso, setMensagemAviso] = useState('')
    const [tipo,setTipomsg] = useState('')
    const [nome, setNome] = useState('')
    const [tipagem, setTipo] = useState('none')
    const [descricao, setDescricao] = useState('')
    const [altura, setAltura] = useState('')
    const [peso, setPeso] = useState('')
    const [categoria, setCategoria] = useState('')
    const [genero, setGenero] = useState('')
    const [total, setTotal] = useState('')
    const [hp, setHp] = useState(0)
    const [ataque, setAtaque] = useState(0)
    const [defesa, setDefesa] = useState(0)
    const [especial_ataque, setEspecial_ataque] = useState(0)
    const [especial_defesa, setEspecial_defesa] = useState(0)
    const [velocidade, setVelocidade] = useState(0)
    const [imagem, setImagem] = useState('')
    const [numero_pokemon, setNumero_pokemon] = useState('')
    const [fraqueza, setFraqueza] = useState('none')
    const [habilidade, setHabilidade] = useState('none')
    const [feminino, setFeminino] = useState('')
    const [masculino, setMasculino] = useState('')
    const [desconhecido, setDesconhecido] = useState('')
    const [mostrarCategorias, setMostrarCategorias] = useState('')
    const [mostrarHabilidades, setMostrarHabilidades] = useState('')
    const [mostrarFraquezas, setMostrarFraquezas] = useState('')
    const [mostrarTipagem, setMostrarTipagem] = useState('')
    const [modelInformacoes, setModelInformacoes] = useState(true)
    const [modelStatus, setModelStatus] = useState(false)
    const [informacoesAtivo, setInformacoesAtivo] = useState('ativo')
    const [statusAtivo, setStatusAtivo] = useState('')
    const [confereFeminino, setConfereFeminino] = useState('')
    const [confereMasculino, setConfereMasculino] = useState('')
    const [confereDesconhecido, setConfereDesconhecido] = useState('')
    const [carregandoCategoria, setCarregandoCategoria] = useState(false)
    const [carregandoHabilidades, setCarregandoHabilidades] = useState(false)
    const [carregandoFraquezas, setCarregandoFraquezas] = useState(false)
    const [carregandoTipagem, setCarregandTipagem] = useState(false)
    const [listaTipo, setListaTipo] = useState([])
    const [listaHabilidades, setListaHabilidades] = useState([])
    const [listaFraquezas, setListaFraquezas] = useState([])

    const totalCalculo = () => {
        let total_calc = 0
        total_calc = (parseFloat(hp) + parseFloat(ataque) + parseFloat(defesa) + parseFloat(especial_ataque) + parseFloat(especial_defesa) + parseFloat(velocidade))
        setTotal(total_calc)

    }

    const abrirModelInformacoes = () => {
        if (modelInformacoes){
            setModelInformacoes(false)
            setModelStatus(true)
            setInformacoesAtivo('')
            setStatusAtivo('ativo')
        }
        else{
            setModelInformacoes(true)
            setModelStatus(false)
            setInformacoesAtivo('ativo')
            setStatusAtivo('')
        }
    }

    const abrirModelStatus = () => {
        if (modelStatus) {
            setModelStatus(false)
            setModelInformacoes(true)
            setInformacoesAtivo('ativo')
            setStatusAtivo('')
            
        }
        else{
            setModelStatus(true)
            setModelInformacoes(false)
            setInformacoesAtivo('')
            setStatusAtivo('ativo')

        }
    }

    const selecionarFeminino = () => {
        if (feminino === 'on'){
            setFeminino('')
            setConfereFeminino('')
        }else{
            setFeminino('on')
            setConfereFeminino(<AiOutlineCheck/>)
        }
    }

    const selecionarMasculino = () => {
        if (masculino === 'on'){
            setMasculino('')
            setConfereMasculino('')
        }else{
            setMasculino('on')
            setConfereMasculino(<AiOutlineCheck/>)
        }
    }

    const selecionarDesconhecido = () => {
        if (desconhecido === 'on'){
            setDesconhecido('')
            setConfereDesconhecido('')
        }else{
            setDesconhecido('on')
            setConfereDesconhecido(<AiOutlineCheck/>)
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
        const data = {
            nome,
            descricao,
            altura,
            peso,
            categoria,
            genero,
            hp,
            ataque,
            defesa,
            especial_ataque,
            especial_defesa,
            velocidade,
            imagem,
            numero_pokemon,
            fraqueza: listaFraquezas,
            habilidade: listaHabilidades,
            tipagem: listaTipo
        }

        try {

            if(mensagemAviso){
                setTipomsg('')
                setMensagemAviso('')
            }
            
            const res = await api.post('/cadastrar/pokemon', data)
            if(res.data.status === 400){
                setTipomsg('erro')
                setMensagemAviso(res.data.Mensagem)
                console.log('eroror')
            }else{
                setTipomsg('sucesso')
                setMensagemAviso(res.data.Mensagem)
                setNome('')
                setDescricao('')
                setAltura('')
                setPeso('')
                setCategoria('')
                setGenero('')
                setFeminino('')
                setConfereFeminino('')
                setMasculino('')
                setConfereMasculino('')
                setDesconhecido('')
                setConfereDesconhecido('')
                setTotal('')
                setHp(0)
                setAtaque(0)
                setDefesa(0)
                setEspecial_ataque(0)
                setEspecial_defesa(0)
                setVelocidade(0)
                setImagem('')
                setNumero_pokemon('')
                setFraqueza('none')
                setListaFraquezas([])
                setHabilidade('none')
                setListaHabilidades([])
                setTipo('none')
                setListaTipo([])
            }


        } catch (error) {
            console.log(error)
            setTipomsg('erro')
            setMensagemAviso('Há campos vazios!')
            console.log('eroror')
    }}

    const pegarCategorias = async () => {
        try {
            const res = await api.get('/mostrar/categoria')
            setMostrarCategorias(res.data)
            setCarregandoCategoria(true)
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

    const pegarFraquezas = async () => {
        try {
            const res = await api.get('/mostrar/fraquezas')
            setMostrarFraquezas(res.data)
            setCarregandoFraquezas(true)
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

    const adicionandoTipagem = () => {
        if (listaTipo.length === 2){
            setTipomsg('erro')
            setMensagemAviso('No máximo duas tipagens!')
        }else{
            if (tipagem !== 'none' && !listaTipo.includes(tipagem)){
                const novaTipagem = tipagem
                const novaListaTipagem = [...listaTipo, novaTipagem];
                setListaTipo(novaListaTipagem);
            }

        }

    }

    const adicionandoHabilidades = () => {
        if (habilidade !== 'none' && !listaHabilidades.includes(habilidade)){
            const novaHabilidade = habilidade
            const novaListaHabilidade = [...listaHabilidades, novaHabilidade];
            setListaHabilidades(novaListaHabilidade);
        }

    }

    const adicionandoFraquezas= () => {
        if (fraqueza !== 'none' && !listaFraquezas.includes(fraqueza)){
            const novaFraqueza = fraqueza
            const novaListaFraqueza = [...listaFraquezas, novaFraqueza];
            setListaFraquezas(novaListaFraqueza);
        }
    }

    const apagarDaListaTipo = (valor) => {
        const novaListaTipo = [...listaTipo]; // Cria uma cópia da lista original
        novaListaTipo.splice(valor, 1); // Remove o elemento da nova lista
        setListaTipo(novaListaTipo); // Atualiza o estado com a nova lista
    }

    const apagarDaListaHabilidades = (valor) => {
        const novaListaHabilidades = [...listaHabilidades]; // Cria uma cópia da lista original
        novaListaHabilidades.splice(valor, 1); // Remove o elemento da nova lista
        setListaHabilidades(novaListaHabilidades); // Atualiza o estado com a nova lista
    }

    const apagarDaListaFraquezas = (valor) => {
        const novaListaFraquezas = [...listaFraquezas]; // Cria uma cópia da lista original
        novaListaFraquezas.splice(valor, 1); // Remove o elemento da nova lista
        setListaFraquezas(novaListaFraquezas); // Atualiza o estado com a nova lista
    }

    useEffect (() => {
        qualGenero()
    }, [feminino, masculino, desconhecido])

    useEffect (() => {
        pegarCategorias()
    }, [])

    useEffect (() => {
        pegarHabilidades()
    }, [])

    useEffect (() => {
        pegarFraquezas()
    }, [])

    useEffect (() => {
        pegarTipagem()
    }, [])

    useEffect (() => {
        adicionandoTipagem()
    }, [tipagem])

    useEffect (() => {
        adicionandoHabilidades()
    }, [habilidade])

    useEffect (() => {
        adicionandoFraquezas()
        
    }, [fraqueza])

    useEffect(() => {
        totalCalculo()
    }, [hp, ataque, defesa, especial_ataque, especial_defesa, velocidade])

    return(
        <>  
            <Header/>
            <main className="main-cadastrar-pokemons">
                <div className="main-informacoes-pokemons-triangulo"></div>
                <div className="main-informacoes-pokemons-logo"></div>
                <div className="main-informacoes-pokemons-bolinhas1 bolinhas"></div>
                <div className="main-informacoes-pokemons-bolinhas2 bolinhas"></div>
                
                <div className="main-cadastrar-pokemons-container">
                    <div className="main-cadastrar-pokemons-container-enfeite">
                        <div className="main-cadastrar-pokemons-container-enfeite-logo"></div>
                        <div className="main-cadastrar-pokemons-container-enfeite-traco1"></div>
                        <div className="main-cadastrar-pokemons-container-enfeite-traco2"></div>

                        <div className="main-cadastrar-pokemons-container-enfeite-linha-maior"></div>
                        <div className="main-cadastrar-pokemons-container-enfeite-titulo">
                            <h2>CADASTRAR POKEMON</h2>
                        </div>
                    </div>

                    <div className="main-cadastrar-pokemons-container-formulario">
                        <div className="main-cadastrar-pokemons-container-formulario-navbar">
                            <ul>
                                <il className={informacoesAtivo} onClick={abrirModelInformacoes}>INFORMAÇÕES</il>
                                <il className={statusAtivo} onClick={abrirModelStatus}>STATUS</il>
                            </ul>
                        </div>

                        {modelInformacoes&& (
                            <>
                                <div className="main-cadastrar-pokemons-container-formulario-campos">
                                    <div className="main-cadastrar-pokemons-container-formulario-campos-esquerda">
                                        <div className="main-cadastrar-pokemons-container-formulario-campos-esquerda-nome">
                                            <p>NOME</p>
                                            <input type="text" onChange={(e) => setNome(e.target.value)} value={nome}/>
                                        </div>

                                        <div className="main-cadastrar-pokemons-container-formulario-campos-esquerda-descricao">
                                            <p>DESCRIÇÃO</p>
                                            <textarea type="text" onChange={(e) => setDescricao(e.target.value)} value={descricao}/>
                                        </div>

                                        <div className="main-cadastrar-pokemons-container-formulario-campos-esquerda-imagem">
                                            <p>IMAGEM <span>(Insira o endereço da imagem)</span></p>
                                            <input type="text" onChange={(e) => setImagem(e.target.value)} value={imagem}/>
                                        </div>
                                    </div>
                                    <div className="main-cadastrar-pokemons-container-formulario-campos-direita">
                                        <div className="main-cadastrar-pokemons-container-formulario-campos-direita-categoria">
                                            <p>CATEGORIA</p>
                                            <select onChange={e => setCategoria(e.target.value)} value={categoria}>
                                                <option value="none"></option>
                                                {carregandoCategoria?(
                                                    mostrarCategorias.map((item) => (
                                                        <option value={item.categoria}>{item.categoria}</option>
                                                    ))
                                                ):(
                                                    <p>Carregando</p>
                                                )}
                                            </select>

                                        </div>

                                        <div className="main-cadastrar-pokemons-container-formulario-campos-direita-container">
                                            <div className="main-cadastrar-pokemons-container-formulario-campos-direita-container-altura">
                                                <p>ALTURA <span>(Em Metros)</span></p>
                                                <input type="text" onChange={(e) => setAltura(e.target.value)} value={altura}/>
                                            </div>

                                            <div className="main-cadastrar-pokemons-container-formulario-campos-direita-container-peso">
                                                <p>PESO <span>(Em gramas)</span></p>
                                                <input type="text" onChange={(e) => setPeso(e.target.value)} value={peso}/>
                                            </div>

                                            <div className="main-cadastrar-pokemons-container-formulario-campos-direita-container-numero">
                                                <p>N° POKEMON</p>
                                                <input type="text" onChange={(e) => setNumero_pokemon(e.target.value)} value={numero_pokemon}/>
                                            </div>

                                            <div className="main-cadastrar-pokemons-container-formulario-campos-direita-container-genero">
                                                <p>GENERO</p>
                                                <div className='checkbox'>
                                                    <div className='feminino' onClick={selecionarFeminino}>
                                                        {confereFeminino}
                                                    </div>
                                                    <p>Fem.</p>
                                                    <div className='masculino' onClick={selecionarMasculino}>
                                                        {confereMasculino}
                                                    </div>
                                                    <p>Masc</p>
                                                    <div className='desconhecido' onClick={selecionarDesconhecido}>
                                                        {confereDesconhecido}
                                                    </div>
                                                    <p className='texto-desconhecido'>Desconhecido</p>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </>
                        )}

                        {modelStatus&&(
                            <>

                                <div className="main-cadastrar-pokemons-container-formulario-status">
                                    <div className="main-cadastrar-pokemons-container-formulario-status-comeco">
                                        <div className="main-cadastrar-pokemons-container-formulario-status-comeco-tipagens">
                                            <p>TIPAGENS</p>
                                            <select onChange={(e) => setTipo(e.target.value)}>
                                                <option value="none"></option>
                                                {carregandoTipagem?(
                                                    mostrarTipagem.map((item) => (
                                                        <option value={item.tipo}>{item.tipo}</option>
                                                    ))
                                                ):(
                                                    <p>Carregando</p>
                                                )}
                                            </select>
                                            <ul>
                                            {listaTipo.map((item, index) => (
                                                <li key={index} onClick={() => apagarDaListaTipo(index)}>
                                                    {item}
                                                </li>
                                                ))}

                                            </ul>
                                        </div>

                                        <div className="main-cadastrar-pokemons-container-formulario-status-comeco-habilidades">
                                            <p>HABILIDADES</p>
                                            <select onChange={(e) => setHabilidade(e.target.value)}>
                                                <option value="none"></option>
                                                {carregandoHabilidades?(
                                                    mostrarHabilidades.map((item) => (
                                                        <option value={item.habilidade}>{item.habilidade}</option>
                                                    ))
                                                ):(
                                                    <p>Carregando</p>
                                                )}
                                            </select>
                                            <ul>
                                                {listaHabilidades.map((item, index) => (
                                                    <li key={index} onClick={() => apagarDaListaHabilidades(index)}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="main-cadastrar-pokemons-container-formulario-status-comeco-fraquezas">
                                            <p>FRAQUEZAS</p>
                                            <select onChange={(e) => setFraqueza(e.target.value)}>
                                                <option value="none"></option>
                                                {carregandoFraquezas?(
                                                    mostrarFraquezas.map((item) => (
                                                        <option value={item.fraqueza}>{item.fraqueza}</option>
                                                    ))
                                                ):(
                                                    <p>Carregando</p>
                                                )}
                                            </select>
                                            <ul>
                                                {listaFraquezas.map((item, index) => (
                                                        <li key={index} onClick={() => apagarDaListaFraquezas(index)}>{item}</li>
                                                    ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="main-cadastrar-pokemons-container-formulario-status-meio">
                                        <div className="main-cadastrar-pokemons-container-formulario-status-meio-esquerda">
                                            <div className="main-cadastrar-pokemons-container-formulario-status-meio-esquerda-hp">
                                                    <p>HP</p>
                                                    <input type="text" onChange={(e) => setHp(e.target.value)} value={hp}/>
                                            </div>

                                            <div className="main-cadastrar-pokemons-container-formulario-status-meio-esquerda-defesa">
                                                    <p>DEFESA</p>
                                                    <input type="text" onChange={(e) => setDefesa(e.target.value)} value={defesa}/>
                                            </div>

                                            <div className="main-cadastrar-pokemons-container-formulario-status-meio-esquerda-ataque">
                                                    <p>ATAQUE</p>
                                                    <input type="text" onChange={(e) => setAtaque(e.target.value)} value={ataque}/>
                                            </div>
                                        </div>

                                    
                                        <div className="main-cadastrar-pokemons-container-formulario-status-meio-direita">
                                            <div className="main-cadastrar-pokemons-container-formulario-status-meio-direita-atq-especial">
                                                    <p>ATQ. ESPECIAL</p>
                                                    <input type="text" onChange={(e) => setEspecial_ataque(e.target.value)} value={especial_ataque}/>
                                            </div>

                                            <div className="main-cadastrar-pokemons-container-formulario-status-meio-direita-defesa-especial">
                                                    <p>DF. ESPECIAL</p>
                                                    <input type="text" onChange={(e) => setEspecial_defesa(e.target.value)} value={especial_defesa}/>
                                            </div>

                                            <div className="main-cadastrar-pokemons-container-formulario-status-meio-direita-velocidade">
                                                    <p>VELOCIDADE</p>
                                                    <input type="text" onChange={(e) => setVelocidade(e.target.value)} value={velocidade}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-cadastrar-pokemons-container-formulario-status-fim">
                                        <p>PRÉVIA</p>
                                        <div className="main-cadastrar-pokemons-container-formulario-status-fim-grafico">
                                            <div className="main-cadastrar-pokemons-container-formulario-status-fim-grafico-hp" style={{height: `${hp}%`}}>
                                                <p>{hp}</p>
                                            </div>
                                            <div className="main-cadastrar-pokemons-container-formulario-status-fim-grafico-ataque" style={{height: `${ataque}%`}}>
                                                <p>{ataque}</p>
                                            </div>
                                            <div className="main-cadastrar-pokemons-container-formulario-status-fim-grafico-defesa" style={{height: `${defesa}%`}}>
                                                <p>{defesa}</p>
                                            </div>
                                            <div className="main-cadastrar-pokemons-container-formulario-status-fim-grafico-especial-ataque" style={{height: `${especial_ataque}%`}}>
                                                <p>{especial_ataque}</p>
                                            </div>
                                            <div className="main-cadastrar-pokemons-container-formulario-status-fim-grafico-especial-defesa" style={{height: `${especial_defesa}%`}}>
                                                <p>{especial_defesa}</p>
                                            </div>
                                            <div className="main-cadastrar-pokemons-container-formulario-status-fim-grafico-velocidade" style={{height: `${velocidade}%`}}>
                                                <p>{velocidade}</p>
                                            </div>
                                            <div className="main-cadastrar-pokemons-container-formulario-status-fim-grafico-total" style={{height: `${total}%`}}>
                                                <p>{total}</p>
                                            </div>
       
                                        </div>
                                            <div className="main-cadastrar-pokemons-container-formulario-status-fim-nomes">
                                                    <ul>
                                                        <il>HP</il>
                                                        <il>ATK</il>
                                                        <il>DF</il>
                                                        <il>SATK</il>
                                                        <il>SDF</il>
                                                        <il>SP</il>
                                                        <il>TOTAL</il>
                                                    </ul>
                                            </div>
                                    </div>
                                </div>
                            
                            </>
                        )}

                        
                        <div className="main-cadastrar-pokemons-container-formulario-msg">
                                {mensagemAviso&&
                                    <Mensagem tipo={tipo} msg={mensagemAviso}/>
                                }

                        </div>
                        <div className="main-cadastrar-pokemons-container-formulario-btn">
                            <button onClick={cadastrarPokemon}>CADASTRAR</button>
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}