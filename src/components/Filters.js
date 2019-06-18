import React from 'react'

function Filter (props) {
  return (
    <div>
      <div> {props.filterMethod || 'NO FILTER SELECTED'} </div>
      <div> {props.filterTable || 'NO FILTER SELECTED'} </div>
      <button>SUBMIT</button>
    </div>
  )
}

export default Filter
