import React, { Component } from 'react';
import ViewsNieto from './viewNieto.js';

export default class viewHijo extends Component {
    render() {
        return this.props.data.map( cliente =>              
            <ViewsNieto 
              cliente = {cliente} 
              key={cliente.id}  

              deletecliente={this.props.deletecliente}
            />);
    }
}
