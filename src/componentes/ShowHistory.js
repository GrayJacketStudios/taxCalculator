import React from 'react'
import Boxes from './Boxes'

export default (props) => {
    if(props.history.length !== 0){
        return <div></div>;
      }
      return (
          <Boxes>
            <div className="container">
                  <div className="row justify-content-center">
                    <h4>Historial</h4>
                    <br />
                    <table className="table">
                      <tr>
                        <th>Neto</th>
                        <th>Total</th>
                        <th>Impuesto</th>
                      </tr>
    
    
    
                    </table>
                  </div>
            </div>
            
          </Boxes>
          
    
      );
}
