import { useState } from 'react';
import Item from './Item';
import style from './List.module.scss';

function List(){

    const [tarefas, setTarefas] = useState([{
        tarefa: 'React',
        tempo: '02:02:50'
    },{
        tarefa: 'Typescript',
        tempo: '01:01:00'
    },{
        tarefa: 'Nodejs',
        tempo:'05:00:00'
    }])

    return(
        <aside className={style.listaTarefas}>
            <h2 onClick={() => {setTarefas([...tarefas, {tarefa: "Estudar estado", tempo: "05:00:00"}])}}>Lista de Tarefas:</h2>
            
            <ul>
            {tarefas.map((item,index) => (
                <Item 
                    key={index}
                    {...item}
                />
            ))}
            </ul>
        </aside>
    )
}

export default List;