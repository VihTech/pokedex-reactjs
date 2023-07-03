import Header from "../../Components/Header"
import "./style.css"

export const CadastrarEvolucoes = () => {
    return(
        <>
            <Header/>
            <main className="main-cadastrar-evolucoes">
                <div className="main-cadastrar-evolucoes-logo"></div>
                <div className="main-cadastrar-evolucoes-bolinhas1 bolinhas"></div>
                <div className="main-cadastrar-evolucoes-bolinhas2 bolinhas"></div>

                <div className="main-cadastrar-evolucoes-container">
                    <div className="main-cadastrar-evolucoes-container-enfeite">
                        <div className="main-cadastrar-evolucoes-container-enfeite-traco-maior"></div>
                        <div className="main-cadastrar-evolucoes-container-enfeite-logo"></div>
                        <div className="main-cadastrar-evolucoes-container-enfeite-traco1"></div>
                        <div className="main-cadastrar-evolucoes-container-enfeite-traco2"></div>
                        <div className="main-cadastrar-evolucoes-container-enfeite-titulo">
                            <h2>CADASTRAR EVOLUÇÕES</h2>
                        </div>
                    </div>

                    <div className="main-cadastrar-evolucoes-container-cadastro"></div>
                </div>
            </main>
        
        </>
    )
}