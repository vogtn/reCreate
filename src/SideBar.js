import React, { Component } from 'react';
import logo from './logo.svg';
import './SideBar.css';

class SideBar extends Component {
    render(){
        return(
            <div className="sidebar">
                <ul>
                    <li><h1>H1 Text</h1></li>
                    <li><h2>H2 Text</h2></li>
                    <li><button>Button</button></li>
                    <li><input readOnly type="text"></input></li>
                </ul>
            </div>
        )
    }
}

export default SideBar;