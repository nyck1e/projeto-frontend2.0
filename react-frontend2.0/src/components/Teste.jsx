const Teste = ({imagem, titulo, categoria, paragrafo}) => {
    return ( 
        <div style={{border: "1px solid black"}}>
            <img src={imagem} alt={titulo}/>
            <h2>{titulo}</h2>
            <h6>{categoria}</h6>
            <p>{paragrafo}</p>
        </div>
     );
}
 
export default Teste;