import React from 'react'

import Query from './components/Query'
import Results from './components/Results'

import schemaInfo from './utils/dbFields'
import './App.css'

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        Loja Generica 5023
      </header>
      <Query
        schemaInfo={schemaInfo}
        onSubmit={() => {
          console.log('Submitted')
        }}
      />
      <Results />
    </div>
  )
}

export default App
