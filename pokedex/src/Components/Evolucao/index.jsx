import "./style.css"

export const EvolicaoContainer = (props) => {
    const acao = props.onClick 
    return(
        <div className="evolucao-container">
            <div className="evolucao-container-branco" onClick={acao}>
                <div className="evolucao-container-branco-vermelho">
                    {!props.imagem?(
                        <></>
                    ):(
                        <img src={props.imagem} alt="" />

                    )}
                </div>
            </div>
        </div>
    )
}