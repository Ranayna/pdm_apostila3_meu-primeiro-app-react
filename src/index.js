import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

const App = () => {
    //exemplo que mostra a associação a uma constante que é referenciada pelo nome da constante. 
    const estilosBotao = {marginTop: 12, paddingTop: 8, paddingBottom: 8, 
backgroundColor: 'blueviolet', color: 'white', border: 'none', width: "100%", 
borderRadius: 8};
    //dá para utilizar usando textos simples, como é mostrado abaixo
    const textoDoRotulo = "Nome:";
    //também pode ser utilizado para chamar funções nesse contexto
    const obterTextoDoBotao = () => {
        return "Enviar";
    }
    return(
        <div style={{margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 
12, borderRadius: 8}}>
        {/*referencia pelo nome da constante usando texto simples*/}
        <label className="rotulo" htmlFor="nome" style={{display: 'block', 
marginBottom: 4}}>{textoDoRotulo}</label>
        <input type="text" id="nome" style={{paddingTop: 8, paddingBottom: 8, 
borderStyle: 'hidden',width: '100%', borderRadius: 8, outline: 'none', boxSizing: 
'border-box'}}/>
        {/* referencia pelo nome da constante*/}
        {/* referencia pelo nome da constante, usada nesse caso para referenciar uma função*/}
        <button style={estilosBotao}>{obterTextoDoBotao()}</button>
    </div>
    )
}
ReactDOM.render(
    <App />,
    document.querySelector("#root")
)