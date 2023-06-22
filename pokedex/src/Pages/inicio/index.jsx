import Header from '../../Components/Header'
import './style.css'
import { api } from '../../Services/API'

const Inicio = () => {

    const teste = async () =>{
        const res = await api.get("/mostrar")
        console.log(res)
    }

    return(
        <div>
            <Header/>
            <main>
                <button onClick={teste}>TESTE</button>
            </main>
        </div>
    )
}

export default Inicio