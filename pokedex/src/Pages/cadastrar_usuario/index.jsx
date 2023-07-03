import { NavLink } from "react-router-dom"
import Header from "../../Components/Header"
import "./style.css"
import {BsPersonCircle, BsFillPersonFill, BsEyeFill, BsEyeSlashFill} from 'react-icons/bs'
import { useState } from "react"
import { api } from "../../Services/API"

export const CadastrarUsuario = () =>{
    const [mostrarSenha, setMostrarSenha] = useState(<BsEyeSlashFill/>)
    const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(<BsEyeSlashFill/>)
    const [tipoSenha, setTipoSenha] = useState('password')
    const [tipoConfirmarSenha, setTipoConfirmarSenha] = useState('password')
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmSenha, setConfirmSenha] = useState('')

    const cadastrarUsuario = async () => {
        const data = {
            nome,
            senha,
            confirmSenha
        }

        try {
            const res = await api.post("/cadastro/usuario", data)
            console.log(res.data)
            
        } catch (error) {
            console.log(error)
        }
    }

    const verSenha = () => {
        if (tipoSenha === 'password'){
            setMostrarSenha(<BsEyeFill/>)
            setTipoSenha('text')
        }else{
            setMostrarSenha(<BsEyeSlashFill/>)
            setTipoSenha('password')
        }
    }

    const verConfirmarSenha = () => {
        if (tipoConfirmarSenha === 'password'){
            setMostrarConfirmarSenha(<BsEyeFill/>)
            setTipoConfirmarSenha('text')
        }else{
            setMostrarConfirmarSenha(<BsEyeSlashFill/>)
            setTipoConfirmarSenha('password')
        }
    }


    return(
        <div>
            <Header/>
            <main className="main-cadastrar-usuario">
                <div className="main-informacoes-pokemons-logo"></div>
                <div className="main-informacoes-pokemons-bolinhas1 bolinhas"></div>
                <div className="main-informacoes-pokemons-bolinhas2 bolinhas"></div>
                <div className="main-cadastrar-usuario-conteiner">
                    <div className="main-cadastrar-usuario-conteiner-vermelho">
                        <div className="main-cadastrar-usuario-conteiner-vermelho-container">
                            <div className="main-cadastrar-usuario-conteiner-vermelho-container-logo"></div>
                            <div className="main-cadastrar-usuario-conteiner-vermelho-container-titulo">
                            <h3>Cadastre-se para adicionar novos pokemons!</h3>
                            </div>
                            <div className="main-cadastrar-usuario-conteiner-vermelho-container-texto">
                            <p>Já possui uma conta?</p>
                            </div>
                            <div className="main-cadastrar-usuario-conteiner-vermelho-butao">
                                <NavLink to="/Logar_usuario">Logar</NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="main-cadastrar-usuario-conteiner-branco">

                        <div className="main-cadastrar-usuario-conteiner-informacoes">
                            <div className="main-cadastrar-usuario-conteiner-informacoes-titulo">
                                <h2>Cadastrar</h2>    
                            </div> 

                            <div className="main-cadastrar-usuario-conteiner-informacoes-container">
                                <div className="main-cadastrar-usuario-conteiner-informacoes-container-img"><BsPersonCircle/></div>
                                <div className="main-cadastrar-usuario-conteiner-informacoes-container-formulario">

                                    <div className="main-cadastrar-usuario-conteiner-informacoes-container-formulario-nome">
                                        <div className="main-cadastrar-usuario-conteiner-informacoes-container-formulario-nome-titulo">
                                            <p>Nome</p>

                                            <div className="main-cadastrar-usuario-conteiner-informacoes-container-formulario-nome-titulo-container">
                                                <div className="main-cadastrar-usuario-conteiner-informacoes-container-formulario-nome-titulo-container-svg"><BsFillPersonFill/></div>
                                                <input type="text" onChange={(e) => setNome(e.target.value)}/>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="main-cadastrar-usuario-conteiner-informacoes-container-formulario-senha">

                                        <div className="main-cadastrar-usuario-conteiner-informacoes-container-formulario-senha-titulo">
                                            <p>Senha</p>

                                            <div className="main-cadastrar-usuario-conteiner-informacoes-container-formulario-senha-titulo-container">

                                                <div className="main-cadastrar-usuario-conteiner-informacoes-container-formulario-senha-titulo-container-svg" onClick={verSenha}>{mostrarSenha}</div>
                                                <input type={tipoSenha} onChange={(e) => setSenha(e.target.value)}/>

                                            </div>


                                        </div>

                                    </div>
                                    <div className="main-cadastrar-usuario-conteiner-informacoes-container-formulario-confirmasenha">
                                        

                                        <div className="main-cadastrar-usuario-conteiner-informacoes-container-formulario-confirmasenha-titulo">
                                            <p>Confirmar Senha</p>

                                            <div className="main-cadastrar-usuario-conteiner-informacoes-container-formulario-confirmasenha-titulo-container">

                                                <div className="main-cadastrar-usuario-conteiner-informacoes-container-formulario-confirmasenha-titulo-container-svg" onClick={verConfirmarSenha}>{mostrarConfirmarSenha}</div>
                                                <input type={tipoConfirmarSenha} onChange={(e) => setConfirmSenha(e.target.value)}/>

                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div className="main-cadastrar-usuario-conteiner-informacoes-container-bnt">

                                    <button onClick={cadastrarUsuario}>Cadastrar</button>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    )
}
