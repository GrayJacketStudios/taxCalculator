import React from 'react'
import Boxes from './Boxes'

export default (props) => {
    if(props.history.length === 0){
        return <div></div>;
      }
      return (
          <Boxes>
            <div className="container">
                  <div className="row justify-content-center">
                    <h4>Historial</h4>
                    <br />
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>Neto</th>
                                <th>Total</th>
                                <th>Impuesto</th>
                                <th>...</th>
                            </tr>
                                {
                                    props.history.map((item, id) => 
                                        <tr key={item.id}>
                                            <td>{item.neto}</td>
                                            <td>{item.total}</td>
                                            <td>{item.iva}</td>
                                            <td><button 
                                                type="button" 
                                                className='btn btn-danger btn-sm' 
                                                value={item.id} 
                                                onClick={props.elimina}
                                                >x</button></td>
                                        </tr>
                                    )
                                }

    
                        </tbody>
                    </table>
                  </div>
            </div>
            
          </Boxes>
          
    
      );
}
