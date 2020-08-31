import React from 'react'
import { ListOfCategories } from './components/ListOfCategories/index'
import { ListOfPhotoCards } from './components/ListOfPhotoCards/index'
import { GlobalStyle } from './GlobalStyles'

export const App = () => (
  <>
    <GlobalStyle />
    <ListOfCategories />
    <ListOfPhotoCards />
  </>
)
