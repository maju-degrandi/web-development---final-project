import { Outlet, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Routes from "./Routes";
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
        <Header />
        <Routes/>
        <Footer />
    </Router>
  );
}

export default App;