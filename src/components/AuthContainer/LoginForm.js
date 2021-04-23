import React, { Component } from "react";
import axios from "axios"
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
} from "react-bootstrap";

import CreateNewAccount from "./CreateNewAccount";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      smShow: false,
      username:"",
      email: "",
      password: "",
      confirm_password:"",
      error:false,
      mode: "login"
    };
  }

  setMode = mode => {
    this.setState({
      mode
    });
  };
  componentDidUpdate(prevProps) {
    if (prevProps.showModal !== this.props.showModal) {
      console.log('ki',this.props.showModal)
      this.setState({mode:this.props.mode,showModal:this.props.showModal,error:false})
      
    }
  }

  renderForgot = () => {
    return(
      <div>
        <p>inside of forgot! :) </p>
        <a
          href="#"
          onClick={e => {
            e.preventDefault();
            this.setMode("login");
          }}
        >
          Back to login
        </a>
      </div>
    );
  };

  onChange=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    this.setState({[name]:value})
  }

register=async(e)=>{
  e.preventDefault();
  const {username,email,password,confirm_password}=this.state;
await axios.post('https://catchops.herokuapp.com/api/register/',{username,email,password,password2:confirm_password}, {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
}).then(res=>{
  console.log(res)
   alert('You have saccessfully registered')
   this.setState({username:"",email:"",showModal:false})
}).catch(err=>{
  this.setState({username:"",email:"",error:true})
  console.log(err)
})
}

login=async(e)=>{
  e.preventDefault();
  const {email,password}=this.state;
await axios.post('https://catchops.herokuapp.com/api/login/',{"username":email,password}, {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
}).then(res=>{
  console.log(res)
  this.setState({username:"",email:"",showModal:false,})
   alert('You have saccesfully logged In')
}).catch(err=>{
  this.setState({username:"",email:"",error:true})
  console.log(err)
})
}
  renderRegister = () => {
    return (
      <div>
        <div>
          <form className="form-horizontal form-loanable" onSubmit={this.register}>
            {this.state.error && <div className="alert alert-danger alert-sm">
              <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
              <span className="fw-semi-bold">Error:</span> Registration failed.
              </div> }
            <fieldset>
              <div className="form-group has-feedback required">
                <label htmlFor="login-email" className="col-sm-5">Username</label>
                <div className="col-sm-12">
                  <span className="form-control-feedback" aria-hidden="true"></span>
                  <input
                    type="text"
                    name="username"
                    id="login-email"
                    value={this.state.username}
                    className="form-control"
                    placeholder="Enter username"
                    onChange={this.onChange}
                  />
                </div>
                { /* console.log('error email ::: ' + JSON.stringify(errors)) */}
              </div>
              <div className="form-group has-feedback required">
                <label htmlFor="login-email" className="col-sm-5">Enter your email</label>
                <div className="col-sm-12">
                  <span className="form-control-feedback" aria-hidden="true"></span>
                  <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    id="login-email"
                    className="form-control"
                    placeholder="Enter  email"
                    onChange={this.onChange}
                  />
                </div>
                { /* console.log('error email ::: ' + JSON.stringify(errors)) */}
              </div>
              <div className="form-group has-feedback required">
                <label htmlFor="login-password" className="col-sm-5">Password</label>
                <div className="col-sm-12">
                  <span className="form-control-feedback" aria-hidden="true"></span>
                  <div className="login-password-wrapper">
                    <input
                      type="password"
                      name="password"
                      id="login-password"
                      className="form-control"
                      placeholder="*****"
                      required
                      onChange={this.onChange}
                    />
                    
                  </div>
                </div>
              </div>
              <div className="form-group has-feedback required">
                <label htmlFor="login-password" className="col-sm-5">Confirm Password</label>
                <div className="col-sm-12">
                  <span className="form-control-feedback" aria-hidden="true"></span>
                  <div className="login-password-wrapper">
                    <input
                      type="password"
                      name="confirm_password"
                      id="login-password"
                      className="form-control"
                      value={this.state. confirm_password}
                      placeholder="*****"
                      required
                      onChange={this.onChange}
                    />
                    
                  </div>
                </div>
              </div>
            </fieldset>
            <div className="form-action">
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-left">Enter <span className="icon-arrow-right2 outlined"></span></button>
              
            </div>
          </form>
        
        </div>
        <a
          href="#"
          onClick={e => {
            e.preventDefault();
            this.setMode("login");
          }}
        >
          Log in here
        </a>
      </div>
    );
  };

  renderLogin = () => {
    return (
      <div>
          <form className="form-horizontal form-loanable" onSubmit={this.login}>
            {this.state.error && <div className="alert alert-danger alert-sm">
              <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
              <span className="fw-semi-bold">Error:</span> Login failed.
              </div> }
            <fieldset>
              <div className="form-group has-feedback required">
                <label htmlFor="login-email" className="col-sm-5">Email</label>
                <div className="col-sm-12">
                  <span className="form-control-feedback" aria-hidden="true"></span>
                  <input
                    type="email"
                    name="email"
                    id="login-email"
                    className="form-control"
                    placeholder="Enter  email"
                    onChange={this.onChange}
                    value={this.state.email}
                    required
                  />
                </div>
                { /* console.log('error email ::: ' + JSON.stringify(errors)) */}
              </div>
              <div className="form-group has-feedback required">
                <label htmlFor="login-password" className="col-sm-5">Password</label>
                <div className="col-sm-12">
                  <span className="form-control-feedback" aria-hidden="true"></span>
                  <div className="login-password-wrapper">
                    <input
                      type="password"
                      name="password"
                      id="login-password"
                      className="form-control"
                      placeholder="*****"
                      required
                      onChange={this.onChange}
                      value={this.state.password}
                    />
                    <a
                      href="#"
                      onClick={e => {
                        e.preventDefault();
                        this.setMode("forgot");
                      }}
                    >
                      Forgot Password
                     </a>
                  </div>
                </div>
              </div>
            </fieldset>
            <div className="form-action">
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-left">Enter <span className="icon-arrow-right2 outlined"></span></button>
            </div>
          </form>
       <a
          href="#"
          onClick={e => {
            e.preventDefault();
            this.setMode("register");
          }}
        >
        Create your account
        </a>
      </div>
    );
  };

  render() {
    return (
      <div>
        <Modal
          show={this.props.showModal}
          onHide={this.props.onClose}
          onSubmit={this.onSubmit}
          bsSize="large"
        >
          <Modal.Header closeButton={true}>
            <h2>{ this.state.mode === "login" ? "Login" : this.state.mode === "register" ? "Register" : "Forgot Password" }</h2>
          </Modal.Header>
          <Modal.Body>
            {this.state.mode === "login" ? (this.renderLogin()) : this.state.mode === "register" ? (this.renderRegister()) : (this.renderForgot())}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default LoginForm;
