import React, { Component } from 'react';
import logo from './logo.svg';
import './SideBar.css';

class SideBar extends Component {
    render(){
        return(
            <div className="sidebar">
                <ul>
                    <li><h1 onClick={() =>this._h1Click()}>H1 Text</h1></li>
                    <li><h2 onClick={() => this._h2Click()}>H2 Text</h2></li>
                    <li><button onClick={() => this._buttonClick()}>Button</button></li>
                    <li><input readOnly type="text" onClick={() => this._inputClick()}></input></li>
                </ul>
            </div>
        )
    }
    _h1Click = () => {
        console.log('h1 was clicked');
    }
    _h2Click = () => {
        console.log('h2 was clicked');
    }
    _buttonClick = () =>{
        console.log('Button was clicked');
    }
    _inputClick = () => {
        console.log('input was clicked');
    }
}

export default SideBar;