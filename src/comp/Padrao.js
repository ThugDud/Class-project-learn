import { Link, Outlet } from "react-router-dom"
import Styled from './padrao.module.css'

function Padrao() {
    return (
        <>
            <div className={Styled.cabeca}>
                <div className={Styled.diveee}>
                    <img src="\images\1cf2702f9b8d0751c063ab1c35d6ac7b.gif" alt="fulecu" className={Styled.abc} />
                </div>
                <div className={Styled.osmose}>
                    <Link to={"/"}> <h1 className={Styled.abcs}>INICIO</h1></Link>
                    <Link to={"/Destino/"}><h1 className={Styled.abcs}>DESTINOS</h1> </Link>
                    <Link to={"/Contato/"}><h1 className={Styled.abcs}>POKEMON</h1></Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Padrao