import Header from '../../Components/Header'
import './style.css'
import { NavLink } from 'react-router-dom'
import {BsPersonCircle, BsFillPersonFill, BsEyeFill, BsEyeSlashFill} from 'react-icons/bs'
import { useEffect, useState } from 'react'
import { api } from '../../Services/API'
import { loginToken, setarIdUsuario, setarNomeUsuario, setarTipoUsuario, pegarNomeUsuario } from "../../Services/localstorage"
import { Mensagem } from '../../Components/Mensagem'

export const LogarUsuario = () => {
    const [mostrar, setMostrar] = useState(false)
    const [mostrarSenha, setMostrarSenha] = useState(<BsEyeSlashFill/>)
    const [tipoSenha, setTipoSenha] = useState('password')
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const [usuario, setUsuario] = useState('')
    const [mensagemAviso, setMensagemAviso] = useState('')
    const [tipo,setTipomsg] = useState('')

    const pegarUsuario = () => {
        setUsuario(pegarNomeUsuario())
    }

    const logarUsuario = async () => {
        const data = {
            nome,
            senha
        }

        try {
            if(mensagemAviso){
                setTipomsg('')
                setMensagemAviso('')
            }
            const res = await api.post("/login", data)

            if(res.data.status === 400){
                setTipomsg('erro')
                setMensagemAviso(res.data.Mensagem)
                console.log(res.data.Mensagem)
            
            }else{
                setTipomsg('sucesso')
                setMensagemAviso('Logado com sucesso!')
                setNome('')
                setSenha('')
                setarIdUsuario(res.data.usuarioId)
                setarNomeUsuario(res.data.novoUsuario)
                loginToken(res.data.token)
                window.location.href = '/'
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    const verASenha = () => {
        if (mostrar){
            console.log('oi')
            setMostrar(false)
            setMostrarSenha(<BsEyeFill/>)
            setTipoSenha('text')
        }else{
            setMostrar(true)
            setMostrarSenha(<BsEyeSlashFill/>)
            setTipoSenha('password')
        }
    }
    
    useEffect(() => {
        pegarUsuario()
    }, [usuario])

    return(
        <>
            <Header/>
            <main className="main-logar-usuario">
                <div className="main-logar-usuario-triangulo"></div>
                <div className="main-logar-usuario-logo"></div>
                <div className="main-logar-usuario-bolinhas1 bolinhas"></div>
                <div className="main-logar-usuario-bolinhas2 bolinhas"></div>

                <div className="main-logar-usuario-container">
                    <div className="main-logar-usuario-container-vermelho">
                        <div className="main-logar-usuario-container-vermelho-container">
                            <div className="main-logar-usuario-container-vermelho-container-logo"></div>
                            <div className="main-logar-usuario-container-vermelho-container-titulo">
                            <h3>Seja bem vindo(a) de volta!</h3>
                            </div>

                            {usuario !== null?(
                                <>           
                                    <div className="main-logar-usuario-container-vermelho-container-texto">
                                        
                                        <p>Não possui uma conta?</p>
                                    </div>
                                    <div className="main-logar-usuario-container-vermelho-butao">
                                        <NavLink to="/Cadastrar_usuario">Cadastrar</NavLink>
                                    </div>
                                </>
                            ):(
                                <>           
                                    <div className="main-logar-usuario-container-vermelho-container-texto">
                                        
                                        <p>Não possui uma conta?</p>
                                    </div>
                                    <div className="main-logar-usuario-container-vermelho-butao">
                                        <h5 to="/Cadastrar_usuario">Fale com um de nossos colaboradores</h5>

                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="main-logar-usuario-container-branco">
                        <div className="main-logar-usuario-container-informacoes">
                            <div className="main-logar-usuario-container-informacoes-titulo">
                                <h2>Logar</h2>    
                            </div> 

                            <div className="main-logar-usuario-container-informacoes-container">
                                <div className="main-logar-usuario-container-informacoes-container-img"><BsPersonCircle/></div>
                                <div className="main-logar-usuario-container-informacoes-container-formulario">

                                    <div className="main-logar-usuario-container-informacoes-container-formulario-nome">
                                        <div className="main-logar-usuario-container-informacoes-container-formulario-nome-titulo">
                                            <p>Nome</p>

                                            <div className="main-logar-usuario-container-informacoes-container-formulario-nome-titulo-container">
                                                <div className="main-logar-usuario-container-informacoes-container-formulario-nome-titulo-container-svg"><BsFillPersonFill/></div>
                                                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}/>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="main-logar-usuario-container-informacoes-container-formulario-senha">

                                        <div className="main-logar-usuario-container-informacoes-container-formulario-senha-titulo">
                                            <p>Senha</p>

                                            <div className="main-logar-usuario-container-informacoes-container-formulario-senha-titulo-container">

                                                <div className="main-logar-usuario-container-informacoes-container-formulario-senha-titulo-container-svg" onClick={verASenha}>{mostrarSenha}</div>
                                                <input type={tipoSenha} value={senha} onChange={(e) => setSenha(e.target.value)} />

                                            </div>


                                        </div>

                                    </div>

                                </div>
                                <div className="main-logar-usuario-container-informacoes-container-msg">
                                    {mensagemAviso&&
                                        <Mensagem tipo={tipo} msg={mensagemAviso}/>
                                    }
                                    
                                </div>
                                <div className="main-logar-usuario-container-informacoes-container-bnt">
                                    <button onClick={logarUsuario}>Logar</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </main>
        </>
    )
}