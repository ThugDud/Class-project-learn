import { Link } from 'react-router-dom'
import MAAAAA from './futer.module.css'

function Futer() {
    return(
        <div className={MAAAAA.osmose}>
            <div>
                <p>® Seu principal site de viagens</p>
            </div>
            <div className={MAAAAA.its_a_man_if_it_talks_if_it_walks}>
                <Link to={"/"}>Inicio</Link>
                <Link to={"/Contato/"}>Contatos</Link>
                <Link to={"/Destino/"}>Destinos</Link>
            </div>
        </div>
    )
}

export default Futer