import React, { Component } from 'react';
import Layouts from '../../Layouts/index'
import Landing from '../Landing/index'
import Empty from '../Empty/index'
import Footer from '../Footer/index'
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
        return (
            <Layouts>
                 <AuthContainer showModal={this.state.showModal} mode={this.state.mode} close={this.close} />
                <Landing/>
                <Empty/>
            </Layouts>
        );
    }
}

export default index;