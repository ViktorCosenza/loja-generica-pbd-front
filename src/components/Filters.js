import React, { useState, useEffect } from 'react'

import './Filters.css'

function Filter (props) {
  const [fields, setFields] = useState(null)
  const schemaInfo = props.schemaInfo
  const method = props.filterMethod
  const table = props.filterTable

  /* TODO: USE CORRECT FIELDS FROM TABLE */
  useEffect(() => {
    console.log(schemaInfo && schemaInfo[table])
    /* const newFields = schemaInfo && Object.keys(schemaInfo).map((key) =>
      <input
        name={schemaInfo[key]}
        placeholder={key}
      />
    )
    setFields(newFields) */
  })

  return (
    <div className='filters'>
      <div className='fields'>
        <div className='search-fields'>
          {schemaInfo && method !== 'delete' &&
            fields
          }
        </div>
        <div className='where-fields'>
          { (method === 'update' || method === 'delete') &&
            fields
          }
        </div>
      </div>
      <div style={{ alignSelf: 'flex-end' }}>
        <button
          value='submit'
          onClick={props.handleSubmit}
        >
        SUBMIT
        </button>
      </div>
    </div>
  )
}

export default Filter
