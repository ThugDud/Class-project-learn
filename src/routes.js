import { BrowserRouter, Route, Routes } from "react-router-dom";
import Padrao from "./comp/Padrao";
import Xamuel from "./comp/xamuel";
import Contato from "./comp/Contato";
import Dixtino from "./comp/Dixtino";

function Approutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Padrao/>}>
                    <Route element={<Xamuel/>} index></Route>
                    <Route path="/Contato/" element={<Contato/>}></Route>
                    <Route path="/Destino/" element={<Dixtino/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Approutes