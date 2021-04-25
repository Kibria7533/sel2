import './App.css';
import React , { Component }from 'react';
import AuthContainer from './components/AuthContainer'
import {useState} from 'react'
import {
  Navbar,
  NavDropdown,
  MenuItem,
  NavItem,
  Nav,
  Popover,
  Tooltip,
  Button,
  Modal,
  OverlayTrigger
} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home'
class App extends Component {

  constructor(){
    super();
    this.state = {
      showModal : false,
      form : '',
      mode:""
    }
  }

  close = () => {
    this.setState ({ showModal: false });
  }



  open = (mode) => {
    this.setState ({ showModal : true,mode});
  }

  render(){
    return (
    <Router>
      <Switch>
        <Route path="/"  exact component={Home}/>
      </Switch>
     </Router>
    );

  }

  
}

export default App;
