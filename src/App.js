import React from 'react'

import Query from './components/Query'
import Results from './components/Results'

import schemaInfo from './utils/dbFields'
import './App.css'

function App () {

  const handleSubmit = (data) => {
    console.log('Submitted')
    console.log(data)
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
