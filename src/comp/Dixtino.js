import Morte from './Dixtino.module.css'

function Dixtino() {
    const destinosPraias = [
        {
            nome: "Praias de Bora Bora",
            descricao: "Explore as praias de areia branca e as águas cristalinas de Bora Bora, um paraíso tropical no Pacífico Sul.",
            resort: "Bora Bora Nui Resort & Spa",
            preco: "$5,000 por pessoa",
            pic: "https://www.costacruzeiros.com/content/dam/costa/costa-magazine/articles-magazine/beaches/praias-em-bora-bora/bora-bora_m.jpg.image.694.390.low.jpg"
        },
        
        {
            nome: "Safári na África do Sul",
            descricao: "Embarque em uma aventura de safári na África do Sul e veja a majestosa vida selvagem africana de perto.",
            resort: "Sabi Sabi Private Game Reserve",
            preco: "$7,500 por pessoa",
            pic: "https://content.skyscnr.com/m/1444a77a4f004f9b/original/GettyImages-105286198.jpg?crop=1224px:647px&quality=100&position=attention"
        },
        
        {
            nome: "Cruzeiro pelas Ilhas Gregas",
            descricao: "Descubra a beleza das ilhas gregas em um cruzeiro luxuoso, visitando Santorini, Mykonos e Creta.",
            resort: "Cruzeiro Celestial",
            preco: "$3,800 por pessoa",
            pic: "https://magazine.zarpo.com.br/wp-content/uploads/2019/02/Zarpo-Magazine-Ilhas-Gregas-Capa-770x450.jpg"
        },
        
        {
            nome: "Aventura na Amazônia",
            descricao: "Explore a selva amazônica, conheça tribos indígenas e observe a vida selvagem única deste ecossistema incrível.",
            resort: "Amazon Eco Lodge",
            preco: "$4,200 por pessoa",
            pic: "https://www.themoviedb.org/t/p/w500/1eWXD2818d5VVHhayLIOvyTI9wy.jpg"
        },
        
        {
            nome: "Férias nas Maldivas",
            descricao: "Relaxe em bangalôs sobre a água e aproveite as águas azuis cristalinas das Maldivas.",
            resort: "Maldives Paradise Resort",
            preco: "$6,500 por pessoa",
            pic: "https://www.ofuxico.com.br/img/galeria/2020/11/lua-de-mel-maldivas_445130.jpg"
        },
        
        {
            nome: "Expedição ao Everest",
            descricao: "Desafie-se escalando o Monte Everest e testemunhe as vistas panorâmicas do topo do mundo.",
            resort: "Base Camp Everest",
            preco: "$25,000 por pessoa",
            pic: "https://altamontanha.com/wp-content/uploads/2021/06/wikimedia.jpg"
        },
        
        {
            nome: "Viagem ao Deserto do Saara",
            descricao: "Aventure-se no deserto do Saara, passe a noite em tendas tradicionais e aprecie o pôr do sol inesquecível.",
            resort: "Sahara Desert Camp",
            preco: "$2,800 por pessoa",
            pic: "https://i2.wp.com/casalwanderlust.com.br/wp-content/uploads/2017/12/Deserto-do-Saara-tour.jpg?resize=670%2C412"
        },
        
        {
            nome: "Cultura no Japão",
            descricao: "Explore a rica cultura japonesa, visite templos antigos e experimente a culinária local única.",
            resort: "Ryokan Traditional Inn",
            preco: "$3,600 por pessoa",
            pic: "https://images.ctfassets.net/szez98lehkfm/500R2fgLBXH5OITrSSAVIi/c7c48970087dfc4dc4e16dcc47718e68/MyIC_Inline_30608"
        },
        
        {
            nome: "Turismo na Islândia",
            descricao: "Descubra as maravilhas naturais da Islândia, incluindo cachoeiras, gêiseres e praias de areia negra.",
            resort: "Iceland Adventure Lodge",
            preco: "$4,000 por pessoa",
            pic: "https://assets-cdn.kangaroo.com.br/images/islandia/pacote-islandia-blue-lagoon.jpg"
        },
        
        {
            nome: "Férias no Caribe",
            descricao: "Relaxe em praias de areia branca e águas turquesas no coração do Caribe, desfrutando do sol e das atividades aquáticas.",
            resort: "Caribbean Paradise Resort",
            preco: "$3,200 por pessoa",
            pic: "https://mundodeviagens.com/wp-content/uploads/2019/05/ferias-num-cruzeiro-pelo-caribe.jpg"
        }        
    ];

    return (
        <div className={Morte.entire}>
            <br/>
            <br/>
            <h1>Destinos de Praias e Resorts</h1>
            <br/>
            <ul className={Morte.lili}>
                {destinosPraias.map((destino, index) => (
                    <li key={index} className={Morte.lista}>
                        <div className={Morte.diveee}>
                            <img className={Morte.imga} src={destino.pic} alt={destino.nome}></img>
                        </div>
                        <h2>{destino.nome}</h2>
                        <p>Descrição: {destino.descricao}</p>
                        <p>Resort: {destino.resort}</p>
                        <p>Preço: {destino.preco}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dixtino;

//{
//    nome: ,
//    descricao: ,
//    resort: ,
//    preco: ,
//    pic: ,
//},