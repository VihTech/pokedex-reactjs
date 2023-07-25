import { useState } from "react";
import Header from "../../Components/Header";
import './style.css'
import { api } from "../../Services/API";
import { Mensagem } from '../../Components/Mensagem'

export const CadastrarInformacoes = () => {
    const [mensagemAviso, setMensagemAviso] = useState('')
    const [tipo,setTipomsg] = useState('')
    const [foco, setFoco] = useState("main-cadastrar-informacoes-container")
    const [modelFraquezas, setModelFraquezas] = useState(false)
    const [modelHabilidades, setModelHabilidades] = useState(false)
    const [modelTipagem, setModelTipagem] = useState(false)
    const [modelCategoria, setModelCategoria] = useState(false)
    const [categoria, setCategoria] = useState('')
    const [fraqueza, setFraqueza] = useState('')
    const [imagem_fraqueza, setImagemFraqueza] = useState('')
    const [habilidade, setHabilidade] = useState('')
    const [descricaoHabilidade, setDescricaoHabilidade] = useState('')
    const [tipagem, setTipagem] = useState('')
    const [imagem_tipagem, setImagemTipagem] = useState('')

    const abrirModelFraquezas = () => {
        setMensagemAviso(false)
        if (modelFraquezas){
            setModelFraquezas(false)
            setFoco("main-cadastrar-informacoes-container")
        }else{
            setModelFraquezas(true)
            setFoco("main-cadastrar-informacoes-container blur")
        }
    }

    const abrirModelHabilidades = () => {
        setMensagemAviso(false)
        if (modelHabilidades) {
            setModelHabilidades(false)
            setFoco("main-cadastrar-informacoes-container")
        }else{
            setModelHabilidades(true)
            setFoco("main-cadastrar-informacoes-container blur")
        }
    }

    const abrirModelTipagem = () => {
        setMensagemAviso(false)
        if (modelTipagem){
            setModelTipagem(false)
            setFoco("main-cadastrar-informacoes-container")
        }else{
            setModelTipagem(true)
            setFoco("main-cadastrar-informacoes-container blur")
        }
    }

    const abrirModelCategoria = () => {
        setMensagemAviso(false)
        if(modelCategoria){
            setModelCategoria(false)
            setFoco("main-cadastrar-informacoes-container")
        }else{
            setModelCategoria(true)
            setFoco("main-cadastrar-informacoes-container blur")
        }
    }

    const cadastrarCategoria = async () => {    
           
        const data = {
            categoria,
        }
        try {
            if(mensagemAviso){
                setTipomsg('')
                setMensagemAviso('')
            }

            const res = await api.post('/cadastrar/categoria', data)

            if(res.data.Mensagem === 400){
                setTipomsg('erro')
                setMensagemAviso(res.data.Mensagem)
            }else{
                console.log(res.data)
                setTipomsg('sucesso')
                setMensagemAviso(res.data.Mensagem)
                setCategoria('')
            }
        } catch (error) {
            console.log(error)
        }
    }

    const cadastrarHabilidade = async () => {
        const data = {
            habilidade,
            descricao: descricaoHabilidade
        }
        
        try {
            if(mensagemAviso){
                setTipomsg('')
                setMensagemAviso('')
            }

            const res = await api.post('/cadastrar/habilidades', data)

            if(res.data.Mensagem === 400){
                setTipomsg('erro')
                setMensagemAviso(res.data.Mensagem)
            }else{
                console.log(res.data)
                setTipomsg('sucesso')
                setMensagemAviso(res.data.Mensagem)
                setHabilidade('')
                setDescricaoHabilidade('')

            }
        } catch (error) {
            console.log(error)
        }
    }

    const cadastrarFraqueza = async () => {
        const data = {
            fraqueza,
            imagem_fraqueza,
        }
        
        try {
            if(mensagemAviso){
                setTipomsg('')
                setMensagemAviso('')
            }

            const res = await api.post('/cadastrar/fraquezas', data)
            if(res.data.Mensagem === 400){
                setTipomsg('erro')
                setMensagemAviso(res.data.Mensagem)
            }else{
                console.log(res.data)
                setTipomsg('sucesso')
                setMensagemAviso(res.data.Mensagem)
                setFraqueza('')
                setImagemFraqueza('')

            }
        } catch (error) {
            console.log(error)
        }
    }

    const cadastrarTipagem = async () => {
        const data = {
            tipagem,
            imagem_tipagem
        }
        
        try {
            if(mensagemAviso){
                setTipomsg('')
                setMensagemAviso('')
            }

            const res = await api.post('/cadastrar/tipagem', data)
            if(res.data.Mensagem === 400){
                setTipomsg('erro')
                setMensagemAviso(res.data.Mensagem)
            }else{
                console.log(res.data)
                setTipomsg('sucesso')
                setMensagemAviso(res.data.Mensagem)
                setTipagem('')
                setImagemTipagem('')

            }
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <> 
            <Header/>
            <main className="main-cadastrar-informacoes">
                <div className="main-informacoes-pokemons-triangulo"></div>
                <div className="main-informacoes-pokemons-logo"></div>
                <div className="main-informacoes-pokemons-bolinhas1 bolinhas"></div>
                <div className="main-informacoes-pokemons-bolinhas2 bolinhas"></div>

                <div className={foco}>
                        <div className="main-cadastrar-informacoes-container-enfeite">
                            <div className="main-cadastrar-informacoes-container-enfeite-traco-maior"></div>
                            <div className="main-cadastrar-informacoes-container-enfeite-logo"></div>
                            <div className="main-cadastrar-informacoes-container-enfeite-traco1"></div>
                            <div className="main-cadastrar-informacoes-container-enfeite-traco2"></div>
                            <div className="main-cadastrar-informacoes-container-enfeite-titulo">
                                <h2>CADASTRAR INFORMAÇÕES</h2>
                            </div>
                        </div>

                        <div className="main-cadastrar-informacoes-container-cards">
                            <div className="main-cadastrar-informacoes-container-cards-texto">
                                <h3>SELECIONE O QUE VOÊ DESEJA CADASTRAR</h3>
                            </div>
                            <div className="main-cadastrar-informacoes-container-cards-card">
                                <div className="main-cadastrar-informacoes-container-cards-card-container">
                                    <div className="main-cadastrar-informacoes-container-cards-card-container-img" onClick={abrirModelTipagem}>
                                        <p>TIPAGEM</p>
                                    </div>
                                    
                                </div>

                                <div className="main-cadastrar-informacoes-container-cards-card-container">
                                    <div className="main-cadastrar-informacoes-container-cards-card-container-img" onClick={abrirModelCategoria}>
                                        <p>CATEGORIA</p>
                                    </div>
                                    
                                </div>

                                <div className="main-cadastrar-informacoes-container-cards-card-container">
                                    <div className="main-cadastrar-informacoes-container-cards-card-container-img" onClick={abrirModelHabilidades}>
                                        <p>HABILIDADES</p>
                                    </div>
                                </div>

                                <div className="main-cadastrar-informacoes-container-cards-card-container">
                                    <div className="main-cadastrar-informacoes-container-cards-card-container-img" onClick={abrirModelFraquezas}>
                                        <p>FRAQUEZAS</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                {modelCategoria&&(
                    <>
                        <div className="main-cadastrar-informacoes-editar-categoria-container-fechar" onClick={abrirModelCategoria}>
                            <p>X</p>
                        </div>
                        <div className="main-cadastrar-informacoes-editar-categoria-container">
                            <div className="main-cadastrar-informacoes-editar-categoria-container-enfeite">
                                <div className="main-cadastrar-informacoes-editar-categoria-container-enfeite-traco-maior"></div>
                                <div className="main-cadastrar-informacoes-editar-categoria-container-enfeite-logo"></div>
                                <div className="main-cadastrar-informacoes-editar-categoria-container-enfeite-traco1"></div>
                                <div className="main-cadastrar-informacoes-editar-categoria-container-enfeite-traco2"></div>
                                <div className="main-cadastrar-informacoes-editar-categoria-container-enfeite-titulo">
                                    <h2>CADASTRAR CATEGORIA</h2>
                                </div>
                            </div>

                            <div className="main-cadastrar-informacoes-editar-categoria-container-campos">
                                <div className="main-cadastrar-informacoes-editar-categoria-container-campos-texto">
                                    <p>INSIRA AS INFORMAÇÕES</p>
                                </div>

                                <div className="main-cadastrar-informacoes-editar-categoria-container-campos-container">
                                    <div className="main-cadastrar-informacoes-editar-categoria-container-campos-esquerda">
                                        <div className="main-cadastrar-informacoes-editar-categoria-container-campos-esquerda-nome">
                                            <p>NOME DA CATEGORIA</p>
                                            <input type="text" onChange={(e) => setCategoria(e.target.value)} value={categoria}/>
                                        </div>                           
                                    </div>

                                </div>

                            </div>
                            <div className="main-cadastrar-informacoes-editar-categoria-container-msg">
                            {mensagemAviso&&
                                <Mensagem tipo={tipo} msg={mensagemAviso} />
                            }
                            </div>
                            <div className="main-cadastrar-informacoes-editar-categoria-container-btn">
                                <button onClick={cadastrarCategoria}>CADASTRAR</button>
                            </div>

                        </div>
                    </>
                )}

                {modelFraquezas&&(
                <>
                    <div className="main-cadastrar-informacoes-editar-categoria-container-fechar" onClick={abrirModelFraquezas}>
                        <p>X</p>
                    </div>
                    <div className="main-cadastrar-informacoes-editar-categoria-container">
                        <div className="main-cadastrar-informacoes-editar-categoria-container-enfeite">
                            <div className="main-cadastrar-informacoes-editar-categoria-container-enfeite-traco-maior"></div>
                            <div className="main-cadastrar-informacoes-editar-categoria-container-enfeite-logo"></div>
                            <div className="main-cadastrar-informacoes-editar-categoria-container-enfeite-traco1"></div>
                            <div className="main-cadastrar-informacoes-editar-categoria-container-enfeite-traco2"></div>
                            <div className="main-cadastrar-informacoes-editar-categoria-container-enfeite-titulo">
                                <h2>CADASTRAR FRAQUEZA</h2>
                            </div>
                        </div>

                        <div className="main-cadastrar-informacoes-editar-categoria-container-campos">
                            <div className="main-cadastrar-informacoes-editar-categoria-container-campos-texto">
                                <p>INSIRA AS INFORMAÇÕES</p>
                            </div>

                            <div className="main-cadastrar-informacoes-editar-categoria-container-campos-container">
                                <div className="main-cadastrar-informacoes-editar-categoria-container-campos-esquerda">
                                    <div className="main-cadastrar-informacoes-editar-categoria-container-campos-esquerda-nome">
                                        <p>NOME DA FRAQUEZA</p>
                                        <input type="text" onChange={(e) => setFraqueza(e.target.value)} value={fraqueza}/>
                                    </div>

                                    <div className="main-cadastrar-informacoes-editar-categoria-container-campos-esquerda-imagem">
                                        <p>IMAGEM</p>
                                        <input type="text" onChange={(e) => setImagemFraqueza(e.target.value)} value={imagem_fraqueza}/>
                                    </div>

                                </div>

                            </div>

                        </div>
                        <div className="main-cadastrar-informacoes-editar-categoria-container-msg">
                        {mensagemAviso&&
                                <Mensagem tipo={tipo} msg={mensagemAviso}/>
                            }
                        </div>
                        <div className="main-cadastrar-informacoes-editar-categoria-container-btn">
                            <button onClick={cadastrarFraqueza}>CADASTRAR</button>
                        </div>

                    </div>
                </>
                )}


                {modelHabilidades&&(
                <>
                    <div className="main-cadastrar-informacoes-editar-categoria-container-fechar" onClick={abrirModelHabilidades}>
                        <p>X</p>
                    </div>
                    <div className="main-cadastrar-informacoes-editar-categoria-container">
                        <div className="main-cadastrar-informacoes-editar-categoria-container-enfeite">
                            <div className="main-cadastrar-informacoes-editar-categoria-container-enfeite-traco-maior"></div>
                            <div className="main-cadastrar-informacoes-editar-categoria-container-enfeite-logo"></div>
                            <div className="main-cadastrar-informacoes-editar-categoria-container-enfeite-traco1"></div>
                            <div className="main-cadastrar-informacoes-editar-categoria-container-enfeite-traco2"></div>
                            <div className="main-cadastrar-informacoes-editar-categoria-container-enfeite-titulo">
                                <h2>CADASTRAR HABILIDADE</h2>
                            </div>
                        </div>

                        <div className="main-cadastrar-informacoes-editar-categoria-container-campos">
                            <div className="main-cadastrar-informacoes-editar-categoria-container-campos-texto">
                                <p>INSIRA AS INFORMAÇÕES</p>
                            </div>

                            <div className="main-cadastrar-informacoes-editar-categoria-container-campos-container">
                                <div className="main-cadastrar-informacoes-editar-categoria-container-campos-esquerda">
                                    <div className="main-cadastrar-informacoes-editar-categoria-container-campos-esquerda-nome">
                                        <p>NOME DA HABILIDADE</p>
                                        <input type="text" onChange={(e) => setHabilidade(e.target.value)} value={habilidade}/>
                                    </div>

                                </div>
                                <div className="main-cadastrar-informacoes-editar-categoria-container-campos-direita">
                                    <div className="main-cadastrar-informacoes-editar-categoria-container-campos-esquerda-descricao">
                                            <p>DESCRIÇÃO</p>
                                            <textarea type="text" onChange={(e) => setDescricaoHabilidade(e.target.value)} value={descricaoHabilidade}/>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="main-cadastrar-informacoes-editar-categoria-container-msg">
                                {mensagemAviso&&
                                <Mensagem tipo={tipo} msg={mensagemAviso}/>
                                }
                        </div>
                                

                        <div className="main-cadastrar-informacoes-editar-categoria-container-btn">
                            <button onClick={cadastrarHabilidade}>CADASTRAR</button>
                        </div>

                    </div>
                </>
                )}

                {modelTipagem&&(
                <>
                    <div className="main-cadastrar-informacoes-editar-categoria-container-fechar" onClick={abrirModelTipagem}>
                        <p>X</p>
                    </div>
                    <div className="main-cadastrar-informacoes-editar-categoria-container">
                        <div className="main-cadastrar-informacoes-editar-categoria-container-enfeite">
                            <div className="main-cadastrar-informacoes-editar-categoria-container-enfeite-traco-maior"></div>
                            <div className="main-cadastrar-informacoes-editar-categoria-container-enfeite-logo"></div>
                            <div className="main-cadastrar-informacoes-editar-categoria-container-enfeite-traco1"></div>
                            <div className="main-cadastrar-informacoes-editar-categoria-container-enfeite-traco2"></div>
                            <div className="main-cadastrar-informacoes-editar-categoria-container-enfeite-titulo">
                                <h2>CADASTRAR TIPAGEM</h2>
                            </div>
                        </div>

                        <div className="main-cadastrar-informacoes-editar-categoria-container-campos">
                            <div className="main-cadastrar-informacoes-editar-categoria-container-campos-texto">
                                <p>INSIRA AS INFORMAÇÕES</p>
                            </div>

                            <div className="main-cadastrar-informacoes-editar-categoria-container-campos-container">
                                <div className="main-cadastrar-informacoes-editar-categoria-container-campos-esquerda">
                                    <div className="main-cadastrar-informacoes-editar-categoria-container-campos-esquerda-nome">
                                        <p>NOME DA TIPAGEM</p>
                                        <input type="text" onChange={(e) => setTipagem(e.target.value)} value={tipagem}/>
                                    </div>

                                    <div className="main-cadastrar-informacoes-editar-categoria-container-campos-esquerda-imagem">
                                        <p>IMAGEM</p>
                                        <input type="text" onChange={(e) => setImagemTipagem(e.target.value)} value={imagem_tipagem}/>
                                    </div>

                                </div>
                              
                            </div>

                        </div>
                        <div className="main-cadastrar-informacoes-editar-categoria-container-msg">

                            {mensagemAviso&&
                                <Mensagem tipo={tipo} msg={mensagemAviso}/>
                            }

                        </div>
                        <div className="main-cadastrar-informacoes-editar-categoria-container-btn">
                            <button onClick={cadastrarTipagem}>CADASTRAR</button>
                        </div>

                    </div>
                </>
                )}

            </main>

        </>
    )
}