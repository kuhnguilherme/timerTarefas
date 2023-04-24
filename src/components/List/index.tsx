import Item from './Item';
import style from './List.module.scss';

function List(){

    const tarefas = [{
        tarefa: 'React',
        tempo: '02:02:50'
    },{
        tarefa: 'Typescript',
        tempo: '01:01:00'
    },{
        tarefa: 'Nodejs',
        tempo:'05:00:00'
    }]

    return(

        <aside className={style.listaTarefas}>
            <h2>Estudos do Dia</h2>
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