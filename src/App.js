import React, { useState } from 'react'
import axios from 'axios'
import Query from './components/Query'
import Results from './components/Results'

import schemaInfo from './utils/dbFields'
import './App.css'

function App () {
  const [data, setData] = useState(null)
  const [requestType, setRequestType] = useState(null)

  const handleSubmit = query => {
    const { method, table, search, where } = query
    const request = {
      method: method,
      url: 'http://localhost:3001/v1/' + table,
      data: {
        search,
        where
      },
      params: search
    }
    setRequestType(method)
    axios(request)
      .then(response => setData(response.data))
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
      />
    </div>
  )
}

export default App
