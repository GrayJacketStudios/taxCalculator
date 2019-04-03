import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Boxes  from "./componentes/Boxes";
import NumberBox from "./componentes/NumberBox";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {tax: 19, neto:0, total:0, history: []};
    this.handleTax = this.handleTax.bind(this);
    this.handleHistory = this.handleHistory.bind(this);

    this.handleTotal = this.handleTotal.bind(this);
    this.handleNeto = this.handleNeto.bind(this);


  }


  calculaTotal(){
    let tax;
    tax = 100+this.state.tax;
    tax = tax/100;
    this.setState({total:(tax*this.state.neto).toFixed(2)});
  }

  calculaNeto(){
    let tax;
    tax = (100)/(100+this.state.tax);
    this.setState({neto:(tax*this.state.total).toFixed(2)});
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
      this.setState({total: amount.target.value},() => {this.calculaNeto()});
  }









  handleHistory(history){
    this.setState({history});
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <Boxes>
          <div className="container">
            <div className="row">
              Porcentaje impuesto: <NumberBox value={this.state.tax} cambiaVal={this.handleTax}/>
            </div>

            
              <div className="row">
                Neto:  <NumberBox value={this.state.neto} cambiaVal={this.handleNeto}/>  |  Total: <NumberBox value={this.state.total} cambiaVal={this.handleTotal}/>
              </div>
            </div>
          
          </Boxes>

          

        </header>
      </div>
    );
  }
}

export default App;
