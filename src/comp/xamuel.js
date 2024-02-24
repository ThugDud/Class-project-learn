import Botaoney from "../form/button";
import Caruseu from "./newcomp/Carroseu/caruseu";
import Styled from "./xamuel.module.css";

function Xamuel() {
    return(
        <>
        <Caruseu/>
        <div className={Styled.ninguem}>
            <div className={Styled.asfc}>
                <div className={Styled.casc}>
                    <h1>Formulário de contato</h1>
                    <form className={Styled.form} id="Contato">
                        <input className={Styled.input} type='text' placeholder="Nome completo"></input>
                        <input className={Styled.input} type= 'tel' placeholder="CPF" minLength={11} maxLength={11}></input>
                        <input className={Styled.input} type= 'tel' placeholder="Telefone"></input>
                        <input className={Styled.input} type= 'email' placeholder="E-mail"></input>
                        <textarea className={Styled.inpu2} placeholder="Escreva sua mensagem"/>
                    </form>                
                    <Botaoney/>
                </div>
            </div>
        </div>
        </>
    );
}

export default Xamuel