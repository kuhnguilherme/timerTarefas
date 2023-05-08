import React from 'react';
import Button from '../Button';
import style from './Form.module.scss';

class Form extends React.Component {

    state = {

        tarefa: "--" ,
        tempo: "00:00"

    }

    adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        console.log('state: ', this.state);
    }

    render() {
        
        return(
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
            <div className={style.inputContainer}> <label htmlFor="tarefa">Adicione uma Tarefa</label> <input placeholder="Nome da Tarefa" value={this.state.tarefa} name="tarefa" onChange={evento => this.setState({ ...this.state, tarefa:evento.target.value})}
 id="tarefa" type="text" required/> </div>
            <div className={style.inputContainer}> <label htmlFor="tempo">Tempo</label> <input step="1" min="00:00:00" max="01:30:00" value={this.state.tempo} onChange={evento => this.setState({ ...this.state, tempo: evento.target.value})}
 name="tempo" id="tempo" type="time" required/> </div>
            <Button texto="Adicionar"/>
            </form>
        )
    }

}

export default Form;