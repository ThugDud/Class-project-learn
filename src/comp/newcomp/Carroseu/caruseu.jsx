import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Styled from './caruseu.module.css';

function Caruseu(){
    return(
        <Carousel infiniteLoop={true} showThumbs={false} showStatus={false}>
            <div>
                <img className={Styled.imge} src="images\praia1.jpg" alt="praia1"></img>
            </div>
            <div>
                <img className={Styled.imge} src="images\praia2.jpg" alt="praia2"></img>
            </div>
            <div>
                <img className={Styled.imge} src="images\praia3.jpg" alt="praia3"></img>
            </div>
            <div>
                <img className={Styled.imge} src="images\buser_buser_image_632.jpeg" alt="buser"></img>
            </div>
            <div>
                <img className={Styled.imge} src="images\9.-Genipabu-Extremoz-RN.jpg" alt="Genipabu"></img>
            </div>
        </Carousel>
    )
}

export default Caruseu;