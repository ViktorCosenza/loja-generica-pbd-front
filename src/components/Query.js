import React, { useState } from 'react'
import Filter from './Filters'
import './Query.css'

import allowedMethods from '../utils/allowedMethods'
import allowedTables from '../utils/allowedTables'

function Query () {
  const [filterMethod, setFilterMethod] = useState(null)
  const [filterTable, setFilterTable] = useState(null)

  return (
    <div className='query'>
      <header> Query Tab </header>
      <Selector
        className='selector method'
        default='Action'
        items={allowedMethods}
        onChange={event => { setFilterMethod(event.target.value) }}
      />
      <Selector
        className='selector table'
        default='Table'
        items={allowedTables}
        onChange={event => { setFilterTable(event.target.value) }}
      />

      <Filter filterMethod={filterMethod} filterTable={filterTable} />
    </div>
  )
}

function Selector (props) {
  return (
    <select
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
