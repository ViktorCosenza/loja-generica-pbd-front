import React, { useState } from 'react'
import axios from 'axios'
import Query from './components/Query'
import Results from './components/Results'

import schemaInfo from './utils/dbFields'
import deleteEmptyFields from './utils/deleteEmptyFields'
import './App.css'

function App () {
  const [data, setData] = useState(null)
  const [rowQuantity, setRowQuantity] = useState(0)
  const [requestType, setRequestType] = useState(null)

  const handleSubmit = query => {
    const { method, table, search, where } = query
    deleteEmptyFields(search)
    deleteEmptyFields(where)
    const request = {
      method: method === 'query' ? 'post' : method,
      url: 'http://localhost:3001/v1/' + (method === 'query' ? 'query' : table),
      data: {
        search,
        where,
        query: query.query
      },
      params: search
    }
    console.log(request)
    setRequestType(method)
    axios(request)
      .then(response => {
        console.log(response)
        setData(response.data.rows)
        setRowQuantity(response.data.rowCount)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='App'>
      <header className='App-header'>
        Loja Generica 5023
      </header>
      <Query
        schemaInfo={schemaInfo}
        handleSubmit={handleSubmit}
      />
      <Results
        type={requestType}
        data={data}
        quantity={rowQuantity}
      />
    </div>
  )
}

export default App
