import React, { Component } from 'react'

export default class agregarCliente extends Component {
    render() {
        return (
            <div>
                <div className="content mx-auto">
                    <div className="col-sm-8 mx-auto">
                        <h3>Agregar Cliente</h3>
                        <form>
                            <div class="form-group">
                                <input type="text" class="form-control" id="fullname"  placeholder="Ingrese el Nombre y Apellido del Cliente" />
                                
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="razonSocial" placeholder="Ingrese Razon Social del Cliente" />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="direccion" placeholder="Ingrese la Direccion del Cliente" />
                            </div>                            
                            <button type="submit" class="btn btn-primary">Guardar</button>
                        </form>                        
                    </div>
                </div>
            </div>
        )
    }
}
