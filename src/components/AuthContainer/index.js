import React , { Component }from 'react';
import { render } from 'react-dom';

import LoginForm from './LoginForm.js';
import CreateNewAccount from './CreateNewAccount.js';

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

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};


class index extends Component {
  constructor(props){
    super(props);
    
  }



  render(){
    // const isLoggedIn = this.state.isLoggedIn;

    return (
      <div style={styles}>
        <LoginForm showModal={this.props.showModal} mode={this.props.mode} onClose = {this.props.close} />
     </div>
    );
  }
}

export default index;
