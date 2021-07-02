
import './App.css';
import Home from './Home';
import Seller_acc from './Seller_acc';
import Buyer_acc from './Buyer_acc';
import Login from './Login';
import Seller_page from './Seller_page';

import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faApple} from '@fortawesome/free-brands-svg-icons'
import {faGoogle} from '@fortawesome/free-brands-svg-icons'
import {faMicrosoft} from '@fortawesome/free-brands-svg-icons'

import { BrowserRouter as Router , Route} from 'react-router-dom';
library.add(fab,faApple,faGoogle,faMicrosoft)







function App() {
  return (
    <Router>
        <Route exact path = "/" component={Home}/>
        <Route path = "/Seller_acc" component = {Seller_acc} />
        <Route path = "/Buyer_acc"  component = {Buyer_acc}/>
        <Route path = "/Login" component = {Login}/>
        <Route path = "/Seller_page" component = {Seller_page}/>



    </Router>

  
 
  );
}

export default App;
