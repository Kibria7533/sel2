
import React, { Component } from 'react';
import AuthContainer from '../AuthContainer/index'

class index extends Component {
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
   
    render() {
        return (<>
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
          <AuthContainer showModal={this.state.showModal} mode={this.state.mode} close={this.close} />
          </>
        );
    }
}
export default index;