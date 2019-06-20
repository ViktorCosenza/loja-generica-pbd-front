import React, { useState, useEffect } from 'react'

import Filter from './Filters'
import './Query.css'

import allowedMethods from '../utils/allowedMethods'
import allowedTables from '../utils/allowedTables'

function Query (props) {
  const [filterMethod, setFilterMethod] = useState('get')
  const [filterTable, setFilterTable] = useState('funcionarios')
  const [columns, setColumns] = useState(props.schemaInfo[filterTable])

  useEffect(() => {
    const newColumns = props.schemaInfo[filterTable]
    setColumns(newColumns)
  }, [columns, props.schemaInfo, filterTable])

  return (
    <div className='query-wrapper'>
      <header> Query Tab </header>
      <div className='query'>
        <div className='selector-container'>
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
          columns={columns}
          filterMethod={filterMethod || 'get'}
          filterTable={filterTable || 'funcionarios'}
        />
      </div>
    </div>
  )
}

function Selector (props) {
  return (
    <select className='selector'
      onSubmit={props.onSubmit}
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
