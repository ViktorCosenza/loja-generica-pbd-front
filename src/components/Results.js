import React from 'react'

import './Results.css'

function Results (props) {
  const data = props.data
  if (props.type !== 'get' && props.type !== 'query') {
    return (
      <div className='results'>
        <header> Results Tab </header>
        <h4> Altered {props.quantity} rows </h4>
      </div>
    )
  }

  return (
    <div className='results'>
      <header> Results Tab </header>
      <div className='table-container'>
        <h4> Altered {props.quantity} rows </h4>
        <table>
          <thead>
            <tr className='table-header'>
              {
                data && data.length > 0 &&
                Object.keys(data[0]).map((el, key) =>
                  <th key={key}>{el}</th>
                )
              }
            </tr>
          </thead>
          <tbody className='table-body'>
            {
              data && data.length > 0 &&
            data.map((row, idx) =>
              <tr key={idx + 1}>
                {
                  Object.keys(row).map((cell, idx) =>
                    <td key={idx}>{row[cell]}</td>
                  )
                }
              </tr>
            )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Results
