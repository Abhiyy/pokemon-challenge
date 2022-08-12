import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router} from 'react-router-dom';
import Layout from './components/Layout';


function App() {
 
  return (
    <Router>
    <Layout />
    </Router>
  );
}

export default App;
