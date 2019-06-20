import React, { useState, useEffect } from 'react'

import './Filters.css'

function Filter (props) {
  const method = props.filterMethod
  const columns = props.columns
  const [searchInputs, setSearchInputs] = useState({})
  const [whereInputs, setWhereInputs] = useState({})
  const [queryInput, setQueryInput] = useState('')

  useEffect(() => {
    cleanInputs()
  }, [columns])

  const cleanInputs = () => {
    setSearchInputs({})
    setWhereInputs({})
    setQueryInput('')
  }

  const handleSubmit = () => {
    let query = {}
    if (method === 'get' || method === 'put' || method === 'post') {
      query['search'] = searchInputs
    }
    if (method === 'delete' || method === 'update') {
      query['where'] = whereInputs
    }
    if (method === 'query') {
      query['query'] = queryInput
    }
    query['method'] = method
    props.handleSubmit(query)
  }

  const handleSearchChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setSearchInputs({ ...searchInputs, [name]: value })
  }

  const handleWhereChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setWhereInputs({ ...whereInputs, [name]: value })
  }

  const handleQueryChange = (e) => {
    setQueryInput(e.target.value)
  }

  if (method === 'query') {
    return (
      <div className='filters'>
        <textarea
          name='query'
          value={queryInput}
          onChange={e => handleQueryChange(e)}
        />
        <div style={{ alignSelf: 'flex-end' }}>
          <button
            type='submit'
            value='submit'
            onClick={() => handleSubmit()}
          > SUBMIT </button>
          <button
            type='reset'
            value='reset'
            onClick={() => { cleanInputs() }}
          > RESET </button>
        </div>
      </div>
    )
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
                name={key}
                value={searchInputs[key] || ''}
                placeholder={columns[key]}
                onChange={(e) => handleSearchChange(e)}
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
                  name={key}
                  value={whereInputs[key] || ''}
                  placeholder={columns[key]}
                  onChange={(e) => handleWhereChange(e)}
                />
              )
          }
        </div>
      </div>
      <div style={{ alignSelf: 'flex-end' }}>
        <button
          type='submit'
          value='submit'
          onClick={() => handleSubmit()}
        > SUBMIT </button>
        <button
          type='reset'
          value='reset'
          onClick={() => { cleanInputs() }}
        > RESET </button>
      </div>
    </div>
  )
}

export default Filter
