
import './App.css';
import Navbar from './Navbar.js';
import Profile from './Profile.js';
import Home from './Home';
import Cart from './add-cart';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <div className="app-comoponent">         
            <Switch>
              <Route path='/Home.js'>
                <Home />
              </Route>
              <Route path='/Profile.js'>
                <Profile />
              </Route>
              <Route path='/add-cart.js'>
                <Cart />
              </Route>
            </Switch>                      
          </div> 
      
      </div>
    </Router>
  );
}

export default App;
