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
      <div id="container">
      <div class="header">
        <div class="tie">
          <div class="header_container">
            <div class="logo">
              <img src="/catchop.svg" alt="" class="resize" />
            </div>
            <div class="menus">
              <div class="menus_container">
                <span>home</span>
                <span>feature</span>
                <span>blog</span>
                <span>about</span>
              </div>
            </div>
            <div class="extra_menus">
              <span>pricing</span>
              <span onClick={()=>this.open("login")} >login</span>
              <span onClick={()=>this.open("register")} class="sign_up">sign up</span>
            </div>
          </div>
        </div>
      </div>
      <AuthContainer showModal={this.state.showModal} mode={this.state.mode} close={this.close}/>
      <section class="landing">
        <div class="tie">
          <div class="landing_container">
            <div class="landing_part_A">
              <div class="img_box">
                <img
                  src="/177006466_834284373876838_8645088699403209076_n.png"
                  alt="img name"
                />
              </div>
              <h2>we can help you achieve<br />your target growth faster!</h2>
            </div>
            <div class="landing_part_B">
              <p>
                Our tools allow you to grow quickly and analyze your store
                interactively.
              </p>
              <div class="play"></div>
            </div>
          </div>
        </div>
      </section>
      <div class="empty_place"></div>
      <footer class="footer">
        <div class="tie">
          <div class="footer_container">
            <div class="icon_box">
              <i class="fa fa-facebook" aria-hidden="true"></i>
              <i class="fa fa-instagram" aria-hidden="true"></i>
              <i class="fa fa-twitter" aria-hidden="true"></i>
              <i class="fa fa-quora" aria-hidden="true"></i>
              <i class="fa fa-youtube-play" aria-hidden="true"></i>
            </div>
            <div class="img_box">
              <img src="/catchop.svg" alt="" />
            </div>
            <hr />
            <div class="links">
              <span>about us</span> <span>cookie policy</span>
              <span>data policy</span> <span>privacy policy</span>
              <span>terms of use</span> <span>contact us</span>
            </div>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum,
              dignissimos eius excepturi quisquam quia eaque eum inventore
              quibusdam accusamus <br />ad error saepe optio dolores dolore
              alias exercitationem at sed. Distinctio. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Voluptatibus, minima?
            </p>
          </div>
        </div>
      </footer>
    </div>
    );

  }

  
}

export default App;
