import React from 'react'

import { ListOfFavorites } from '../components/ListOfFavorites/ListOfFavorites'
import { Layout } from '../components/Layout/index'

export const Favs = () => {
  return (
    <Layout title='Petgram - Tus favoritos' subtitle='Aquí puedes encontrar tus favoritos'>
      <ListOfFavorites />
    </Layout>
  )
}
