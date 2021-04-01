import React, { Component } from 'react';
import Data from '../../data/data.json';
import ViewHijo from './viewHijo.js';
import AgregarCliente from '../agregarcliente/agregarCliente';
import EditCliente from '../editarcliente/editarCliente';

export default class views extends Component {

    state = {  
                data: Data,                
                editcliente: false,
                agregarCliente: false
            }

    AgregarCliente = () =>{
        this.setState({ agregarCliente: true });
    }

    addcliente = (fullnombre, razonSocial, direccion) =>{
                const newData = {
                  nombre: fullnombre,
                  razonSocial: razonSocial,
                  direccion: direccion,      
                  id: this.state.data.length
                }
                this.setState({
                  data: [...this.state.data, newData]
                })
    }

    deletecliente = (id) =>{ 
        const newData = this.state.data.filter( cliente => cliente.id !== id );     
        this.setState({data: newData});
    }   

    render() {
        return (
            <div className="content mx-auto ">                
                { 
                    !this.state.editcliente?
                        <div className="mx-auto">
                            <div className="col-sm-11 mx-auto p-0">    
                                <div className="row mx-auto p-0">
                                    <div className="col-sm-8"></div>
                                    <div className="col-sm-2 pr-0">
                                        <button className="btnsinestilos text-right btnview p-2 rounded" onClick={this.AgregarCliente}>
                                            <div className="btn btn-primary rounded-circle p-2 mr-1"></div>
                                            Agregar Elemento
                                        </button>
                                    </div>
                                    <div className="col-sm-2 pr-0">
                                        <button className="btnsinestilos text-right btnview p-2 rounded">
                                            <div className="btn btn-danger rounded-circle bg-danger p-2 mr-1"></div>
                                            Imprimir Elemento
                                        </button>                                
                                    </div>                                
                                </div>
                            </div>                          
                            <div className="row col-sm-11 mx-auto title-e py-2 border">  
                                <div className="col-sm font-weight-bold text-center"> Nombres y Apellidos  </div>
                                <div className="col-sm font-weight-bold text-center"> Razon Social  </div>                    
                                <div className="col-sm font-weight-bold text-center"> Direccion </div>   
                                <div className="col-sm font-weight-bold text-center"> Accion </div> 
                                <br />                        
                            </div>  
                            <ViewHijo data={this.state.data} deletecliente={this.deletecliente} />                            
                          </div>
                    :<EditCliente />
                }                                                   
            </div>
        )
    }
}
