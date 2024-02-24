import styled from "./button.module.css";
export default function Botaoney() {
    function alerta() {
        alert("Enviado com sucesso");
    }
    return(
        <button onClick={alerta} className={styled.neymar}>Enviar</button>
    );
}