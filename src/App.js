import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Button } from './components/Button';
import { Item } from './components/Item';

function App() {
  const img = 'https://cactariohorst.com.br/images/resize/800/null/0005916.jpg';
  return (
    <>
    <Item 
      src={img} 
      title="ECHEVERIA" 
      desc="'Perle von Nurnberg' is a beautiful evergreen gray succulent that turns pink and purple under full sun. It has pink flowers with yellow interiors that bloom in the summer.
            \nIf you are searching for an uncomplaining plant with cherubic appeal and beautiful form and color, look no further than Perle von Nurnberg Echeveria. This little succulent produces pups and will eventually grow as big as a dinner plate with good light and care. Warm region gardeners can add this plant to their landscape, while the rest of us should enjoy them in the summer and bring them indoors for winter." 
      price="7,00"/>
    {/* <Header/>
    
    
    
    <Footer/> */}
    </>
  );
}

export default App;
