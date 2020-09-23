import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

import { App } from './App'
import Context from './Context'

const client = new ApolloClient({
  uri: 'https://petgram-server-mario.mariosalinas1605.vercel.app/graphql',
  request: operation => {
    const token = window.sessionStorage.getItem('token')
    const authorization = token ? `Bearer ${token}` : ''
    operation.setContext({
      headers: {
        authorization
      }
    })
  },
  onError: error => {
    console.log('-*- Error')
    console.log(error)
    const { response } = error
    console.log(response)
    if (response && response.errors[0].message === 'you must be logged in to perform this action') {
      window.sessionStorage.removeItem('token')
      window.location.href = '/favs'
    }
  }
})

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>
  , document.getElementById('app'))
