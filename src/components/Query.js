import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './Filters'
import './Query.css'

import allowedMethods from '../utils/allowedMethods'
import allowedTables from '../utils/allowedTables'

function Query () {
  const [filterMethod, setFilterMethod] = useState(null)
  const [filterTable, setFilterTable] = useState(null)
  const [schemaInfo, setSchemaInfo] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:3001/v1/column_names')
      .then(response => {
        setSchemaInfo(response.data)
      })
      .catch(err => console.log('Got err: ' + err))
  }, [])

  return (
    <div className='query-wrapper'>
      <header> Query Tab </header>
      <div className='query'>
        <div>
          <Selector
            default='Action'
            items={allowedMethods}
            onChange={event => { setFilterMethod(event.target.value) }}
          />
          <Selector
            default='Table'
            items={allowedTables}
            onChange={event => { setFilterTable(event.target.value) }}
          />
        </div>
        <Filter
          schemaInfo={schemaInfo}
          filterMethod={filterMethod || 'get'}
          filterTable={filterTable || 'produtos'}
        />
      </div>
    </div>
  )
}

function Selector (props) {
  return (
    <select className='selector'
      onChange={props.onChange}>
      {
        props.items.map((data, index) =>
          <option key={index} value={data.name}>{data.value}</option>
        )
      }
    </select>
  )
}

export default Query
