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

  const handleSubmit = (query) => {
    query['table'] = filterTable
    props.handleSubmit(query)
  }

  return (
    <div className='query-wrapper'>
      <header> Query Tab </header>
      <div className='query'>
        <div className='selector-container'>
          <Selector
            items={allowedMethods}
            onChange={event => { setFilterMethod(event.target.value) }}
          />
          {
            filterMethod !== 'query' && <Selector
              items={allowedTables}
              onChange={event => { setFilterTable(event.target.value) }}
            />
          }
        </div>
        <Filter
          columns={columns}
          filterMethod={filterMethod}
          filterTable={filterTable}
          handleSubmit={query => handleSubmit(query)}
        />
      </div>
    </div>
  )
}

function Selector (props) {
  return (
    <select
      className='selector'
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
