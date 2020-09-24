import React from 'react'
import { Helmet } from 'react-helmet'

import { ListOfCategories } from '../components/ListOfCategories/index'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards/index'

export const Home = ({ id }) => {
  return (
    <>
      <Helmet>
        <title>Petgram - Tu app de fotos de mascotas</title>
        <meta
          name='description'
          content='Con Petgram puedes encontrar fotos de animales domésticos muy bonitos'
        />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </>
  )
}
