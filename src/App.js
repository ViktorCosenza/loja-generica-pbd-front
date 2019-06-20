import React from 'react'
import axios from 'axios'
import Query from './components/Query'
import Results from './components/Results'

import schemaInfo from './utils/dbFields'
import './App.css'

function App () {
  /* TODO Add display */
  const handleSubmit = query => {
    const { method, table, search, where } = query
    const request = {
      method: method,
      url: 'http://localhost:3001/v1/' + table,
      data: {
        search,
        where
      }
    }
    axios(request)
      .then(response => console.log(response))
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
      <Results />
    </div>
  )
}

export default App
