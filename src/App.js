import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Button } from './components/Button';
import { Item } from './components/Item';

function App() {
  return (
    <>
    <Header/>
    
      <Item id={'123'}/>
    
    <Footer/>
    </>
  );
}

export default App;
