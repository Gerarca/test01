import React, { Component } from 'react';
import contentLogo from '../../asset/img/contentLogo.png';

export default class index extends Component {
    render() {
        return (
            <div className="content col-sm-12 mx-auto  p-auto">
                <div className="card card-body col-sm-5 mx-auto p-0 border border-secundary">
                    <div className="col-sm-12 title-e pl-2">
                        <div className="row col-sm-12">
                            <h2 className="col-sm py-4 l-3 text-left ">e-Commerse Gapsi</h2>
                            {/*icon bootstrap menu*/}
                            <div className="col-sm-auto rounded-circle menuCircle  my-auto mx-auto mx-0 px-0 p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-three-dots-vertical fa-5x"  viewBox="0 0 16 16">
                                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                </svg>                            
                            </div>
                        </div>
                    </div>                                      
                    <div className="col-sm-6 mx-auto pt-5">
                            <img className="img-fluid" src={contentLogo} />
                    </div>
                    <div className="col-sm-12 mx-auto py-3">
                        <p className="h4 text-secondary">Bienvenido candidato 01</p>
                    </div>                    
                    <div className="col-sm-6 mx-auto pt-3">
                        <button className="btn btn-primary col-ms-12" onClick={this.props.continuar}>Continuar</button>
                    </div>
                    <div className="col-sm-11 mt-5 mb-4 mx-auto border shadow p-1 bg-white rounded">
                        <p className="my-auto text-right mr-2">versión 0.0.1</p>
                    </div>
                </div>
            </div>
        )
    }
}
