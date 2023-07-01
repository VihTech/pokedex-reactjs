import Header from '../../Components/Header'
import './style.css'
import { NavLink } from 'react-router-dom'
import {BsPersonCircle, BsFillPersonFill, BsEyeFill, BsEyeSlashFill} from 'react-icons/bs'
import { useState } from 'react'

export const LogarUsuario = () => {
    const [mostrar, setMostrar] = useState(false)
    const [mostrarSenha, setMostrarSenha] = useState(<BsEyeSlashFill/>)
    const [tipoSenha, setTipoSenha] = useState('password')

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
                            <div className="main-logar-usuario-container-vermelho-container-texto">
                            <p>Não possui uma conta?</p>
                            </div>
                            <div className="main-logar-usuario-container-vermelho-butao">
                                <NavLink to="/Cadastrar_usuario">Cadastrar</NavLink>
                            </div>
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
                                                <input type="text" />
                                            </div>

                                        </div>
                                    </div>

                                    <div className="main-logar-usuario-container-informacoes-container-formulario-senha">

                                        <div className="main-logar-usuario-container-informacoes-container-formulario-senha-titulo">
                                            <p>Senha</p>

                                            <div className="main-logar-usuario-container-informacoes-container-formulario-senha-titulo-container">

                                                <div className="main-logar-usuario-container-informacoes-container-formulario-senha-titulo-container-svg" onClick={verASenha}>{mostrarSenha}</div>
                                                <input type={tipoSenha} />

                                            </div>


                                        </div>

                                    </div>

                                </div>
                                <div className="main-logar-usuario-container-informacoes-container-bnt">

                                    <button>Logar</button>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </main>
        </>
    )
}