import React from 'react';
import style from './Button.module.scss';

class Button extends React.Component<{texto: String}>{
    render(){
        //const color = 'gray';
        //pode ser da maneira acima ou abaixo também, para definir o valor de algum estilo
        //const backgroundColor = 'red'
        const estaAtivo = false;
        const styles = {backgroundColor: estaAtivo ? "green" : "red"}
        return(
            //<button style={styles}>Botão</button>
            <button className={style.botao}>{this.props.texto}</button>
        )
    }    
}

export default Button