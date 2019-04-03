import React from 'react'

export default (props) => {
  return (
    <div className="form-group mx-sm-3 mb-2">
      <input className="form-control" value={props.value} onChange={props.cambiaVal} type="number"></input>
    </div>
  )
}
