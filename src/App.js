import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';


import { useSelector } from 'react-redux';
import Details from './pages/Details';

function App() {
  const color = useSelector((state) => state.color.value);


  return (    
    <Router>
      <div id="App" className={color ? 'light' : 'dark'}>
        <NavBar />      
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/details" component={Details} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
