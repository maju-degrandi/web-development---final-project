import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Routes from "./Routes";
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
        <Header />
        <main>
          <Routes />
        </main>
        <Footer/>
    </Router>
  );
}

export default App;