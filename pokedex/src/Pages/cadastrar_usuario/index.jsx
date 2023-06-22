import Header from "../../Components/Header"
import "./style.css"
import {BsPersonCircle, BsFillPersonFill, BsEyeFill, BsEyeSlashFill} from 'react-icons/bs'

export const LogarUsuario = () =>{
    return(
        <div>
            <Header/>
            <main className="main-cadastrar-usuario">
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
                                <button>Logar</button>
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
                                                <input type="text" />
                                            </div>

                                        </div>
                                    </div>

                                    <div className="main-cadastrar-usuario-conteiner-informacoes-container-formulario-senha">

                                        <div className="main-cadastrar-usuario-conteiner-informacoes-container-formulario-senha-titulo">
                                            <p>Senha</p>

                                            <div className="main-cadastrar-usuario-conteiner-informacoes-container-formulario-senha-titulo-container">

                                                <div className="main-cadastrar-usuario-conteiner-informacoes-container-formulario-senha-titulo-container-svg"><BsEyeSlashFill/></div>
                                                <input type="password" />

                                            </div>


                                        </div>

                                    </div>
                                    <div className="main-cadastrar-usuario-conteiner-informacoes-container-formulario-confirmasenha">
                                        

                                        <div className="main-cadastrar-usuario-conteiner-informacoes-container-formulario-confirmasenha-titulo">
                                            <p>Confirmar Senha</p>

                                            <div className="main-cadastrar-usuario-conteiner-informacoes-container-formulario-confirmasenha-titulo-container">

                                                <div className="main-cadastrar-usuario-conteiner-informacoes-container-formulario-confirmasenha-titulo-container-svg"><BsEyeSlashFill/></div>
                                                <input type="password" />

                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div className="main-cadastrar-usuario-conteiner-informacoes-container-bnt">

                                    <button>Cadastrar</button>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    )
}
