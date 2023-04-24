import Cronometer from '../components/Cronometer';
import Form from '../components/Form';
import List from '../components/List';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      
      <List />
      <Form />
      <Cronometer/>
      
    </div>
  );
}

export default App;