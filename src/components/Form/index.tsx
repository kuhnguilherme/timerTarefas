import React from 'react';
import Button from '../Button';
import style from './Form.module.scss';

class Form extends React.Component {

    render() {
        
        return(
            <form className={style.novaTarefa}>
            <div className={style.inputContainer}> <label htmlFor="tarefa">Adicione uma Tarefa</label> <input placeholder="Nome da Tarefa" name="tarefa" id="tarefa" type="text" required/> </div>
            <div className={style.inputContainer}> <label htmlFor="tempo">Tempo</label> <input step="1" min="00:00:00" max="01:30:00" name="tempo" id="tempo" type="time" required/> </div>
            <Button texto="Adicionar"/>
            </form>
        )
    }

}

export default Form;