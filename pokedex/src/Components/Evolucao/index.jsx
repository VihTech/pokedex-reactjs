import "./style.css"

export const EvolicaoContainer = (props) => {
    return(
        <div className="evolucao-container">
            <div className="evolucao-container-branco">
                <div className="evolucao-container-branco-vermelho">
                    {/* <img src={props.imagem} alt="" /> */}
                </div>
                <div className="evolucao-container-branco-btn">
                    <button>+</button>
                </div>
            </div>
        </div>
    )
}