import React from 'react'
import { ListOfCategories } from './components/ListOfCategories/index'
import { ListOfPhotoCards } from './components/ListOfPhotoCards/index'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo/index'

export const App = () => (
  <>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards />
  </>
)
