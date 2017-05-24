import React, { Component } from 'react';
import logo from './logo.svg';
import './SideBar.css';
import Grid from './Grid.js'

class SideBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            textClicked: false,
            buttons: [],
            h1Tags: [],
            h2Tags: []
        }
    }
    render(){
        return(
            <div>
                <div className="sidebar">
                    <ul>
                        <li><h1 onClick={() =>this._h1Click()}>H1 Text</h1></li>
                        <li><h2 onClick={() => this._h2Click()}>H2 Text</h2></li>
                        <li><button onClick={() => this._buttonClick()}>Button</button></li>
                        <li><input readOnly type="text" onClick={() => this._inputClick()}></input></li>
                    </ul>
                    {this.state.textClicked ? <div>
                        <p>Enter text: </p>
                        <input type="text"></input>
                        <button>Add</button>
                    </div>
                    : null}
                </div>
                <Grid />
            </div>
        )
    }
    _h1Click = () => {
        console.log('h1 was clicked');
        //open editor
        this.setState({textClicked: !this.state.textClicked});


        var h1Array = this.state.h1Tags;
        h1Array.push(
            <h1></h1>
        )
        this.setState({
            h1Tags: h1Array
        })
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