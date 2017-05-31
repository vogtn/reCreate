import React, { Component } from 'react';
import './Grid.css';

class Grid extends Component {

    render(){

        return(
            <div className="board">
              {this.props.newH1Elements}
            </div>
        )
    }
}

export default Grid;
