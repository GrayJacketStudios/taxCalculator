import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Boxes  from "./componentes/Boxes";
import NumberBox from "./componentes/NumberBox";
import ShowHistory from "./componentes/ShowHistory";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {tax: 19, neto:0, total:0, history: []};
    this.handleTax = this.handleTax.bind(this);

    this.handleTotal = this.handleTotal.bind(this);
    this.handleNeto = this.handleNeto.bind(this);
    this.guardaHistory = this.guardaHistory.bind(this);
    this.eliminarFromHistory = this.eliminarFromHistory.bind(this);

  }


  calculaTotal(){

    this.setState({total:(((100+this.state.tax)/100)*this.state.neto).toFixed(2)});
  }

  calculaNeto(){
    this.setState({neto:(((100)/(100+this.state.tax))*this.state.total).toFixed(2)});
  }



  handleTax(amount){
    (amount.target.value < 0)
      ?
      this.setState({tax: 0}):
      this.setState({tax: parseInt(amount.target.value)},() => {this.calculaTotal()})
      ;

  }

  handleNeto(amount){
    (amount.target.value < 0)
      ?
      this.setState({neto: 0}):
      this.setState({neto: amount.target.value},() => {this.calculaTotal()})
      ;
      
  }

  handleTotal(amount){
    (amount.target.value < 0)
      ?
      this.setState({total: 0}):
      this.setState({total: amount.target.value},() => {this.calculaNeto()})
      ;
  }




  guardaHistory(){
    let history = this.state.history.slice();
    history.push({id: (new Date()).getTime(), neto: this.state.neto, total: this.state.total, iva: this.state.tax});
    this.setState({history});
  }

  eliminarFromHistory(e){
    let id = e.target.value;
    let history = this.state.history.filter(item => parseInt(item.id) !== parseInt(id));

    this.setState({history});
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <Boxes>
          <div className="container">
            <div className="row justify-content-center">
              Porcentaje impuesto: <NumberBox value={this.state.tax} cambiaVal={this.handleTax}/>
            </div>

            
              <div className="row">
                Neto:  <NumberBox value={this.state.neto} cambiaVal={this.handleNeto}/>  |  Total: <NumberBox value={this.state.total} cambiaVal={this.handleTotal}/>
              </div>
            </div>

            <button className="btn btn-primary" onClick={this.guardaHistory}>Guardar valores</button>
          
          </Boxes>


          <ShowHistory history={this.state.history} elimina={this.eliminarFromHistory} />

          

        </header>
      </div>
    );
  }
}

export default App;
