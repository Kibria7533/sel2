import React, { Component } from 'react';
import Header from '../components/Header/index'
import Footer from '../components/Footer/index'
import AuthContainer from '../components/AuthContainer'
class index extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="container">
                <Header />
               
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default index;