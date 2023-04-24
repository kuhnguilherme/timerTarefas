import Form from '../components/Form';
import List from '../components/List';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      
      <List />
      <Form />
      
    </div>
  );
}

export default App;