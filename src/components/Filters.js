import React, { useState, useEffect } from 'react'

import './Filters.css'

function Filter (props) {
  const method = props.filterMethod
  const columns = props.columns
  const [inputs, setInputs] = useState({})

  useEffect(() => {
    setInputs({})
  }, [columns])

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setInputs({ ...inputs, [name]: value })
    console.log(inputs)
  }

  return (
    <div className='filters'>
      <div className='field-container'>
        <div className='field'>
          <header>Search Fields</header>
          {
            method !== 'delete' &&
            Object.keys(columns).map((key, idx) =>
              <input
                key={idx}
                name={key + '-search'}
                value={inputs[key + '-search'] || ''}
                placeholder={columns[key]}
                onChange={(e) => handleChange(e)}
              />
            )
          }
        </div>
        <div className='field'>
          <header>Where Clause</header>
          {
            (method === 'put' || method === 'delete') &&
              Object.keys(columns).map((key, idx) =>
                <input
                  key={idx + Object.keys(columns).length}
                  name={key + '-where'}
                  placeholder={columns[key]}
                  onChange={(e) => handleChange(e)}
                />
              )
          }
        </div>
      </div>
      <div style={{ alignSelf: 'flex-end' }}>
        <button
          type='submit'
          value='submit'
          onClick={e => console.log('submitted')}
        >
        SUBMIT
        </button>
      </div>
    </div>
  )
}

export default Filter
